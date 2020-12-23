// Dependencies.
import styled, { css } from 'styled-components'
import { Section as SECTION } from '../../Section'
import { H1 } from '../../H1'
import { CTA } from '../../CTA'
import { useEffect } from 'react'
import { forScreensGreaterThanMobileWidth, language, colors, backgroundClipAvailable } from '../../../utils'
import { Hyperlink } from '../../Hyperlink'
import { CheckAvailabilityCTA } from './CheckAvailabilityCTA'
import { H3 } from '../../H3'
import { PlasmaCanvas } from '../../PlasmaCanvas'

// Background Section.
const BackgroundSection = styled(SECTION)`
  position: relative;
  pointer-events: none;
  z-index: -1;
  
  .featureImage {
    display: none;
    object-fit: cover;
    object-position: center;
    position: absolute;
    width: 100%;
  }

  /* Desktop. */
  ${forScreensGreaterThanMobileWidth(css`
    .featureImage {
      display: block;
      height: 500px;
      max-width: 100%;
      right: -100px;
      top: 0;
      width: 750px;
    }
  `)}
`

// Content Section.
const ContentSection = styled(SECTION)`
  align-items: center;
  padding-bottom: 120px;

  ${H1}.header {
    color: ${colors.vibrantBlue};
    font-weight: 700;
    margin: auto;
    margin-bottom: 10px;
    margin-top: 100px;
    max-width: 80%;
    text-align: center;
    width: 750px;
  }

  ${H3} {
    font-weight: 600;
    margin: auto;
    margin-bottom: 60px;
    margin-top: 40px;
    max-width: 80%;
    text-align: center;
  }

  .header em {
    background: none;
    color: ${colors.black};
  }

  .header em.backgroundClip {
    background-clip: text;
    background-image: url('/images/hangingOffCellTower.jpeg');
    background-color: transparent;
    background-position: top right;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
  }

  .CTAContainer {
    margin: auto;
    margin-top: 20px;
    text-align: center;
  }

  .addressCTA {
    text-align: center;
  }

  .contentSection {
    z-index: 1;
    position: relative;
  }

  /* Desktop. */
  ${forScreensGreaterThanMobileWidth(css`
    .header em.backgroundClip {
      background-color: ${colors.black};
      background-image: none;
    }
  `)}
`

// Props.
interface Props {}

// Hero.
export const Hero: React.FC<Props> = props => {

  // Apply Background Clip To Header Em.
  const applyBackgroundClipToHeaderEm = () => {
    if (!backgroundClipAvailable()) return
    const em = document.querySelector('.header em') as HTMLElement
    if (!em) return
    em.classList.add('backgroundClip')
  }

  // Did Mount.
  useEffect(() => {
    applyBackgroundClipToHeaderEm()
  }, [])
  
  // ..
  return <>

    {/* Feature Section. */}
    {/* <BackgroundSection className="featureSection"> */}

      {/* Image. */}
      {/* <img className="featureImage" src="/images/hangingOffCellTower.jpeg"/> */}
      {/* <PlasmaCanvas id="homePageCanvas"/> */}

    {/* </BackgroundSection> */}
  
    {/*  */}
    <ContentSection className="contentSection">

      {/* Header. */}
      <H1 className="header">
        Your Local Internet Service Provider
      </H1>

      <H3>
        Unlimited nbn™ Plans {' '}
        From $59.99 Per Month
      </H3>

      <H3>
        No Connection Fees, No Contract! 
      </H3>

      {/* CTA. */}
      <CheckAvailabilityCTA/>

    </ContentSection>
  
  </>
  
}