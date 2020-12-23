// Dependencies.
import styled, {css} from 'styled-components'
import {SourceFeature} from '../types'
import {Feature} from './Feature'
import {forScreensGreaterThanMobileWidth} from '../utils'

// Div.
const Div = styled.div`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  max-width: 100%;
  padding-top: 0;
  width: 900px;

  /* Desktop. */
  ${forScreensGreaterThanMobileWidth(css`
    padding-top: 60px;
  `)}
`

// Props.
interface Props {}

// Features.
export const Features: React.FC<Props> = props => {

  const features: SourceFeature[] = [

    // Simple Plans.
    {
      header: `Simple Plans`,
      subheader: `
        Our plans are deliberately straightforward. 
        We price them based on the customer service, support, and expert technical advice you can expect to receive.
      `
    },

    // First Class Customer Support.
    {
      header: `First Class Customer Support`,
      subheader: `
        Our locally based customer service operators 
        are enthusiastic and well versed in the particulars of the nbn™ network.
      `
      
    },

    // No Excess Data Charges.
    {
      header: `No Excess Data Charges`,
      subheader: `
        All of our plans come with unlimited data.
        Rest easy knowing you're free to browse, stream, and game without limits.
      `
    },

    // NBN Experts.
    {
      header: `We're Experts`, 
      subheader: `
        Our engineers have made instrumental contributions to the 
        deployment of nbn™ services throughout Queensland and are eager to share the skills they've accrued along the way.
      `
    },

    // No Lock-In Contracts
    // {
    //   header: `No Lock-in Contracts`,
    //   subheader: `
    //     Sign up with peace of mind.
    //   `
    // },

    // No Switching Costs.
    // {
    //   header: `Easy to Join`,
    //   subheader: `
    //     Joining Source is simple.
    //   `
    // },

  ]

  // ..
  return <Div>
    {features.map(feature => <Feature key={feature.header} {...feature}/>)}
  </Div>

}