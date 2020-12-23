// Dependencies.
import styled, { css } from 'styled-components'
import { dimensions, colors, forScreensGreaterThanMobileWidth } from '../utils'
import { Section } from './Section'
import { Hyperlink } from './Hyperlink'
import { useMemo } from 'react'
import { H5 } from './H5'

// Footer.
const FOOTER = styled.footer`
  background: #f2f2f2;
  margin: auto;
  max-width: 100%;
  padding: 30px 0;
  text-align: center;

  .siteLinks {
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 30px;

    & > div {
      max-width: 100%;
      text-align: center;
      width: 200px;
    }

    div + div {
      margin-top: 20px;
    }

    ${H5} {
      margin-bottom: 5px;
    }

    .hyperlink {
      display: block;
      font-weight: 400;
      line-height: 1.2;
      margin-top: 5px;
    }
  }

  .link + .link {
    margin-top: 10px;
  }

  /* Desktop. */
  ${forScreensGreaterThanMobileWidth(css`
    padding: 20px 0;
    text-align: left;

    .siteLinks {
      align-items: flex-start;
      flex-direction: row;
      justify-content: flex-start;
      padding-bottom: 20px;

      & > div {
        text-align: left;
        width: auto;
      }

      div + div {
        margin-left: 20px;
        margin-top: 0;
      }
    }
  `)}
`

// Footer.
export const Footer: React.FC = props => {

  // Links.
  const links = useMemo(() => {
    return [
      // {href: '/about', label: 'About'},
      // {href: '/plans', label: 'Plans'},
      // {href: '/terms', label: 'Terms'},
      // {href: '/privacy', label: 'Privacy'},
    ]
  }, [])

  // ..
  return <FOOTER className="footer">
    
    <Section>

      {/* Site Links. */}
      <div className="siteLinks">

        <div>
          <H5>Site</H5>
          <Hyperlink href="/">Home</Hyperlink>
          <Hyperlink href="/plans">Plans</Hyperlink>
          <Hyperlink href="/contact">Contact Us</Hyperlink>
        </div>

        {/*  */}
        <div>
          <H5>Legal</H5>
          <Hyperlink href="/privacy" target="_blank">Privacy Policy</Hyperlink>
          <Hyperlink href="/terms" target="_blank">Terms of Service</Hyperlink>
          <Hyperlink href="/cis" target="_blank">Critical Information Summary</Hyperlink>
        </div>

      </div>

      {/* Copyright. */}
      © 2020 Source Internet Pty Ltd.

    </Section>

  </FOOTER>

}