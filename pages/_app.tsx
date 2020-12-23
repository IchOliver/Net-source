// Depdencies.
import React, { useState } from "react";
import { AppProps } from 'next/app'
import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'
import { GlobalStyle } from '../components/GlobalStyle'
import { NavigationBar } from '../components/NavigationBar'
import { Footer } from '../components/Footer'
import { Provider } from '../context'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { useGoogleAnalytics } from '../utils/google'
import { useIntercom } from '../utils/intercom'
import { useFullstory } from '../utils/fullstory'
const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE)
import { useSentry } from '../utils/sentry'
import { language } from '../utils'
import "pure-react-carousel/dist/react-carousel.es.css";
// Styles.
import 'react-phone-number-input/style.css'
import "tailwindcss/tailwind.css"

import { MobileNavigationMenu } from '../components/NavigationBar/MobileNavigationMenu'

// Router Events.
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

// Props.
interface Props extends AppProps {}

// Application.
const Application: React.FC<Props> = props => {
  
  // Props.
  const {Component, pageProps} = props;
  const [show, setShow] = useState(true);
  // Google Analytics.
  useGoogleAnalytics()
  // Intercom.
  useIntercom()

  // Fullstory.
  useFullstory()

  // Sentry.
  useSentry()

  // ..
  return <>

    {/* Head. */}
    <Head>

      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>

      {/* Open Graph. */}
      <title>Source Internet</title>
      <meta property="og:title" content="Source Internet"/>
      <meta property="og:description" content={`Unlimited ${language.nbn} plans from $59.99 per month.`}/>
      <meta property="og:image" content="/SEO/OGImage.jpg"/>

      {/* SEO. */}
      <link rel="apple-touch-icon" sizes="57x57" href="/SEO/apple-icon-57x57.png"/>
      <link rel="apple-touch-icon" sizes="60x60" href="/SEO/apple-icon-60x60.png"/>
      <link rel="apple-touch-icon" sizes="72x72" href="/SEO/apple-icon-72x72.png"/>
      <link rel="apple-touch-icon" sizes="76x76" href="/SEO/apple-icon-76x76.png"/>
      <link rel="apple-touch-icon" sizes="114x114" href="/SEO/apple-icon-114x114.png"/>
      <link rel="apple-touch-icon" sizes="120x120" href="/SEO/apple-icon-120x120.png"/>
      <link rel="apple-touch-icon" sizes="144x144" href="/SEO/apple-icon-144x144.png"/>
      <link rel="apple-touch-icon" sizes="152x152" href="/SEO/apple-icon-152x152.png"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/SEO/apple-icon-180x180.png"/>
      <link rel="icon" type="image/png" sizes="192x192"  href="/SEO/android-icon-192x192.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/SEO/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="96x96" href="/SEO/favicon-96x96.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/SEO/favicon-16x16.png"/>
      <link rel="manifest" href="/SEO/manifest.json"/>
      <meta name="msapplication-TileColor" content="#ffffff"/>
      <meta name="msapplication-TileImage" content="/SEO/ms-icon-144x144.png"/>
      <meta name="theme-color" content="#ffffff"/>
      {/* Font. */}
      <link rel="stylesheet" href="https://use.typekit.net/hmt3tyd.css"/>

      {/* Google Analytics. */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-167177328-1"/>

      {/* Normalize. */}
      <link href="/normalize.css" rel="stylesheet" type="text/css"/>

      {/* 
        Landing Page Tags.
        TODO: Tidy Up
      */}
      <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      
    </Head>

    <Provider>

      <Elements stripe={stripe}>

        {
          show &&
              <>
                {/* Global Style. */}
                <GlobalStyle/>

                {/* Navigation Bar. */}
                <NavigationBar/>

                {/* Mobile Navigation Menu. */}
                <MobileNavigationMenu/>
              </>
        }

        {/* Component. */}
        <Component {...pageProps} setShow={setShow}/>

        {/* Footer. */}
        {
          show &&
          <Footer/>
        }

      </Elements>

      

    </Provider>

  </>

}

// Export.
export default Application