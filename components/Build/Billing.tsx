// Dependencies.
import styled from 'styled-components'
import { H3 } from '../H3'
import { P } from '../P'
import { CreditCardForm } from '../CreditCardForm'
import { Section as SECTION } from '../Section'
import { fadeFromRight } from '../../utils'
import { useContext } from 'react'
import { UserContext } from '../../context'
import { SourceList } from '../SourceList'
import { CTA } from '../CTA'
import Stripe from 'stripe'

// Section.
const Section = styled(SECTION)`
  animation: ${fadeFromRight} 200ms;
  padding-top: 10vmin;

  .sourceList {
    justify-content: center;
  }

  .creditCardForm {
    margin: auto;
  }
`

// Props.
interface Props {}

// Billing.
export const Billing: React.FC<Props> = props => {

  // Customer.
  const {customer} = useContext(UserContext)

  // ..
  return <Section>

    <H3>6. Set Your Preferred Billing Method</H3>

    <P style={{marginBottom: '30px'}}>
      Add or update your preferred billing method below.
      <br/>
      We use <a href="https://stripe.com" target="_blank">Stripe</a> to ensure your billing information is handled securely.
    </P>

    {/* Sources. */}
    <SourceList/>

  </Section>

}