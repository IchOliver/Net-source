// Dependencies.
import styled from 'styled-components'
import Stripe from 'stripe'
import {colors} from '../utils'

// Div.
const Div = styled.div`
  background: rgba(0,0,0,.05);
  border: none;
  border-radius: 0px;
  box-shadow: 10px 10px #98f9c5;
  display: inline-block;
  padding: 20px;
  margin-bottom: 10px;
  max-width: 100%;
  font-size: 14px;
  width: 200px;

  * {
    font-size: inherit;
  }

  .brand {
    margin-bottom: 10px;
  }

  .digits {
    margin-bottom: 5px;
  }
`

// Props.
type Props = Stripe.PaymentMethod & {
  au_becs_debit?: Stripe.BankAccount
}

// Customer Source.
export const CustomerAccount: React.FC<Props> = props => {
  
  // Card.
  const {au_becs_debit} = props
  const {last4} = au_becs_debit

  // ..
  return <Div className="customerSource">
    
    <div className="digits">
     **** **** **** {last4}
    </div>

  </Div>

}