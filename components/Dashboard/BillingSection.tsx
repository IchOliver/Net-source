// Dependencies.
import {Section} from '../Section'
import {H4} from '../H4'
import {useContext} from 'react'
import {UserContext} from '../../context'
import {Hyperlink} from '../Hyperlink'
import {CTA} from '../CTA'

// Billing Section.
export const BillingSection: React.FC = props => {

  const {customer} = useContext(UserContext)

  // ..
  return <Section>

    {/* Header. */}
    <H4>Billing</H4>

    {/* Billing Method. */}
    

    {/* Manage Billing. */}
    <Hyperlink href="/dashboard/billing">
      <CTA>
        Manage Billing
      </CTA>
    </Hyperlink>

  </Section>

}