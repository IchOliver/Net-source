// // Dependencies.
// import styled, { createGlobalStyle, css } from 'styled-components'
// import { Page as PAGE } from '../components/Page'
// import { Section } from '../components/Section'
// import { forScreensGreaterThanMobileWidth, dimensions, colors, language } from '../utils'
// import { H3 } from '../components/H3'
// import { CTA } from '../components/CTA'
// import { Hyperlink } from '../components/Hyperlink'
// import { usePageOffset } from '../hooks/pageOffset'
// import { Features } from '../components/Features'
// import { NextPage } from 'next'
// import { Hero } from '../components/Home/Hero'
// import { FeatureSection } from '../components/FeatureSection'
// import { H2 } from '../components/H2'
// import { ReasonsToJoin } from '../components/ReasonsToJoin'
//
// // Page.
// const Page = styled(PAGE)`
//   padding-top: 0;
//   position: relative;
//
//   .header {
//     margin-bottom: 40px;
//     text-align: center;
//   }
//
//   .subheader {
//     margin-bottom: 50px;
//     text-align: center;
//
//     br {
//       display: block;
//     }
//   }
//
//   .plansCTAContainer {
//     margin-bottom: 60px;
//     text-align: center;
//   }
//
//   .plansCTA {
//     padding: 12px 20px;
//   }
//
//   .rubberPlant {
//     display: block;
//     margin: auto;
//     max-width: 100%;
//     pointer-events: none;
//     width: 400px;
//   }
//
//   .topRightWavyColours {
//     max-width: 60%;
//     position: absolute;
//     right: 0;
//     top: 0;
//     transform: rotate(-90deg);
//     z-index: -1;
//   }
//
//   .bottomLeftWavyColours {
//     max-width: 60vw;
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     transform: rotate(90deg);
//     z-index: -1;
//   }
//
//   /* Desktop. */
//   ${forScreensGreaterThanMobileWidth(css`
//
//     .header {
//       text-align: left;
//     }
//
//     .subheader {
//       text-align: left;
//
//       br {
//         display: none;
//       }
//     }
//
//     .plansCTAContainer {
//       text-align: left;
//     }
//
//   `)}
// `
//
// // Index Page.
// const IndexPage: NextPage = () => {
//
//   // Page Offset.
//   const {scrollY} = usePageOffset()
//
//   // ..
//   return <Page>
//
//     {/* <GlobalStyle/> */}
//
//     <img className="topRightWavyColours" src="/images/wavyColours.gif"/>
//     <img className="bottomLeftWavyColours" src="/images/wavyColours.gif"/>
//
//     {/* Hero. */}
//     <Hero/>
//
//     {/* Features. */}
//     <Section>
//       <Features/>
//     </Section>
//
//     {/* Reasons To Join. */}
//     <ReasonsToJoin/>
//
//     {/* Thanks For Supporting Your Local ISP. */}
//
//   </Page>
//
// }
//
// // Export.
// export default IndexPage



import React, { useEffect } from "react";
import { Landingpage } from "../components/LandingPage";
import { NBNPlan } from '../types';
import axios from 'axios';
import { NextPage } from 'next';

const Landing: NextPage<{setShow: any, plans: NBNPlan[]}> = props => {
  let { setShow, plans } = props;
  useEffect(() => {
    setShow(false);
  });

  return (
      <Landingpage plans={plans} />
  )
};

Landing.getInitialProps = async context => {
  const request = context.req;
  const host = typeof window !== 'undefined' ? window.location.host || '' : request.headers.host;
  const protocol = host.includes('localhost') ? 'http' : 'https';
  const plans = (await axios.get<NBNPlan[]>(`${protocol}://${host}/api/plans`)).data.filter(plan => plan.metadata.isNBNPlan);
  return {
    plans,
    setShow: null
  }
};

export default Landing;