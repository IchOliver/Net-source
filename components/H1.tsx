// Dependencies.
import styled from 'styled-components'
import { colors } from '../utils'

// H1.
export const H1 = styled.h1`
  font-size: 60px;
  font-weight: 800;
  line-height: 1.15;
  margin: 0;

  em {
    font-size: inherit;
    font-style: inherit;
    position: relative;
    z-index: 1;

    &:after {
      background: ${colors.green};
      content: '';
      left: -2.5%;
      height: 20%;
      opacity: .75;
      position: absolute;
      top: 75%;
      width: 105%;
      z-index: -1;
    }
  }
`