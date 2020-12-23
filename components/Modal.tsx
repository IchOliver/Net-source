// Dependencies.
import MODAL from 'react-modal'
import styled from 'styled-components'
import { H2 } from './H2'
import { P } from './P'

// Div.
const Div = styled.div`
  padding-bottom: 10px;

  & > ${H2} {
    margin-bottom: 10px;
  }

  & > ${P} {
    margin-bottom: 30px;
    padding-right: 20px;
  }

  .formField {
    margin-bottom: 20px;
  }
`

// Props.
interface Props extends ReactModal.Props {

}

export const Modal: React.FC<Props> = props => {

  // ..
  return <MODAL
    appElement={typeof document !== 'undefined' && document.getElementById('__next') || ''}
    style={{
      content: {
        borderRadius: 0, bottom: 'auto', boxShadow: '10px 10px 10px rgba(0, 0, 0, .05)', height: 'auto', 
        left: 0, right: 0, margin: 'auto', marginBottom: '20vmin', maxWidth: '90%', overflow: 'visible', padding: '15px 20px', width: '600px'
      }, 
      overlay: {overflow: 'scroll', zIndex: 100}
    }}
    {...props}
  >
    <Div>
      {props.children}
    </Div>
  </MODAL>
  
}