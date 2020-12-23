// Dependencies.
import axios from 'axios'
import STRIPE from 'stripe'
import { NextApiRequest, NextApiResponse } from 'next'
import { generateAdminInstance } from '../../utils/admin'
import { NBNPlan, OrderPlanBody, ContractOption } from '../../types'
import { WebClient } from '@slack/web-api'
import { constants } from 'buffer'
import { chdir } from 'process'
import { connect } from 'http2'

// Globals.
export const admin = generateAdminInstance()
const auth = admin.auth()
const firestore = admin.firestore()
const slackToken = process.env.SLACK_OAUTH_TOKEN
const stripe = new STRIPE(process.env.STRIPE, {apiVersion: '2020-03-02'})
const web = new WebClient(slackToken)

// Plans.
const plans = async (request: NextApiRequest, response: NextApiResponse) => {

  try {

    // GET. Fetch Plans.
    if (request.method === 'GET') {
      const [prices, products] = await Promise.all([(await stripe.prices.list({limit: 50})).data, (await stripe.products.list({limit: 50})).data])
      const plans: NBNPlan[] = products.map(plan => {
        const price = prices.find(price => price.product === plan.id)
        return {...plan, price: price.unit_amount}
      }).sort((A, B) => A.price > B.price && 1 || -1)
      return response.status(200).json(plans)
    }

    // POST. Order Plan.
    if (request.method === 'POST') {

      // User.
      const token = await auth.verifyIdToken(request.headers.authorization)
      const user = await auth.getUser(token.uid)

      // Address + Plan + Source.
      const {addons, contract, location, metadata, plan, source, additionalNotes}: OrderPlanBody = request.body
      if (!location || !location.formattedAddress || !location.id) throw new Error('!Address')
      if (!plan) throw new Error('!Plan')
      if (!source) throw new Error('!Source')


      // Prices. 
      const [prices, products] = await Promise.all([(await stripe.prices.list({limit: 50})).data, (await stripe.products.list({limit: 50})).data])

      // Subscription Items.
      const items: STRIPE.SubscriptionCreateParams.Item[] = []

      // Plan.
      items.push({price: prices.find(price => price.product === plan.id).id}) // Plan.

      // Static IP.
      if (addons.staticIP) {
        const staticIP = products.find(product => product.metadata.staticIP)
        items.push({price: prices.find(price => price.product === staticIP.id).id})
      }

      // VOIP Phone.
      if (addons.VOIP) {
        const VOIP = products.find(product => product.metadata.VOIP)
        items.push({price: prices.find(price => price.product === VOIP.id).id})
      } 

      // Invoice Items.
      const add_invoice_items: STRIPE.SubscriptionCreateParams.AddInvoiceItem[] = []

      // Connection Fees.
      const shouldChargeDiscountedConnectionFee = contract === ContractOption.OneYear
      const shouldChargeFullConnectionFee = contract !== ContractOption.TwoYear

      // Discounted Connection Fee.
      if (shouldChargeDiscountedConnectionFee) {
        const connectionFee = products.find(product => product.metadata.connectionFee100)
        add_invoice_items.push({price: prices.find(price => price.product === connectionFee.id).id})
      }

      // Full Connection Fee.
      else if (shouldChargeFullConnectionFee) {
        const joiningFee = products.find(product => product.metadata.joiningFee)
        add_invoice_items.push({price: prices.find(price => price.product === joiningFee.id).id})
      }

      // Installation.
      if (addons.installation) {
        const installation = products.find(product => product.metadata.installation)
        add_invoice_items.push({price: prices.find(price => price.product === installation.id).id})
      }

      // Modem.
      if (addons.modem) {
        const modem = products.find(product => product.metadata.modem)
        add_invoice_items.push({price: prices.find(price => price.product === modem.id).id})
      }

      // Create Subscription.
      const subscription = await stripe.subscriptions.create({
        add_invoice_items,
        customer: user.uid,
        items,
        metadata: {
          
        },
        default_payment_method: source,
        payment_behavior: 'error_if_incomplete' // Throw Error If Payment Does Not Succeed.
      }).catch(error => {
        throw 'STRIPE ERROR'
      })

      // Create Service Record.
      const service = {
        test: process.env.NODE_ENV !== 'production',
        addons,
        contract,
        customer: user.uid,
        name: user.displayName,
        email: user.email,
        location,
        metadata,
        subscription: subscription.id,
        plan,
        timestamp: Date.now(),
        additionalNotes
      }
      await firestore.collection('services').doc(user.uid).create(service)

      // Send Order Confirmation.
      const {displayName, email} = user
      const sendOrderConfirmation = async () => {
        const orderConfirmationEmailTemplateId = 'd-ba79396d71924872bb3dc68170d39d58'
        await axios.post('https://api.sendgrid.com/v3/mail/send', {
          template_id: orderConfirmationEmailTemplateId,
          from: {name: 'Source Internet', email: 'team@sourceinternet.com.au'},
          to: email,
          subject: 'Welcome to Source Internet',
          personalizations: [{
            to: [{email}],
            dynamic_template_data: {
              first_name: displayName,
              order_id: subscription.id,
              name: displayName,
              address: location.formattedAddress,
              plan: plan.name,
              contract
            }
          }]
        }, {headers: {'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`}})
        
      }


      // Post Notification To Slack.
      const orderChannelId = 'C0155HL692N'
      const postNotificationToSlack = async () => await web.chat.postMessage({channel: orderChannelId, text: `
              ${process.env.NODE_ENV !== 'production' && '*TEST —* ' || ''}*Order Received*
              _Customer_ — ${user.uid}
              _Name_ - ${user.displayName}
              _Email_ — ${user.email}
              _Phone Number_ — ${user.phoneNumber}
              _Location_ — ${location.formattedAddress}
              _Location ID_ — ${location.id}
              _Plan_ — ${plan.name}
              _Contract Duration_ — ${contract}
              _Subscription_ — ${subscription.id}
              _Additional Notes_ - ${additionalNotes}
              _Addons_ — ${[
              addons.VOIP && 'VOIP' || '', 
              addons.installation && 'Installation' || '',
              addons.modem && 'Modem' || '',
              addons.staticIP && 'Static IP' || ''
            ].join(' + ')}
`})
          
      await Promise.all([postNotificationToSlack(), sendOrderConfirmation()])

      // ..
      return response.status(200).json(null)

    }
    
    // Invalid Method.
    throw new Error('Invalid Request Method.')

  } catch (error) {

    // Stripe Error.
    if (error === 'STRIPE ERROR') return response.status(400).json('BILLING ERROR')

    // ..
    return response.status(400).json([])

  }

}

// Export.
export default plans