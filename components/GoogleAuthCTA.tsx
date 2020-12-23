// Dependencies.
import styled from 'styled-components'
import {CTA} from './CTA'
import {firebase, auth} from '../utils/firebase'


// Props.
interface Props {}

// Google Auth CTA.
export const GoogleAuthCTA: React.FC<Props> = props => {

  // On Click.
  const onClick = () => {
    // const provider = new firebase.auth.GoogleAuthProvider()
    // auth.signInWithRedirect(provider)
  }

  // ..
  return <CTA className="googleAuthCTA" onClick={onClick}>
    
    Continue With Google

  </CTA>

}