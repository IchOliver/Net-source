// Dependencies.
import styled from 'styled-components'
import {FormField} from './FormField'
import {ValidationWrapper} from './ValidationWrapper'
import {Input} from './Input'
import {CTA} from './CTA'
import {useState, useContext} from 'react'
import {auth} from '../utils/firebase'
import {Hyperlink} from './Hyperlink'
import { FirebaseError } from 'firebase'
import { UserContext } from '../context'
import { TextField } from './TextField'
import PhoneInput, {isPossiblePhoneNumber} from 'react-phone-number-input'

// Form.
const Form = styled.form`
  .submitButton {
    margin-top: 10px;
  }
`

// Sign Up Form.
export const SignUpForm: React.FC = props => {

  // User Context.
  const {createUserWithParams} = useContext(UserContext)

  // State.
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [loading, setLoading] = useState(false)
  const [mobileNumber, setMobileNumber] = useState('')
  const [mobileNumberFieldFocused, setMobileNumberFieldFocused] = useState(false)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  // Handle Error.
  const handleError = (error: string) => {

    switch (error) {

      // Field Errors.
      case '!firstName':
        setError('Missing Field — First Name.')
        break
      case '!lastName':
        setError('Missing Field — Last Name.')
        break
      case '!mobileNumber':
        setError('Missing Field — Mobile Number.')
        break
      case 'Impossible Mobile Number':
        setError('Error — Impossible Mobile Number.')
        break
      case '!email':
        setError('Missing Field — Email.')
        break
      case '!password':
        setError('Missing Field — Password.')
        break

      // Firebase Errors.
      case 'auth/email-already-exists':
      case 'auth/email-already-in-use':
        setError('An account with this email address already exists.')
        break
      case 'auth/network-request-failed':
        break
      case 'auth/wrongpassword':
        setError('Invalid username or password.')
        break

      // Default.
      default:
        setError('An error occurred.')
        break

    }

  }

  // On Change.
  const onChange = (setField: React.Dispatch<React.SetStateAction<string>>) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      if (error) setError('')
      setField(event.target.value)
    }
  }

  // On Submit.
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

    try {

      // Prevent default.
      event.preventDefault()

      // Abort if loading.
      if (loading) return

      // Flag loading state.
      setLoading(true)

      // Validate Fields.
      if (!firstName) throw {code: '!firstName'}
      if (!lastName) throw {code: '!lastName'}
      if (!mobileNumber) throw {code: '!mobileNumber'}
      if (!isPossiblePhoneNumber(mobileNumber)) throw {code: 'Impossible Mobile Number'}
      if (!email) throw {code: '!email'}
      if (!password) throw {code: '!password'}

      // Create user with email and password.
      await createUserWithParams({firstName, lastName, mobileNumber, email, password})

    } catch (error) {

      // Handle error.
      handleError(error.response && error.response.data || error.code)

    }

    // Unflag loading.
    setLoading(false)

  }

  // ..
  return <Form onSubmit={onSubmit}>

    {/* First Name. */}
    <TextField
      name="First Name"
      onChange={onChange(setFirstName)}
      value={firstName}
    />

    <br/>

    {/* Last Name. */}
    <TextField
      name="Last Name"
      onChange={onChange(setLastName)}
      value={lastName}
    />

    <br/>

    {/* Mobile Number. */}
    <TextField
      focused={mobileNumberFieldFocused}
      Input={<PhoneInput
        defaultCountry="AU"
        placeholder={mobileNumberFieldFocused ? '' : 'Mobile Number'}
        onBlur={() => setMobileNumberFieldFocused(false)}
        onChange={setMobileNumber}
        onFocus={() => setMobileNumberFieldFocused(true)}
        value={mobileNumber}
      />}
      name="Mobile Number"
      onChange={onChange(setMobileNumber)}
      value={mobileNumber}
    />

    <br/>
    
    {/* Email. */}
    <TextField
      name="Email"
      onChange={onChange(setEmail)} 
      value={email}
    />

    <br/>

    {/* Password. */}
    <TextField
      name="Password"
      onChange={onChange(setPassword)}
      type="password"
      value={password}
    />

    <br/>

    {/* Submit CTA. */}
    <ValidationWrapper error={error}>
      <CTA className="submitButton">
        {loading ? '..' : 'Sign Up'}
      </CTA>
    </ValidationWrapper>

  </Form>
}