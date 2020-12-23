// Dependencies.
import styled from 'styled-components'

// Input.
export const Input = styled.input`
  background: none;
  border: 1px solid rgba(0, 0, 0, ${props => props.value && 1 || .15});
  border-radius: 0;
  display: block;
  font-size: 14px;
  max-width: 100%;
  outline: none;
  padding: 10px;
  width: 400px;

  &:hover, &:focus {
    border: 1px solid rgba(0, 0, 0, 1);
  }
`