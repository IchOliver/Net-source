// Dependencies.
import styled, { keyframes } from 'styled-components'
import { Input } from './Input'
import { useState } from 'react'
import { colors } from '../utils'

// Fade From Bottom.
export const fadeFromBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`


// Div.
const Div = styled.div`
  box-sizing: border-box;
  height: 50px;
  margin: auto;
  margin-bottom: 20px;
  max-width: 100%;
  padding-top: 10px;
  position: relative;

  .title {
    animation: ${fadeFromBottom} 200ms;
    background: ${colors.white};
    display: inline-block;
    font-weight: 500;
    padding: 5px 10px;
    pointer-events: none;
    position: absolute;
    top: -7.5px;
    left: 5px;
  }

  ${Input} {
    &::placeholder {
      transition: opacity 150ms;
    }
  }

  &:focus-within {
    ${Input} {
      &::placeholder {
        opacity: 0;
      }
    }
  }

  /* Phone Input. */
  .PhoneInput {
    background: none;
    border: 1px solid rgba(0, 0, 0, .15);
    border-radius: 0;
    font-size: 14px;
    max-width: 100%;
    outline: none;
    padding: 10px;
    width: 400px;

    input {
      border: none;
      outline: none;
    }

    &:hover, &:focus {
      border: 1px solid rgba(0, 0, 0, 1);
    }
  }
  &.active .PhoneInput {
    border: 1px solid rgba(0, 0, 0, 1);
  }
`

// Props.
interface Props {
  focused?: boolean
  Input?: React.ReactElement
  name: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  value: string
}

// Text Field.
export const TextField: React.FC<Props> = props => {

  const {name, onChange, type, value} = props

  const [focused, setFocused] = useState(false)

  const inputProps = {
    onBlur: () => setFocused(false),
    onChange: onChange,
    onFocus: () => setFocused(true),
    placeholder: name,
    type: type,
    value: value
  }

  // ..
  return <Div className={`textField ${props.focused || focused || value && 'active' || ''}`}>
    
    {/* Name. */}
    {(props.focused || focused || value) && <label className="title">
      {name}
    </label>}

    {/* Input. */}
    {props.Input || <Input
      {...inputProps}
    />}

  </Div>

}