// Dependencies.
import styled, { css } from 'styled-components'
import { AddressDetail as ADDRESSDETAIL } from '../../../types'
import { language, colors, forMobileScreens } from '../../../utils'
import { H4 } from '../../H4'
import { P } from '../../P'
import { Hyperlink } from '../../Hyperlink'
import { CTA } from '../../CTA'
import { Tick } from '../../Tick'
import { useAddressDetail } from '../../../utils/addressDetail'

// Div.
const Div = styled.div`
  background: ${colors.white};
  padding: 20px;
  text-align: center;

  ${H4} {
    font-size: 30px;
  }

  /* Desktop. */
  ${forMobileScreens(css`
    ${H4} {
      flex-direction: column;
    }
    ${Tick} {
      margin-bottom: 10px;
    }
  `)}
`

// Props.
interface Props extends ADDRESSDETAIL {
  reset: () => void
}

// Address Detail.
export const AvailabilityCTA: React.FC<Props> = props => {

  // Props.
  const {reset, ...addressDetail} = props

  // Address Detail.
  const {formattedAddress, serviceAvailable, techType} = useAddressDetail(addressDetail)

  // ..
  return <>
  
    {/* Service Available. */}
    {serviceAvailable ? <Div>

      <H4 className="NBNAvailable" style={{alignItems: 'center', display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
        <Tick/>&nbsp;NBN Available
      </H4>

      <P style={{margin: 'auto', maxWidth: '100%', textAlign: 'center', width: '450px'}}>
        Our records indicate that {language.nbn} is available at {formattedAddress}  using {techType}.
      </P>

      <Hyperlink href={`/plans/build?address=${formattedAddress}&LOC=${addressDetail.id}`}>
        <CTA style={{fontSize: '14px', marginTop: '15px', maxWidth: '100%'}}>Get An Unlimited {language.nbn} Plan</CTA>
      </Hyperlink>

    </Div> : <Div>

      <H4>NBN Unavailable</H4>
      
      <P style={{margin: 'auto', maxWidth: '100%', width: '450px'}}>
        Unfortunately, according to our records, {language.nbn} is not available at {formattedAddress}.
        <br/>
        Please don't hesitate to <Hyperlink href="/support">get in touch with our support staff</Hyperlink> if you believe there has been an error.
      </P>

    </Div>}

    {/* Change Selected Address. */}
    <div style={{margin: 'auto', marginBottom: '40px', marginTop: '15px', textAlign: 'center'}}>
      <P style={{fontSize: '14px'}}>
        <a className="changeAddressButton" onClick={reset}>Change Address</a>
      </P>
    </div>

  </>

}