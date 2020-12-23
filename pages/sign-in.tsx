// Dependencies.
import styled from 'styled-components'
import { Page as PAGE } from '../components/Page'
import { NextPage } from 'next'
import { Section } from '../components/Section'
import { H2 } from '../components/H2'
import { AuthForm } from '../components/AuthForm'
import { useContext } from 'react'
import { UserContext } from '../context'
import { useRedirectIfAuthenticated } from '../utils/redirect'
import { Hyperlink } from '../components/Hyperlink'
import { P } from '../components/P'

// Page.
const Page = styled(PAGE)`
  text-align: center;

  .submitButton {
    margin-top: 20px;
  }
`

// Log In Page.
const LogInPage: NextPage = props => {

  // Current User.
  const {currentUser} = useContext(UserContext)
  useRedirectIfAuthenticated('/dashboard')

  // ..
  return <Page>

    <Section>

      {/* Header. */}
      <H2>Welcome</H2>


      {/* Form. */}
      <AuthForm/>

      {/* Recover CTA. */}
      <Hyperlink href="/password/recover" style={{display: 'inline-block', marginTop: '15px'}}>Can't log in?</Hyperlink>

      <br/>

      {/* Sign Up CTA. */}
      <Hyperlink href="/plans" style={{display: 'inline-block', marginTop: '10px'}}>Don't have an account?</Hyperlink>

    </Section>

  </Page>
  
}

// Export.
export default LogInPage