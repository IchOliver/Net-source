// Dependencies.
import styled, { css } from 'styled-components'
import { Section as SECTION } from '../Section'
import { NBNPlan } from '../../types'
import { fadeFromRight, forScreensGreaterThanMobileWidth } from '../../utils'
import { Plan } from '../Plan'
import { H3 } from '../H3'
import { P } from '../P'

// Section.
const Section = styled(SECTION)`
  padding-top: 10vmin;

  .plansContainer {
    align-items: flex-start;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 40px;
    position: relative;
  }

  /* Desktop. */
  ${forScreensGreaterThanMobileWidth(css`

  `)}
`

// Props.
interface Props {
  onSelect: (plan: NBNPlan) => void
  plans: NBNPlan[]
  selectedPlan?: NBNPlan
}

// Plan.
export const SelectPlan: React.FC<Props> = props => {

  // Props.
  const {onSelect, plans, selectedPlan} = props

  // ..
  return <Section>

    <H3>2. Select A Plan</H3>
    <P style={{marginBottom: '50px'}}>Select a plan with speed capabilities that suit your specific needs.</P>

    <div className="plansContainer">

      {plans.map((plan, index) => {
        
        const {id} = plan
        
        return <Plan 
          key={id} 
          onSelect={onSelect}
          selected={selectedPlan && selectedPlan.id === id}
          {...plan}
        />

      })}

    </div>

  </Section>

}