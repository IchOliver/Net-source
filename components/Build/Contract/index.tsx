// Dependencies.
import styled from 'styled-components'
import { Section as SECTION } from '../../Section'
import { H2 } from '../../H2'
import { P } from '../../P'
import { H3 } from '../../H3'
import { ContractOption } from './Option'
import { ContractOption as CONTRACTOPTION } from '../../../types'

// Section.
const Section = styled(SECTION)`
  padding-top: 10vmin;

  .contractOptions {
    align-items: flex-start;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 100%;
  }
`

// Props.
interface Props {
  onChange: (option: CONTRACTOPTION) => void
  value: CONTRACTOPTION
}

// Contract.
export const Contract: React.FC<Props> = props => {

  const {onChange, value} = props

  // ..
  return <Section>

    <H3>3. Choose Your Terms</H3>
    <P style={{marginBottom: '30px'}}>No Contracts, no signup fees!</P>

    {/* Options. */}
    <div className="contractOptions">
      
      {/* Sans Contract. */}
      <ContractOption
        applicableJoiningFee={0}
        description="No connection fee, no contract."
        name={CONTRACTOPTION.None}
        onSelect={() => onChange(CONTRACTOPTION.None)}
        selected={value === CONTRACTOPTION.None}
      />

      {/* Sans Contract. */}
      {/* <ContractOption
        applicableJoiningFee={0}
        description="No connection fee with our 12 month contract."
        name={CONTRACTOPTION.OneYear}
        onSelect={() => onChange(CONTRACTOPTION.OneYear)}
        selected={value === CONTRACTOPTION.OneYear}
      /> */}

      {/* 24 Month Contract. */}
      {/* <ContractOption
        applicableJoiningFee={0}
        description="No connection fee with our 24 month contract."
        name={CONTRACTOPTION.TwoYear}
        onSelect={() => onChange(CONTRACTOPTION.TwoYear)}
        selected={value === CONTRACTOPTION.TwoYear}
      /> */}

    </div>

  </Section>

}