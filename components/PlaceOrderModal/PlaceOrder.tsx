// Dependencies.
import styled from 'styled-components'
import {H2} from '../H2'
import {P} from '../P'
import {NBNPlan, AddressDetail} from '../../types'
import {H5} from '../H5'
import {CTA} from '../CTA'
import {useContext, useState} from 'react'
import {UserContext} from '../../context'

// Div.
const Div = styled.div`
  padding-bottom: 10px;
  ${H2} {
    margin-bottom: 10px;
  }
  ${P} {
    margin-bottom: 20px;
  }
`

// Props.
interface Props {
  billing: {
    brand: string
    last4: string
    type: string
  }
  location?: AddressDetail
  plan: NBNPlan
}

// Place Order.
export const PlaceOrder: React.FC<Props> = props => {

  // Props.
  const {orderPlanForAddressWithSource} = useContext(UserContext)
  const {billing, location, plan} = props
  const billingMethod = `${billing.brand} ending in ${billing.last4}`

  // State.
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // Place Order.
  const placeOrder = async () => {
    try {
      setLoading(true)
      // await orderPlanForAddressWithSource(plan, location, billing.id)
    } catch (error) {
      setError('An error occurred.')
    }
    setLoading(false)
  }

  // ..
  return <Div>

    <H2>Order</H2>
    <P>Order an nbn™ service by submitting the form below.</P>

    {/* Service. */}
    <H5>Service</H5>
    <P>Unlimited {plan.name} at ${(plan.price/100).toFixed(0)} per month</P>

    {/* Address. */}
    <H5>Your Address</H5>
    <P>{location.address1 || ''} {location.address2}</P>

    {/* Billing Method. */}
    <H5>Billing Method</H5>
    <P>{billingMethod}</P>

    {/* Waiver (Confirm Understanding/Acceptance). */}

    {/* Submit CTA. */}
    <CTA onClick={placeOrder}>
      {loading ? 'Loading ..' : 'Place Order'}
    </CTA>

  </Div>

}