// Dependencies.
import styled from 'styled-components'
import { H3 } from '../H3'
import { P } from '../P'
import { useState, useContext } from 'react'
import { SignUpForm } from '../SignUpForm'
import { AuthForm } from '../AuthForm'
import { Hyperlink } from '../Hyperlink'
import { UserContext } from '../../context'
import { Section as SECTION } from '../Section'
import { CTA } from '../CTA'

// Section.
const Section = styled(SECTION)`
  padding-top: 10vmin;

  .plansContainer {
    align-items: flex-start;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 50px;
    position: relative;
  }

  .link {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`

// Props.
interface Props {}

// Log In.
export const Account: React.FC<Props> = props => {

  // User.
  const {currentUser, signOut} = useContext(UserContext)

  // State.
  const [signInRequested, setSignInRequested] = useState(false)

  // Content.
  const header = '5. Tell us about yourself'
  const subheader = `${signInRequested ? 'Log in' : 'Create an account' } to complete your order.`
  const form = signInRequested ? <AuthForm/> : <SignUpForm/>
  const links = signInRequested ? <>

    {/* Recover CTA. */}
    <Hyperlink href="/password/recover" style={{display: 'inline-block', fontWeight: 400, marginTop: '15px'}}>Can't sign in?</Hyperlink>

    {/* Sign Up CTA. */}
    <div>
      <span 
        className="link signUpCTA"
        onClick={() => setSignInRequested(false)}
        style={{display: 'inline-block', fontWeight: 400, marginTop: '10px'}}
      >
        Don't have an account?
      </span>
    </div>

  </> : <div style={{marginTop: '15px'}}>
    <span className="link signUpCTA" onClick={() => setSignInRequested(true)} style={{fontWeight: 400}}>
      Already have an account?
    </span>
  </div>

  // Authenticated.
  if (currentUser) return <Section>
    <H3 style={{marginBottom: '10px'}}>{header}</H3>
    <P style={{marginTop: '20px', marginBottom: '10px'}}>Signed in as {currentUser.email}.</P>
    <CTA onClick={signOut}>Switch Accounts</CTA>
  </Section>

  // Unauthenticated.
  return <Section>
    <H3 style={{marginBottom: '10px'}}>{header}</H3>
    {currentUser === null && <>
      <P style={{marginBottom: '30px'}}>{subheader}</P>
      {form}
      {links}
    </>}
  </Section>

}