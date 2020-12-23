// Dependencies.
import React, { useEffect } from "react";
import styled, { css } from 'styled-components'
import { Page as PAGE } from '../components/Page'
import { NextPage } from 'next'
import { Section } from '../components/Section'
import { H2 } from '../components/H2'
import { P } from '../components/P'
import {forScreensGreaterThanMobileWidth} from '../utils'
// import { H4 } from '../components/H4'
import { TeamMember } from '../components/TeamMember'

// Page.
const Page = styled(PAGE)`

  text-align: center;

  .ourMission {
    display: flex;
    flex-direction: column;
  }

  .copy {
    margin: auto;
    max-width: 100%;
    width: 800px;

    * {
      width: 100%;
    }
    p {
      text-align: justify;
    }
  }

  .groovyDoodle {
    flex-shrink: 0;
    margin-top: 40px;
    object-fit: contain;
    width: 400px;
  }

  .team {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 70px;
  }

  /* Desktop. */
  ${forScreensGreaterThanMobileWidth(css`

    .ourMission {
      flex-direction: row;
    }

    .groovyDoodle {
      flex-shrink: 0;
      margin-top: 0;
    }

    
  `)}
`

// Log In Page.
const AboutPage: NextPage<{setShow: any}> = props =>{
  const {setShow} = props;

  useEffect(() => {
    setShow(true);
  }, []);
  return(
      <Page>

        {/* Our Mission. */}
        <Section className="ourMission">

          {/* Copy. */}
          <div className="copy">

            <H2>Our Story</H2>

            <P>
              For a little over the last seven years, we have been heavily involved in the construction of the NBN network throughout Queensland.
              From Cairns in the north to Coolangatta in the south, we've seen just about everything the NBN can throw at an individual.
              <br/><br/>
              We have been through all of the mixed technologies that make up the NBN network.
              Starting with the Fibre to the premise design, FTTP, then to the Fibre to the node, FTTN, and finally the Fibre to the curb, FTTC, with HFC designs.
              <br/><br/>
              With our in-depth knowledge and experience with the NBN network,
              we intend to make it our mission help you get the best out of the mixed technologies that make up the NBN network.
              <br/><br/>
              Each of these designs has its advantages and disadvantages,
              and we will make it our duty to help you make the decision that will best suit your situation and your internet needs.
              <br/><br/>
              Whether your needs are for relaxations downloading movies in high definition, online gaming,
              or if you need to work from home nowadays. We will be able to help you with all of your internet service needs.
            </P>

          </div>

        </Section>

        {/* Our Team. */}
        <Section>

          <H2>Our Team</H2>

          <div className="team">

            {/* Matt. */}
            <TeamMember
                name="Matthew Humphries"
                image=""
                bio="
          Matt is a construction expert having dedicated the last 10 years of his live to major commercial
          telecommunications projects throughout Australia.
          He brings a wealth of practical experience, as well as the best technicians he has had the pleasure of
          working with throughout his time in the industry.
        "
            />

            <TeamMember
                name="Alex Byasse"
                bio="
        Alex is an engineering professional with a penchant for sales.
        He comes from a Academic and Consulting background in Coastal Engineering.
        Over the last 3 years he has been working as a Project Engineer on the residential and business NBN projects.
        He excels in understanding how the technology works and hows its put together.
        He provides the backbone of what makes our service smooth and efficient as well as helping our
        customers understand what the NBN network can do for them.
        "
                image="/images/alexByasse.jpg"
            />

            <TeamMember
                name="Arman Charan"
                bio="
          Arman is a Sales, Digital Marketing and IT specialist.
          He has built several platforms of medium to large complexity.
          His goals are to provide a practical and seamless customer experience on our
          website and to provide our team and customers with tools to make managing and
          monitoring our services hassle free.
        "
                image="/images/armanCharan.jpeg"
            />

          </div>

        </Section>

      </Page>
  )
};

// Export.
export default AboutPage