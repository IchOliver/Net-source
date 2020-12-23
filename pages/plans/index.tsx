// Dependencies.
import React, { useEffect } from "react";
import styled from 'styled-components'
import { Page as PAGE } from '../../components/Page'
import { Section } from '../../components/Section'
import { H2 } from '../../components/H2'
import { P } from '../../components/P'
import { NextPage } from 'next'
import { Plan } from '../../components/Plan'
import { NBNPlan } from '../../types'
import axios from 'axios'
import { language } from '../../utils'

// Page.
const Page = styled(PAGE)`

  text-align: center;

  .header {
    margin-bottom: 20px;
  }

  ${Section} > .subheader {
    margin-bottom: 100px;
  }

  .plansContainer {
    align-items: flex-start;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    position: relative;
  }

  .disclaimer {
    font-size: 12px;
    margin-top: 30px;
  }
`

// Plans Page.
const PlansPage: NextPage<{setShow: any, plans: NBNPlan[]}> = props => {

  // Props.

  const {plans, setShow} = props;

  useEffect(() => {
    setShow(true);
  }, []);

  // ..
  return <Page>

    {/* <PlasmaCanvas id="plansPlasmaCanvas"/> */}

    {/* Availability. */}
    {/* <Section>
      <H2 className="header">Availability</H2>
      <P className="subheader">Enter your address to see whether you're eligible for NBN</P>
    </Section> */}

    {/* Plans. */}
    <Section>

      {/* Header. */}
      <H2 className="header">Plans</H2>
      
      {/* Subheader. */}
      <P className="subheader">Browse our range of unlimited {language.nbn} plans below.</P>
      
    </Section>

    <Section>
      
      {/* Plans. */}
      <div className="plansContainer">
        {plans.map((plan, index) => <Plan key={plan.id} {...plan}/>)}
      </div>

      {/* Disclaimer. */}
      <P className="disclaimer">
        *Typical estimated download speed between 7pm to 11pm. Actual speeds may vary based on factors including NBN technology used for connection and the state of cabling in the house. 
        <br/>
        For locations using legacy Telstra Network — speeds be impacted by shared infrastructure with the ADSL Network.
      </P>

    </Section>

  </Page>

}

// Get Initial Props.
PlansPage.getInitialProps = async context => {
  const request = context.req
  const host = typeof window !== 'undefined' ? window.location.host || '' : request.headers.host
  const protocol = host.includes('localhost') ? 'http' : 'https'
  const plans = (await axios.get<NBNPlan[]>(`${protocol}://${host}/api/plans`)).data.filter(plan => plan.metadata.isNBNPlan)
  return {
    plans,
    setShow: null
  }
}

// Export.
export default PlansPage