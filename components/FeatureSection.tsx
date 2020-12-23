// Dependencies.
import styled, { css } from 'styled-components'
import { H3 } from './H3'
import { P } from './P'
import { Section as SECTION } from './Section'
import { forScreensGreaterThanMobileWidth, colors } from '../utils'

// Section.
const Section = styled(SECTION)`

  padding-top: 10vmin;
  text-align: center;

  ${H3} em {
    position: relative;
    &:after {
      background: ${colors.green};
      content: '';
      left: -2.5%;
      height: 7.5px;
      opacity: .75;
      position: absolute;
      bottom: 0;
      width: 105%;
      z-index: -1;
    }
  }

  img {
    max-width: 60%;
    width: 400px;
  }

  .content {
    margin: auto;
    margin-top: 20px;
    max-width: 80%;
  }

  /* Desktop. */
  ${forScreensGreaterThanMobileWidth(css`
    display: flex;
    text-align: left;

    .content {
      margin: 0;
      padding: 0 5%;
    }
    
    .content {
      box-sizing: border-box;
      width: 50%;
    }

    img {
      max-width: 50%;
      width: 400px;
    }

  `)}
`

// Props.
interface Props {
  header: React.ReactElement
  flip?: boolean
  image?: string
  subheader: React.ReactElement
}

// Feature Section.
export const FeatureSection: React.FC<Props> = ({header, flip, image, subheader}) => {

  const flexDirection = !flip ? 'row' : 'row-reverse'

  // ..
  return <Section style={{alignItems: 'center', flexDirection, justifyContent: 'center', }}>

    {image && <img src={image}/>}

    <div className={`content ${flip ? 'flip' : ''}`}>

      {/* Header. */}
      {header}

      {/* Subheader. */}
      {subheader}

    </div>

  </Section>

}