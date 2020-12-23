// Dependencies.
import styled from 'styled-components'
import {Button} from './Button'

// CTA.
export const CTA = styled(Button).attrs<{className?: string}>(props => ({...props, className: props.className || '' + 'CTA'}))`
  background: #000;
  color: #FFF;
  border: 1px solid #333;
  border-radius: 0;
  font-weight: 500;
  outline: none;
  padding: 12px 20px;
  transition: all 50ms ease-out;
  white-space: nowrap;

  &:hover {
    background: #FFF;
    color: #000;
  }

  &.invert {
    background: #FFF;
    color: #000;
  }

  &.invert:hover {
    background: #000;
    color: #FFF;
  }
`