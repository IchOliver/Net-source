// dependencies.
import styled from 'styled-components'

// Button.
export const Button = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  padding: 4px 6px;

  &:disabled {
    opacity: .75;
  }
`