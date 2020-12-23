// Dependencies.
import {NextApiRequest, NextApiResponse} from 'next'
import * as ADMIN from 'firebase-admin'
import axios from 'axios'

// ..
export const admin = ADMIN.apps.find(app => app.name === 'SOURCE_ADMIN') || ADMIN.initializeApp({
  credential: ADMIN.credential.cert(require('../../utils/admin.firebase.json')),
  databaseURL: 'https://source-internet.firebaseio.com'
}, `SOURCE_ADMIN`)
const auth = admin.auth()

// Function.
export default async (request: NextApiRequest, response: NextApiResponse) => {

  try {
    
    // Validate request method.
    if (request.method !== 'POST') throw new Error('Invalid Request Method.')

    // Dissect request body.
    const {firstName, lastName, mobileNumber, email, password} = request.body
    if (!firstName || !lastName || !mobileNumber || !email || !password) throw new Error('Invalid Request.')

    // Create User.
    const user = await auth.createUser({
      displayName: `${firstName} ${lastName}`,
      email,
      password,
      phoneNumber: mobileNumber
    })

    // Create Token + Send Welcome Email.
    const welcomeEmailTemplateId = 'd-c121929a5580451db02525aa708221e6'
    const sendWelcomeEmail = async () => await axios.post('https://api.sendgrid.com/v3/mail/send', {
      template_id: welcomeEmailTemplateId,
      from: {name: 'Source Internet', email: 'team@sourceinternet.com.au'},
      to: email,
      subject: 'Welcome to Source Internet',
      personalizations: [{
        to: [{email}],
        dynamic_template_data: {first_name: firstName}
      }]
    }, {headers: {'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`}})
    const [token] = await Promise.all([await auth.createCustomToken(user.uid), await sendWelcomeEmail()])

    // Hand Back Token.
    response.status(200).json(token)

  } catch (error) {
    console.log('err', error)

    // ..
    const {code, message} = error

    // Handle Code Based Error.
    switch (code) {
      case 'auth/email-already-exists':
        return response.status(400).json('auth/email-already-exists')
    }

    // Handle Message Based Error.
    switch (message) {
      case 'FORBIDDEN':
        return response.status(400).end()
      default:
        return response.status(500).end()
    }

  }

}