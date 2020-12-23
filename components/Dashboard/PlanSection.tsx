// Dependencies.
import { Section } from '../Section'
import { H4 } from '../H4'
import { P } from '../P'
import { Hyperlink } from '../Hyperlink'
import { CTA } from '../CTA'
import { useContext } from 'react'
import { UserContext } from '../../context'

// Props.
interface Props {}

// Plan Section.
export const PlanSection: React.FC<Props> = props => {

  // Service.
  const {service} = useContext(UserContext)

  // Service Active.
  if (service && service.status === 'active') return <Section>

    <H4>Plan</H4>

    <P>
      {service.plan.name}
    </P>

  </Section>

  // Service Pending.
  if (service) return <Section>

    <H4>Plan</H4>

    <P>
      We are currently processing your order for an {service.plan.name} plan. 
      We'll text you as soon as it's ready.
    </P>

  </Section>

  // No Service.
  return <Section>

    {/* Plan. */}
    <H4>Plan</H4>

    <P>
      You don't currently have an active plan.
    </P>

    <Hyperlink href="/plans/build">
      <CTA>Build An Unlimited nbn™ Plan</CTA>
    </Hyperlink>

  </Section>

}