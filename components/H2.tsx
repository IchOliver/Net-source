// Dependencies.
import styled from 'styled-components'

// H2.
export const H2 = styled.h2`
  margin: 0;
  margin-bottom: 20px;
  font-size: 40px;

  em {
    font-size: inherit;
    font-style: inherit;
    position: relative;
    z-index: 1;

    &:after {
      background: #98f9c5;
      content: '';
      left: -2.5%;
      height: 20%;
      opacity: .5;
      position: absolute;
      top: 75%;
      width: 105%;
      z-index: -1;
    }
  }
`