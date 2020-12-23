// Dependencies.
import styled from 'styled-components'
import {Page as PAGE} from '../components/Page'
import {NextPage} from 'next'
import {Section} from '../components/Section'
import {H2} from '../components/H2'
import {AuthForm} from '../components/AuthForm'
import {useContext} from 'react'
import {UserContext} from '../context'
import {useRedirectIfAuthenticated} from '../utils/redirect'
import {SignUpForm} from '../components/SignUpForm'
import {Hyperlink} from '../components/Hyperlink'

// Page.
const Page = styled(PAGE)`
  .submitButton {
    margin-top: 20px;
  }
`

// Sign up Page.
const LogInPage: NextPage = props => {

  // Current User.
  const {currentUser} = useContext(UserContext)
  useRedirectIfAuthenticated('/dashboard')

  // ..
  return <Page>

    <Section>

      {/* Header. */}
      <H2>Sign up</H2>

      {/* Form. */}
      <SignUpForm/>

      {/* Sign In CTA. */}
      <Hyperlink href="/login" style={{display: 'inline-block', marginTop: '15px'}}>Already have an account?</Hyperlink>

    </Section>

  </Page>
  
}

// Export.
export default LogInPage