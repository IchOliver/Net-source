// Dependencies.
import styled from 'styled-components'
import {AddressDetail} from '../../types'
import {H2} from '../H2'
import {AddressInput} from '../AddressInput'
import { CTA } from '../CTA'

// Div.
const Div = styled.div``

// Props.
interface Props {
  onChange: (location: AddressDetail) => void
}

// Location.
export const Location: React.FC<Props> = props => {

  // ..
  return <Div>

    {/* Header. */}
    <H2>Check Availability</H2>

    {/* Address Input. */}
    <AddressInput onConfirm={props.onChange}/>

  </Div>

}