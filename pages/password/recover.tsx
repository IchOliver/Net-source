// Dependencies.
import styled from 'styled-components'
import { Page as PAGE } from '../../components/Page'
import { H2 } from '../../components/H2'
import { P } from '../../components/P'
import { useState } from 'react'
import { Section } from '../../components/Section'
import { CTA } from '../../components/CTA'
import { auth } from '../../utils/firebase'
import { ValidationWrapper } from '../../components/ValidationWrapper'
import { TextField } from '../../components/TextField'

// Page.
const Page = styled(PAGE)`
  text-align: center;

  .subheader {
    margin-bottom: 30px;
  }

  .submitCTA {
    margin-bottom: 10px;
    margin-top: 20px;
  }

  .textField {
    display: inline-block;
    margin: auto;
  }
`

// Recover Password Page.
const RecoverPasswordPage = () => {

  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      setLoading(true)
      await auth.sendPasswordResetEmail(email)
      setSent(true)
    } catch (error) {
      if (error.code === 'auth/user-not-found') setError('Account not found.')
      console.error(error)
    }
    setLoading(false)
  }

  // ..
  return <Page>

    <Section>

      {/* Header. */}
      <H2 className="header">Recover Account</H2>

      {/* Subheader. */}
      <P className="subheader">Enter your email address below and we'll send you a recovery link.</P>

      {<form onSubmit={onSubmit}>

        {/* Email Field. */}
        <div>
          <TextField
            name="Email"
            onChange={e => {
              if (error) setError('')
              if (sent) setSent(false)
              setEmail(e.target.value)
            }}
            value={email}
          />
        </div>
 
        {/* Submit CTA. */}
        <ValidationWrapper error={error}>
          <CTA className="submitCTA">
            {loading ? '..' : 'Send'}
          </CTA>
        </ValidationWrapper>

        {/*  */}
        {sent && <span>A recovery link has been sent to {email}</span>}

      </form>}

    </Section>

  </Page>
  
}

// Export.
export default RecoverPasswordPage