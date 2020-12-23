// Dependencies.
import { NextApiRequest, NextApiResponse } from 'next'
import STRIPE from 'stripe'
import { generateAdminInstance } from '../../utils/admin'
const stripe = new STRIPE(process.env.STRIPE, { apiVersion: '2020-03-02' })

// ..
export const admin = generateAdminInstance()
const auth = admin.auth()

// Add Source.
const addSource = async (request: NextApiRequest, response: NextApiResponse) => {

  try {

    const token = await auth.verifyIdToken(request.headers.authorization)
    const user = await auth.getUser(token.uid)

    // Source.
    if (request.method === 'POST') {

      // Disect request body.
      const { source }: { source: string } = request.body
      if (!source) throw new Error('Missing Field — `source`')

      const sources = await stripe.customers.listSources(user.uid)
      if (sources.data.length) {
        const existingSource = sources.data[0]
        await stripe.customers.deleteSource(user.uid, existingSource.id)
      }

      const payment_methods = await stripe.paymentMethods.list({
        customer: user.uid,
        type: 'au_becs_debit'
      });
      if (payment_methods.data.length) {
        const existingPM = payment_methods.data[0]
        await stripe.paymentMethods.detach(existingPM.id)
      }

      if (source.indexOf('src') === -1) {
        await stripe.paymentMethods.attach(
          source,
          { customer: user.uid }
        );
      } else {
        await stripe.customers.createSource(user.uid, { source })
      }

      // Return updated customer.
      return response.status(200).json(null)

    }

    throw new Error('Invalid Request Method')

  } catch (error) {

    console.error(error)

    // ..
    response.status(400).json(null)

  }

}

// Export.
export default addSource