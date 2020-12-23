// Dependencies.
import styled from 'styled-components'
import {H2} from '../H2'
import {P} from '../P'
import {CreditCardForm} from '../CreditCardForm'

// Div.
const Div = styled.div`
  padding-bottom: 5px;
  ${H2} {
    margin-bottom: 10px;
  }
  ${P} {
    padding-bottom: 20px;
  }
`

// Props.
interface Props {}

// Billing Method.
export const BillingMethod: React.FC<Props> = props => {

  // ..
  return <Div>
    <H2>Billing</H2>
    <P>
      Add or select a billing method to purchase an nbn™ plan.
      <br/>
      We use <a href="https://stripe.com" target="_blank">Stripe</a> to 
      ensure your billing information is handled securely.
    </P>
    <CreditCardForm/>
  </Div>

}