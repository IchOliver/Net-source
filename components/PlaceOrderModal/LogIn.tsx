// Dependencies.
import styled from 'styled-components'
import {H2} from '../H2'
import {P} from '../P'
import {useState, useContext} from 'react'
import {SignUpForm} from '../SignUpForm'
import {AuthForm} from '../AuthForm'
import {Hyperlink} from '../Hyperlink'
import {UserContext} from '../../context'

// Div.
const Div = styled.div`
  padding-bottom: 5px;
  .submitButton {
    margin-top: 20px;
  }
  .signUpCTA {
    cursor: pointer;
    display: inline-block;
    font-weight: 500;
    margin-top: 10px;
    &:hover {
      text-decoration: underline;
    }
  }
`

// Props.
interface Props {}

// Log In.
export const LogIn: React.FC<Props> = props => {

  const {currentUser} = useContext(UserContext)
  const [signUpRequested, setSignUpRequested] = useState(false)

  const header = signUpRequested ? 'Sign Up' : 'Sign In'
  const subheader = `${signUpRequested ? 'Sign up' : 'Sign in' } to order an nbn™ plan.`
  const form = signUpRequested ? <SignUpForm/> : <AuthForm/>
  const links = signUpRequested ?  <span className="signUpCTA" onClick={() => setSignUpRequested(false)}>
    Already have an account?
  </span> : <>

    {/* Recover CTA. */}
    <Hyperlink href="/password/recover" style={{display: 'inline-block', marginTop: '15px'}}>Can't sign in?</Hyperlink>

    <br/>

    {/* Sign Up CTA. */}
    <span 
      className="signUpCTA"
      onClick={() => setSignUpRequested(true)}
    >
      Don't have an account?
    </span>

  </>

  // ..
  return <Div>
    <H2 style={{marginBottom: '10px'}}>{header}</H2>
    <P style={{marginBottom: '20px'}}>{subheader}</P>
    {form}
    {links}
  </Div>

}