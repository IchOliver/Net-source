// Dependencies.
import {Modal} from '../Modal'
import {H2} from '../H2'
import {NBNPlan, AddressDetail} from '../../types'
import {useContext, useState} from 'react'
import {UserContext} from '../../context'
import {LogIn} from './LogIn'
import {BillingMethod} from './BillingMethod'
import {PlaceOrder} from './PlaceOrder'
import Stripe from 'stripe'
import {Location} from './Location'

// Props.
interface Props extends NBNPlan {
  close: () => void
  isOpen: boolean
}

// Checkout Modal.
export const PurchaseModal: React.FC<Props> = props => {

  // Props.
  const {children, close, isOpen, ...plan} = props
  const {name} = plan

  // State.
  const [location, setLocation] = useState<AddressDetail>(null)

  // 
  const {currentUser, customer} = useContext(UserContext)
  const billingMethod = 
    customer
    && customer.sources
    && customer.sources.data
    && (customer.sources.data[0] as Stripe.CustomerSource & {card: Stripe.Card}).card

  const content =
    currentUser === undefined || customer === undefined ? <H2>Loading ..</H2> : // Loading ..
    !location ? <Location onChange={setLocation}/> : // Check Availability.
    currentUser === null ? <LogIn/> : // Unauthenticated.
    !billingMethod ? <BillingMethod/> : // No Payment Information.
    <PlaceOrder
      location={location}
      billing={{brand: billingMethod.brand, last4: billingMethod.last4, type: billingMethod.object}} 
      plan={plan}
    /> // Ready To Place Order.
    // Confirmation + Thank You.

  // ..
  return <Modal
    isOpen={isOpen}
    onRequestClose={close}
  >
    {content}
  </Modal>

}