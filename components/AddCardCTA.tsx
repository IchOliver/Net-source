// Dependencies.
import styled from 'styled-components'
import {CTA} from './CTA'
import {useState} from 'react'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'

const stripe = loadStripe(process.env.STRIPE_PUBLIC)

// Props.
interface Props {}

// Add Card CTA.
export const AddCardCTA: React.FC<Props> = props => {

  const [renderInput, setRenderInput] = useState(false)

  if (renderInput) return <Elements stripe={stripe}/>

  // ..
  return <CTA onClick={() => setRenderInput(true)}>Add direct debit</CTA>

}