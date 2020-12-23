// Dependencies.
import {NextApiRequest, NextApiResponse} from 'next'
import STRIPE, { Stripe } from 'stripe'
const stripe = new STRIPE(process.env.STRIPE, {apiVersion: '2020-03-02'})
import * as ADMIN from 'firebase-admin'

// ..
export const admin = ADMIN.apps.find(app => app.name === 'SOURCE_ADMIN') || ADMIN.initializeApp({
  credential: ADMIN.credential.cert(require('../../utils/admin.firebase.json')),
  databaseURL: 'https://source-internet.firebaseio.com'
}, `SOURCE_ADMIN`)
const auth = admin.auth()

// Function.
export default async (request: NextApiRequest, response: NextApiResponse) => {

  try {
    
    const token = await auth.verifyIdToken(request.headers.authorization)
    const user = await auth.getUser(token.uid)

    // Method.
    if (request.method !== 'GET') throw new Error('!')

    // Customer.
    const customer : any = await new Promise(async (resolve, reject) => {
      try {
        const customer : any = await stripe.customers.retrieve(user.uid)
        customer.payment_methods = await stripe.paymentMethods.list({
          customer: customer.id,
          type: 'au_becs_debit'
        });
        return resolve(customer)
      } catch (error) {
        if (error.statusCode !== 404) throw error
        const customer : any = await stripe.customers.create({email: user.email, id: user.uid, name: user.displayName } as STRIPE.CustomerCreateParams)
        customer.payment_methods = await stripe.paymentMethods.list({
          customer: customer.id,
          type: 'au_becs_debit'
        });
        customer.sources.data = customer.sources.data && customer.sources.data.map(source => {
          const {card, id} = source as unknown as {id: string, card: Stripe.Card}
          return {card, id}
        }) as unknown as Stripe.CustomerSource[]
        return resolve(customer)
      }
    })

    // ..
    response.status(200).json(customer)

  } catch (error) {

    switch (error.message) {
      case 'FORBIDDEN':
        response.status(400)
        break
      default:
        response.status(500)
        break
    }

    response.end()

  }

}