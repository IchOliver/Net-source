// Dependencies.
import axios from 'axios'
import styled from 'styled-components'
import { loadStripe, Source } from '@stripe/stripe-js'
import { 
  AuBankAccountElement,
  CardNumberElement, CardExpiryElement, CardCvcElement, useElements, useStripe
} from '@stripe/react-stripe-js'
import { useContext, useState } from 'react'
import { FormField } from './FormField'
import { CTA } from './CTA'
import { UserContext } from '../context'
import { Input } from './Input'
import { fadeIn } from '../utils'
import { ValidationWrapper } from './ValidationWrapper'

//
const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE)

// Div.
const Div = styled.div`
  animation: ${fadeIn} 100ms;
  max-width: 100%;
  width: 400px;

  .StripeElement {
    border: 1px solid #000;
    padding: 10px;
  }

  .empty, .StripeElement--empty {
    border-color: rgba(0, 0, 0, .15);
  }

  .submitButton {
    margin-top: 20px;
  }

  .selectCTA {
    padding: 10px 12px;
  }

  .poweredByStripe {
    display: block;
    height: 30px;
    margin-top: 10px;
  }
`

// Props.
interface Props {
  onCancel?: () => void
}

// Credit Card Form.
export const CreditCardForm: React.FC<Props> = props => {

  // User.
  const {addSource, currentUser} = useContext(UserContext)

  // State.
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [nameFieldError, setNameFieldError] = useState('')
  const elements = useElements()
  const stripe = useStripe()
  const [useBECS, setUseBECS] = useState(false)

  // Create Source.
  const createSourceFromElements = async () => {

    if (useBECS) {
      const res = (await axios.get(`/api/becs`)).data || null
      const result = await stripe.confirmAuBecsDebitSetup(res.clientSecret, {
        payment_method: {
          au_becs_debit: elements.getElement(AuBankAccountElement),
          billing_details: {
            name: name,
            email: currentUser.email,
          },
        }
      });
      return {
        id: result.setupIntent.payment_method
      }
    }

    return (await stripe.createSource(elements.getElement(CardNumberElement), {owner: {name}})).source
  }

  // On Submit.
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault()
      setLoading(true)
      if (!name) throw new Error('!Name')
      const source = await createSourceFromElements()
      await addSource(source as Source)
    } catch (error) {
      console.log(error.message)
      if (!name) setNameFieldError('Required.')
      else setError('An error occurred.')
    }
    setLoading(false)
  }

  // Clear Errors.
  const clearErrors = () => {
    if (error) setError('')
    if (nameFieldError) setNameFieldError('')
  }

  // ..
  return <Div className="creditCardForm">

    <form onSubmit={onSubmit}>

      {/* Card. */}
      {!useBECS && <>
      
        {/* Name on Card. */}
        <FormField title="Name on Card">
          <ValidationWrapper error={nameFieldError}>
            <Input onChange={e => {
              if (nameFieldError) setNameFieldError('')
              setName(e.target.value)
            }} placeholder="First Last" value={name}/>
          </ValidationWrapper>
        </FormField>

        {/* Card Number. */}
        <FormField title="Card Number">
          <CardNumberElement 
            options={{classes: {empty: 'empty'}}}
            onChange={clearErrors}
          />
        </FormField>

        {/* Expiry. */}
        <FormField title="Expiry">
          <CardExpiryElement onChange={clearErrors}/>
        </FormField>

        {/* CVC. */}
        <FormField title="CVC">
          <CardCvcElement onChange={clearErrors}/>
        </FormField>
      
      </>}

      {/* Use BECS. */}
      {useBECS && <>

        {/* Name. */}
        <FormField title="Name of Account Holder">
          <ValidationWrapper error={nameFieldError}>
            <Input onChange={e => {
              if (nameFieldError) setNameFieldError('')
              setName(e.target.value)
            }} placeholder="First Last" value={name}/>
          </ValidationWrapper>
        </FormField>
        
        {/* Bank Input. */}
        <FormField title="Account Details">
          <AuBankAccountElement/>
        </FormField>

        {/* Display mandate acceptance text. */}
        <div className="mandate-acceptance" style={{marginTop: '20px'}}>
          By providing your bank account details and confirming this payment,
          you agree to this Direct Debit Request and 
          the <a href="https://stripe.com/au-becs-dd-service-agreement/legal">Direct Debit Request service agreement</a>, and 
          authorise Stripe Payments Australia Pty Ltd ACN 160 180 343
          Direct Debit User ID number 507156 (“Stripe”) to debit your account
          through the Bulk Electronic Clearing System (BECS) on behalf of
          Source Internet Pty Ltd (the "Merchant") for any amounts separately
          communicated to you by the Merchant. You certify that you are either
          an account holder or an authorised signatory on the account listed above.
        </div>

      </>}

      {/* CTA. */}
      <ValidationWrapper error={error}>
        <CTA className="submitButton">{loading ? 'Saving ..' : 'Save'}</CTA>
      </ValidationWrapper>

      {/* Use card. */}
      {useBECS && <div style={{marginTop: '20px'}}>
        <CTA className="selectCTA" onClick={() => setUseBECS(false)}>Use Card</CTA>
      </div>}

      {/* Use Direct Debit. */}
      {!useBECS && <div style={{marginTop: '20px'}}>
        <CTA className="selectCTA" onClick={() => setUseBECS(true)}>Use Direct Debit</CTA>
      </div>}

      <div style={{marginTop: '10px'}}>
        <span className="hyperlink" onClick={props.onCancel}>Cancel</span>
      </div>

    </form>
    
  </Div>

}