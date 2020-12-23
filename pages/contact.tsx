// Dependencies.
import React, { useEffect } from "react";
import styled, {createGlobalStyle} from 'styled-components'
import { Page } from '../components/Page'
import { H2 } from '../components/H2'
import { P } from '../components/P'
import { Section as SECTION } from '../components/Section'
// import { H4 } from '../components/H4'
import { colors } from '../utils'
import { FeatureSection } from '../components/FeatureSection'
import { H3 } from '../components/H3'
import { NextPage } from 'next'

// Section.
const Section = styled(SECTION)`
  text-align: center;

  * {
    color: ${colors.white};
  }

  p a {
    color: ${colors.white};
  }
`

// Global Style.
const GlobalStyle = createGlobalStyle`
  
  html {
    background: ${colors.vibrantBlue}; /* Vibrant Blue */
  }

  .navigationBar {
    background: ${colors.white};
    /* border-bottom: none; */
  }
`

// Contact Page.
const ContactPage: NextPage<{setShow: any}> = props =>{
  const {setShow} = props;

  useEffect(() => {
    setShow(true);
  }, []);
  // Open Intercom Window.
  const openIntercomWindow = () => {
    const WINDOW = typeof window !== 'undefined' && window as any
    if (!WINDOW) return
    WINDOW.Intercom('show')
  }

  // ..
  return <Page>

    <GlobalStyle/>

    <Section>

      <H2>Contact Us</H2>

      {/* Chat With A Technician. */}
      <FeatureSection
        header={<H3>
          Chat With A Technician
        </H3>}
        image="/images/groovyDoodleWhite.svg"
        subheader={<P>
          <a className="hyperlink" onClick={openIntercomWindow}>Click here</a> to chat with a technician.
        </P>}
      />
        
      {/* Organise A Callback. */}
      <FeatureSection
        flip
        header={<H3>
          Organise A Callback
        </H3>}
        image="/images/sprintingDoodleWhite.svg"
        subheader={<P>
          Leave your name and mobile in the chat window <a className="hyperlink" onClick={openIntercomWindow}>found here</a>, and we'll get back to you as soon as possible.
        </P>}
      />

      {/* Call Us Directly. */}
      <FeatureSection
        header={<H3>
          Call Us Directly
        </H3>}
        image="/images/rollingDoodleWhite.svg"
        subheader={<P>
          You can reach our support line on weekdays between 9am and 7pm AEST via <a className="hyperlink" href="tel:1300503984">1300 503 984</a>.
        </P>}
      />

      {/* Call Us Directly. */}
      <FeatureSection
        flip
        header={<H3>
          Email Our Team
        </H3>}
        image="/images/groovySittingDoodleWhite.svg"
        subheader={<P>
          Our team can be reached via email at <a href="mailto:team@sourceinternet.com.au">team@sourceinternet.com.au</a>
        </P>}
      />

    </Section>
    
  </Page>

}

// Export.
export default ContactPage