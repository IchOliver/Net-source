// Dependencies.
import styled, { css } from 'styled-components'
import { H3 } from '../../H3'
import { P } from '../../P'
import { colors, fadeFromBottom, forScreensGreaterThanMobileWidth } from '../../../utils'
import { CTA } from '../../CTA'
import { useState } from 'react'

// Div.
const Div = styled.div`
  animation: ${fadeFromBottom} 200ms;
  background: rgba(0,0,0,.05);
  box-shadow: 0px 0px ${colors.green};
  padding: 20px;
  text-align: center;
  flex-grow: 0;
  flex-shrink: 0;
  margin-bottom: 40px;
  transition: box-shadow 50ms ease-in;
  width: 100%;

  &.selected {
    box-shadow: 10px 10px ${colors.green};
  }

  &:nth-child(1) {
    animation-duration: 200ms;
  }
  &:nth-child(2) {
    animation-duration: 400ms;
  }
  &:nth-child(3) {
    animation-duration: 600ms;
  }
  &:nth-child(4) {
    animation-duration: 800ms;
  }

  .header {
    margin-bottom: 10px;
  }

  .subheader {
    margin-bottom: 20px;
  }

  .selectCTA {
    box-sizing: border-box;
    margin-bottom: 20px;
    max-width: 100%;
    width: 200px;
  }

  .spec {
    margin: 5px 0;
  }

  /* Medium. */
  @media screen and (min-width: 650px) {
    margin-bottom: 80px;
    width: calc((100% / 2) - 10px);
  }

  /* Desktop. */
  ${forScreensGreaterThanMobileWidth(css`
    margin-bottom: 20px;
    width: calc((100% / 3) - 40px);
  `)}
`
// Props.
interface Props {
  applicableJoiningFee: number
  description: string
  name: string
  onSelect: () => void
  selected: boolean
}

// Plan.
export const ContractOption: React.FC<Props> = props => {

  // Props.
  const {applicableJoiningFee, description, name, onSelect, selected} = props

  // ..
  return <Div className={selected && 'selected' || ''}>

    {/* Name. */}
    <H3 className="header">{name}</H3>

    {/* Description. */}
    <P className="subheader">
      {description}
      <br/>
      ${applicableJoiningFee} connection fee.
    </P>

    {/* Select. */}
    <CTA onClick={onSelect} className={`selectCTA ${!selected && 'invert' || ''}`}>
      {selected ? 'Selected' : 'Select Contract Duration'}
    </CTA>

  </Div>

}