// Dependencies.
import styled, {css} from 'styled-components'
import {H2} from './H2'
import {H3} from './H3'
import {H5} from './H5'
import {P} from './P'
import {NBNPlan, TeamMember as TEAMMEMBER} from '../types'
import {forScreensGreaterThanMobileWidth, colors} from '../utils'
import {CTA} from './CTA'
import {Hyperlink} from './Hyperlink'

// Div.
const Div = styled.div`
  background: #FFF;
  /* border: 1px solid ${colors.black}; */
  padding: 20px;
  position: relative;
  text-align: center;
  flex-grow: 0;
  flex-shrink: 0;
  margin-bottom: 120px;
  width: 100%;

  .image {
    background: rgba(0,0,0,.15);
    border: none;
    border-radius: 0;
    height: 150px;
    margin: auto;
    margin-bottom: 30px;
    margin-top: -90px;
    max-width: 100%;
    object-fit: cover;
    object-position: center;
    text-align: center;
    width: 200px;
    height: 200px;
    line-height: .5;

    em {
      display: inline-block;
      font-size: 20px;
      &::after {
        display: none;
      }
    }
  }

  .header {
    margin-bottom: 20px;
  }

  .subheader {
    margin-bottom: 20px;
    text-align: justify;
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
    width: calc((100% / 3) - 40px);
  `)}
`

// Props.
interface Props extends TEAMMEMBER {}

// Team Member.
export const TeamMember: React.FC<Props> = props => {

  // Props.
  const {bio, image, name} = props

  // ..
  return <Div>

    {/* Image. */}
    <img className="image" src={image || undefined}/>

    {/* Name. */}
    <H3 className="header">{name}</H3>

    {/* Description. */}
    <P className="subheader">{bio}</P>

  </Div>

}