// Dependencies
import { NextApiRequest, NextApiResponse } from 'next'
const stripe = require('stripe')(process.env.STRIPE)

import { generateAdminInstance } from '../../utils/admin'
export const admin = generateAdminInstance()
const auth = admin.auth()

export default async (request: NextApiRequest, response: NextApiResponse) => {
    // Set your secret key. Remember to switch to your live secret key in production!
    // See your keys here: https://dashboard.stripe.com/account/apikeys

    try {
        // await auth.verifyIdToken(request.headers.authorization)

        const setupIntent = await stripe.setupIntents.create({
            payment_method_types: ['au_becs_debit'],
        });
        const clientSecret = setupIntent.client_secret;
        response.status(200).json({
            clientSecret
        })
    } catch (error) {
        console.log('err', error)
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
