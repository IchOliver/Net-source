// Dependencies.
import {AddressDetail as ADDRESSDETAIL} from '../../../types'
import { language } from '../../../utils'
import { H4 } from '../../H4'
import { P } from '../../P'
import { Hyperlink } from '../../Hyperlink'
import { CTA } from '../../CTA'
import { Tick } from '../../Tick'
import { useAddressDetail } from '../../../utils/addressDetail'

// Props.
interface Props extends ADDRESSDETAIL {
  reset: () => void
}

// Address Detail.
export const AddressDetail: React.FC<Props> = props => {

  // Props.
  const {reset, ...addressDetail} = props

  // Address Detail.
  const {formattedAddress, serviceAvailable, techType} = useAddressDetail(addressDetail)

  // ..
  return <>
  
    {/* Service Available. */}
    {serviceAvailable ? <>

      <H4 style={{alignItems: 'center', display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
        <Tick/>&nbsp;NBN Available
      </H4>

      <P style={{margin: 'auto', maxWidth: '100%', width: '450px'}}>
        Our records indicate that {language.nbn} is available at {formattedAddress}  using {techType}.
      </P>

    </> : <>

      <H4>NBN Unavailable</H4>
      
      <P style={{margin: 'auto', maxWidth: '100%', width: '450px'}}>
        Unfortunately, according to our records, {language.nbn} is not available at {formattedAddress}.
        <br/>
        Please don't hesitate to <Hyperlink href="/support">get in touch with our support staff</Hyperlink> if you believe there has been an error.
      </P>

    </>}

    {/* Change Selected Address. */}
    <div style={{marginTop: '10px'}}>
      <P>
        <a className="changeAddressButton" onClick={reset}>Change Address</a>
      </P>
    </div>

  </>

}