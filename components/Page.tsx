// Dependencies.
import styled, {keyframes} from 'styled-components'
import {dimensions, fadeIn} from '../utils'

// Page.
export const Page = styled.main`
  animation: ${fadeIn} 150ms ease-in;
  background: transparent;
  box-sizing: border-box;
  max-width: 100%;
  min-height: 100%;
  overflow: hidden;
  padding-bottom: 100px;
  padding-top: 50px;
`