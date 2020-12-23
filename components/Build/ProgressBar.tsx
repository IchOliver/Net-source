// Dependencies.
import {Fragment} from 'react'
import styled from 'styled-components'

// Div.
const Div = styled.div`
  margin-top: 20px;
  font-size: 14px;

  .step {
    cursor: pointer;

    &.active {
      font-weight: 500;
      text-decoration: underline;
    }
  }
`

// Props.
interface Props {
  currentStep: number
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
  steps: string[]
}

// Progress Bar.
export const ProgressBar: React.FC<Props> = props => {

  // Props.
  const {currentStep, setCurrentStep, steps} = props

  // ..
  return <Div className="buildProgressBar">
    
    {steps.map((step, index) => {

      const className = `step ${currentStep === index && 'active' || ''}`
      const isLastStep = index === steps.length - 1

      // ..
      return <Fragment key={step}>
        <span className={className} onClick={() => setCurrentStep(index)}>{step}</span> 
        {!isLastStep && <>{' '}—{' '}</>}
      </Fragment>

    })}

  </Div>

}