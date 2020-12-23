// Dependencies.
import styled, {css} from 'styled-components'
import {SourceFeature} from '../types'
import {H5} from './H5'
import {P} from './P'
import {H4} from './H4'
import {forScreensGreaterThanMobileWidth} from '../utils'
import { Tick } from './Tick'

// Div.
const Div = styled.div`
  flex-grow: 0;
  margin: auto;
  margin-top: 0;
  margin-bottom: 40px;
  width: 300px;

  .tick {
    width: 20px;
  }

  ${H4} {
    text-align: center;
  }

  ${P} {
    text-align: center;
  }
  
  /* Desktop. */
  ${forScreensGreaterThanMobileWidth(css`
    background: #FFFFFF;
    margin: 0;
    margin-bottom: 40px;
    margin-right: 50px;
    width: 250px;
    padding: 20px;

    ${H4}, ${P} {
      text-align: left;
    }

  `)}
`

// Props.
interface Props extends SourceFeature {}

// Feature.
export const Feature: React.FC<Props> = ({header, subheader}) => {

  // ..
  return <Div>
    <H4><Tick/>&nbsp;{header}</H4>
    <P>{subheader}</P>
  </Div>

}