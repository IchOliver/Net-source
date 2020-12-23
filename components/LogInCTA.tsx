// Dependencies.
import styled from 'styled-components'
import { FormField } from './FormField'
import { ValidationWrapper } from './ValidationWrapper'
import { Input } from './Input'
import { CTA } from './CTA'
import { useState } from 'react'
import { auth } from '../utils/firebase'
import { FirebaseError } from 'firebase-admin'
import { TextField } from './TextField'

// Form.
const Form = styled.form`
  .textField {
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
  }

  .submitButton {
    margin-top: 10px;
  }
`

// Email Auth CTA.
export const LogInForm: React.FC = props => {

  // State.
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [password, setPassword] = useState('')

  // Handle Error.
  const handleError: (error: FirebaseError) => void = error => {
    switch (error.code) {
      case 'auth/user-not-found':
        setError(`Account not found.`)
        break
      case 'auth/wrongpassword':
        setError('Invalid username or password.')
        break
      case 'auth/network-request-failed':
        break
      default:
        setError('An error occurred.')
        break
    }
  }

  // On Submit.
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (loading) return
    try {
      setLoading(true)
      if (!email) throw new Error('!Email')
      await auth.signInWithEmailAndPassword(email, password)
    } catch (error) {
      handleError(error)
    }
    setLoading(false)
  }

  // ..
  return <Form onSubmit={onSubmit}>
    
    {/* Email Field. */}
    <TextField
      name="Email"
      onChange={e => {
        if (error) setError('')
        setEmail(e.target.value)
      }} 
      value={email}
    />

    <br/>

    {/* Password Field. */}
    <TextField
      name="Password"
      onChange={e => {
        if (error) setError('')
        setPassword(e.target.value)
      }}
      value={password}
      type="password"
    />

    <br/>

    {/* Submit CTA. */}
    <ValidationWrapper error={error}>
      <CTA className="submitButton">
        {loading ? 'Signing in ..' : 'Sign In'}
      </CTA>
    </ValidationWrapper>

  </Form>
}