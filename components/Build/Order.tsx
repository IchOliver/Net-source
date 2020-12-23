// Dependencies.
import Stripe from 'stripe'
import styled from 'styled-components'
import { H3 } from '../H3'
import { P } from '../P'
import { NBNPlan, AddressDetail, ContractOption, Addons } from '../../types'
import { H5 } from '../H5'
import { CTA } from '../CTA'
import { useContext, useState } from 'react'
import { UserContext } from '../../context'
import { Section as SECTION } from '../Section'
import { fadeFromRight, colors, language } from '../../utils'
import { Hyperlink } from '../Hyperlink'
import { ValidationWrapper } from '../ValidationWrapper'
import { H4 } from '../H4'
import { Tick } from '../Tick'
import { useAddressDetail } from '../../utils/addressDetail'
import { FormField } from '../FormField'
import { Input } from '../Input'

// Div.
const Section = styled(SECTION)`
  animation: ${fadeFromRight} 200ms;
  padding-top: 10vmin;

  .checkboxField {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-bottom: 0;
    margin-top: 5px;
  }
`

// Props.
interface Props {
  addons: Addons
  contract: ContractOption
  location: AddressDetail | undefined
  plan: NBNPlan | undefined
  setCurrentStep: (index: number) => void
}

// Order.
export const Order: React.FC<Props> = props => {

  // Props.
  const {addons, contract, location, plan, setCurrentStep} = props

  // User.
  const {customer, orderPlanForAddressWithSource} = useContext(UserContext)
  const {formattedAddress} = useAddressDetail(location)

  // State.
  const [error, setError] = useState('')
  const [hasExistingConnection, setHasExistingConnection] = useState(false)
  const [loading, setLoading] = useState(false)
  const [marketingConsent, setMarketingConsent] = useState(false)
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [additionalNotes, setAdditionalNotes] = useState('')

  // Billing Method.
  const customerSource = customer && customer.sources && customer.sources.data && customer.sources.data[0]
  const customerPaymentMethod = customer && customer.payment_methods && customer.sources.data && customer.payment_methods.data[0]
  const billingMethod = customerSource || customerPaymentMethod
  const billing =
    billingMethod
    && (billingMethod as Stripe.CustomerSource & {card: Stripe.Card}).card
  const formattedBillingMethod = billing && `${billing.brand} ending in ${billing.last4}`

  // Place Order.
  const placeOrder = async () => {
    try {
      if (error) setError('')
      setLoading(true)
      if (!addons) throw new Error('!Addons')
      if (!billingMethod) throw new Error('!Billing')
      if (!contract) throw new Error('!Contract')
      if (!location) throw new Error('!Location')
      if (!plan) throw new Error('!Plan')
      if (!termsAccepted) throw new Error('!TermsAccepted')
      const metadata = {hasExistingConnection, marketingConsent}
      await orderPlanForAddressWithSource({addons, contract, plan, location, source: billingMethod.id, metadata, additionalNotes})
    } catch (error) {
      console.log('error', error)
      switch (error.message) {
        case '!Plan':
          setError('Plan required.')
          break
        case '!Location':
          setError('Service address required.')
          break
        case '!Billing':
          setError('Valid billing method required.')
          break
        case '!TermsAccepted':
          setError('Acceptance of terms required.')
          break
        default:
          setError('An error occurred.')
      }
      if (error.response && error.response.data === 'BILLING ERROR') setError('An error occurred when attempting to charge your provided billing method.')
      setLoading(false)
    }
  }

  // Due Today (cents).
  const dueToday =
    (plan && plan.price || 0) + // Plan.
    ((contract === ContractOption.None && 0) || (contract === ContractOption.OneYear && 0) || 0) + // Connection Fee.
    (addons.staticIP && 1500 || 0) + // Static IP.
    (addons.VOIP && 1000 || 0) + // VOIP.
    (addons.installation && 5000 || 0) + // Installation.
    (addons.modem && 12000 || 0) // Modem.

  // Ongoing Costs (cents).
  const recurringPayments =
    (plan && plan.price || 0) +
    (addons.staticIP && 1500 || 0) +
    (addons.VOIP && 1000 || 0)

  // ..
  return <Section>

    <H3>7. Confirm Your Order</H3>
    <P style={{margin: 'auto', maxWidth: '100%', width: '400px'}}>Confirm your order by reviewing your selections, accepting our terms of service, and submitting the form below.</P>

    {/* Order. */}
    <H4>Your Order</H4>
    <div>

      {/* Address. */}
      <P>
        {language.nbn} service for {location.address1} {location.address2}
      </P>

      {/* Plan. */}
      <P>
        <Tick style={{height: '12px'}}/>&nbsp;{plan && plan.name} — ${plan && (plan.price / 100).toFixed(2)} per month [ {contract} ]
      </P>

      {/* Connection Fee. */}
      {contract === ContractOption.None && <P>
        <Tick style={{height: '12px'}}/>&nbsp;Connection Fee — Free
      </P>}
      {contract === ContractOption.OneYear && <P>
        <Tick style={{height: '12px'}}/>&nbsp;Connection Fee — Free
      </P>}

      {/* Addons. */}

      {/* Static IP. */}
      {addons.staticIP && <P>
        <Tick style={{height: '12px'}}/>&nbsp;Static IP — $15.00 per month
      </P>}

      {/* VOIP Phone Connection. */}
      {addons.VOIP && <P>
        <Tick style={{height: '12px'}}/>&nbsp;VOIP Phone Connection — $10.00 per month
      </P>}

      {/* Modem. */}
      {addons.modem && <P>
        <Tick style={{height: '12px'}}/>&nbsp;NBN Compatible Modem — $120.00
      </P>}

      {/* Installation. */}
      {addons.installation && <P>
        <Tick style={{height: '12px'}}/>&nbsp;Installation — $50.00
      </P>}

      {/* Line. */}
      <div style={{borderTop: `1px solid ${colors.black}`, display: 'inline-block', marginBottom: '7.5px', maxWidth: '100%', width: '400px'}}/>

      <P>
        Due Today — ${(dueToday / 100).toFixed(2)}
      </P>

      <P>
        Monthly Cost Thereafter — ${(recurringPayments / 100).toFixed(2)}
      </P>

    </div>

    {/* Additional Notes */}
    <H4>Additional Notes</H4>
    <div className="checkboxField" style={{alignItems: 'center', display: 'flex', marginBottom: '0', marginTop: '5px'}}>
      <FormField title="">
      <Input onChange={e => setAdditionalNotes(e.target.value)} />
      </FormField>
    </div>

    {/* Waiver (Confirm Understanding/Acceptance). */}
    <H4>Our Terms</H4>
    <div className="checkboxField" style={{alignItems: 'center', display: 'flex', marginBottom: '0', marginTop: '5px'}}>
      <input onChange={e => setTermsAccepted(e.target.checked)} style={{marginRight: '10px'}} type="checkbox" checked={termsAccepted}/>
      <P style={{display: 'inline-block', marginBottom: 0}}>
        Tick this checkbox to show that you've read and agree to our <Hyperlink href="/terms" target="_blank">Terms of Service</Hyperlink> and 
        {' '}<Hyperlink href="/criticalinformation"  target="_blank">Critical Information Summary</Hyperlink>{' '}.
      </P>
    </div>

    {/* Existing Service. */}
    <div className="checkboxField" style={{alignItems: 'center', display: 'flex', marginBottom: '0', marginTop: '5px'}}>
      <input onChange={e => setHasExistingConnection(e.target.checked)} style={{marginRight: '10px'}} type="checkbox" checked={hasExistingConnection}/>
        <P style={{display: 'inline-block', marginBottom: 0}}>
          Tick this checkbox if your home has an existing {language.nbn} connection (to help us connect you faster).
        </P>
    </div>

    {/* Marketing Consent. */}
    <div className="checkboxField" style={{alignItems: 'center', display: 'flex', marginBottom: '20px', marginTop: '5px'}}>
      <input onChange={e => setMarketingConsent(e.target.checked)} style={{marginRight: '10px'}} type="checkbox" checked={marketingConsent}/>
      <P style={{display: 'inline-block', marginBottom: 0}}>
        Tick this checkbox if you'd like to be notified of future updates and promotional offers.
      </P>
    </div>

    {/* Submit CTA. */}
    <div style={{marginTop: '40px'}}>
      <ValidationWrapper error={error}>
        <CTA onClick={placeOrder}>
          {loading ? 'Placing Order ..' : `Place Order [ $${(dueToday / 100).toFixed(2)} ]`}
        </CTA>
      </ValidationWrapper>
    </div>

  </Section>

}