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
type Props = Stripe.CustomerSource & {
  card?: Stripe.Card
}

// Customer Source.
export const CustomerSource: React.FC<Props> = props => {
  
  // Card.
  const {card} = props
  const {brand, exp_month, exp_year, last4} = card

  // ..
  return <Div className="customerSource">

    <div className="brand">
      {brand}
    </div>
    
    <div className="digits">
     **** **** **** {last4}
    </div>

    <div className="exp">
      Exp {exp_month}/{exp_year}
    </div>

  </Div>

}