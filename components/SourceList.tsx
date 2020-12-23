// Next Page.
import styled from 'styled-components'
import { UserContext } from '../context'
import { useContext, useEffect, useState } from 'react'
import { CTA } from './CTA'
import { CustomerSource } from './CustomerSource'
import { CustomerAccount } from './CustomerAccount'
import Stripe from 'stripe'
import { CreditCardForm } from './CreditCardForm'

// Div.
const Div = styled.div`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  .customerSource {
    margin-right: 10px;
  }
`

// Props.
interface Props {}

// Billing Page.
export const SourceList: React.FC<Props> = props => {

  // User.
  const {customer, fetchCustomer} = useContext(UserContext)

  // State.
  const [editing, setEditing] = useState(false)

  // Sources.
  const sources = customer && customer.sources && customer.sources.data || []
  const payment_methods = customer && customer.payment_methods && customer.payment_methods.data || []

  // Did Mount.
  useEffect(() => {
    fetchCustomer() // Fetch Customer.
  }, [])

  // On Change — Sources.
  useEffect(() => {
    if ((sources && sources.length) || (payment_methods && payment_methods.length)) setEditing(false)
  }, [sources])

  // ..
  return <>
      
      {!editing && <>

        <Div className="sourceList">
          
          {/* Sources. */}
          {customer && !!sources.length && sources.map((source: Stripe.CustomerSource & {card: Stripe.Card}) => 
            <CustomerSource key={source.id} {...source}/>
          )}

          {/* Sources. */}
          {customer && !!payment_methods.length && payment_methods.map((payment_method: Stripe.PaymentMethod & {au_becs_debit: Stripe.BankAccount}) => 
            <CustomerAccount key={payment_method.id} {...payment_method}/>
          )}

        </Div>

        {/* Add Card. */}
        {!sources.length && !payment_methods.length && <CTA onClick={() => setEditing(true)}>
          Add Billing Method
        </CTA>}

        {(!!sources.length || !!payment_methods.length) && <div style={{marginTop: '10px'}}>
          <span className="hyperlink" onClick={() => setEditing(true)}>Update billing method</span>
        </div>}
      
      </>}
      
      {/* Credit Card Form. */}
      {editing && <CreditCardForm onCancel={() => setEditing(false)}/>}

  </>

}