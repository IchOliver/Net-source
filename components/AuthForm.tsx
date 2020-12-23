// Dependencies.
import styled from 'styled-components'
import {GoogleAuthCTA} from './GoogleAuthCTA'
import {FormField} from './FormField'
import {Input} from './Input'
import {CTA} from './CTA'
import {auth} from '../utils/firebase'
import {useState} from 'react'
import {ValidationWrapper} from './ValidationWrapper'
import {LogInForm} from './LogInCTA'

// Form.
const Div = styled.div`
  .googleAuthCTA {
    margin-bottom: 20px;
  }
`

// Props.
interface Props {}

// Auth Form.
export const AuthForm: React.FC<Props> = props => {

  // ..
  return <Div className="logInForm">

    {/* Email. */}
    <LogInForm/>

  </Div>

}