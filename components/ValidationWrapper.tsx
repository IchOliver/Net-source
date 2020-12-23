// Dependencies.
import styled from 'styled-components'
import {P as Paragraph} from './P'
import {colors} from '../utils'

// Span.
const Div = styled.div`
  color: ${colors.red};
  display: block;
`

// Props.
interface Props {
  error: string
}

// Validation Wrapper.
export const ValidationWrapper: React.FC<Props> = props => {

  const {error} = props

  return <>

    {/* Children. */}
    {props.children}

    {/* Error Message. */}
    <Div style={{marginTop: error && '10px'}}>{error}</Div>

  </>

}