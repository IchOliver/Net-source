// Dependencies.
import styled, {css} from 'styled-components'
import {H2} from './H2'
import {H3} from './H3'
import {H5} from './H5'
import {P} from './P'
import {NBNPlan} from '../types'
import {forScreensGreaterThanMobileWidth, colors, fadeFromBottom} from '../utils'
import {CTA} from './CTA'
import {Hyperlink} from './Hyperlink'
import {PlasmaCanvas} from './PlasmaCanvas'
import {PurchaseModal} from './PlaceOrderModal'
import {useState} from 'react'
import { Tick } from './Tick'

// Div.
const Div = styled.div`
  animation: ${fadeFromBottom} 200ms;
  background: rgba(0,0,0,.05);
  box-shadow: 0px 0px ${colors.green};
  padding: 20px;
  text-align: center;
  flex-grow: 0;
  flex-shrink: 0;
  margin-bottom: 100px;
  position: relative;
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

  .price {
    font-size: 60px;
    font-weight: 800;
    margin: auto;
    margin-top: -45px;
    max-width: 100%;
    object-fit: contain;
    object-position: center;
    text-align: center;
    width: 100%;
    line-height: .5;
    margin-bottom: 50px;

    em {
      display: inline-block;
      z-index: 0;
      &::after {
        display: none;
      }
    }

    .cents {
      font-size: 40px;
    }

    .perMonth {
      display: inline-block;
      font-size: 20px;
      z-index: 0;
      &::after {
        display: none;
      }
    }
  }

  .header {
    margin-bottom: 10px;
  }

  .subheader {
    margin-bottom: 20px;
  }


  .specList {
    margin: auto;
    margin-bottom: 25px;
    width: 155px;
    max-width: 80%;
    
    .spec {
      align-items: center;
      display: flex;
      justify-content: flex-start;
      margin-bottom: 7.5px;
      font-weight: 500;

      ${Tick} {
        height: 18px;
        margin-right: 7.5px;
        width: 18px;
      }
    }
  }

  .selectCTA {
    box-sizing: border-box;
    margin-bottom: 20px;
    max-width: 100%;
    width: 150px;
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
    width: calc((100% / 4) - 40px);
  `)}
`

// Props.
interface Props extends NBNPlan {
  onSelect?: (plan: NBNPlan) => void
  selected?: boolean
}

// Plan.
export const Plan: React.FC<Props> = PROPS => {

  // Props.
  const {selected, onSelect, ...props} = PROPS
  const {attributes, id, metadata, name, price} = props
  const {data, description, isNBNPlan, averageDownloadSpeed, supportedConnectionTypes, usefulFor} = metadata

  // !isNBNPlan.
  if (!isNBNPlan) return null

  const dollars = Math.floor((price / 100))
  const cents = (price % 100)

  // ..
  return <Div className={selected && 'selected' || ''}>

    {/* Price. */}
    <H2 className="price">
      ${dollars}<em className="cents">.{cents || '00'}</em> <em className="perMonth">per month</em>
    </H2>

    {/* Name. */}
    <H3 className="header">{name}</H3>

    {/* Description. */}
    <P className="subheader">{description}</P>

    {/* Specs. */}
    <div className="specList">

      {/* Speed. */}
      <div className="spec">
        <Tick/> {averageDownloadSpeed}
      </div>

      {/* Data. */}
      <div className="spec">
        <Tick/> {data}
      </div>

      {/* Uses. */}
      <div className="spec">
        <Tick/> {usefulFor}
      </div>

      {/* Supported Connection Types. */}
      <div className="spec">
        <Tick/> {supportedConnectionTypes}
      </div>

    </div>

    {/* Select. */}
    {onSelect ? <CTA onClick={() => onSelect(props)} className={`selectCTA ${!selected && 'invert' || ''}`}>
      {selected ? 'Selected' : 'Choose plan'}
    </CTA> :
    <Hyperlink href={`/plans/build?plan=${name}`}>
      <CTA className="invert selectCTA">
        {selected ? 'Selected' : 'Choose plan'}
      </CTA>
    </Hyperlink>}

  </Div>

}