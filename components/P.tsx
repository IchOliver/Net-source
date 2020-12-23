// Dependencies.
import styled from 'styled-components'
import {colors} from '../utils'

// P.
export const P = styled.p`
  font-family: acumin-pro;
  font-size: 14px;
  margin: 0;
  margin-bottom: 10px;
  line-height: 160%;

  a {
    color: ${colors.blue};
    font-size: inherit;
    font-weight: inherit;
    font-style: inherit;
    text-decoration: underline;
  }
`