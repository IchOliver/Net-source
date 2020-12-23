// Dependencies.
import styled from 'styled-components'
import {CTA} from './CTA'
import {auth} from '../utils/firebase'
import { useContext } from 'react'
import { UserContext } from '../context'

// Props.
interface Props {}

// Sign Out Button.
export const SignOutButton: React.FC<Props> = props => {

  const {signOut} = useContext(UserContext)
 
  // ..
  return <CTA className="signOutButton" onClick={signOut}>Sign Out</CTA>

}