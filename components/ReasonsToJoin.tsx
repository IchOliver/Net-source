// Dependencies.
import styled from 'styled-components'
import { Section as SECTION } from './Section'
import { language } from '../utils'
import { H2 } from './H2'
import { P } from './P'
import { FeatureSection } from './FeatureSection'
import { H3 } from './H3'
import { CTA } from './CTA'
import { Hyperlink } from './Hyperlink'

// Section.
const Section = styled(SECTION)`
  padding-top: 80px;
  text-align: center;
`

// Props.
interface Props {}

// Reasons To Join.
export const ReasonsToJoin: React.FC<Props> = props => {

  return <Section>

    {/* Header. */}
    <H2 style={{margin: 'auto', textAlign: 'center'}}>
      Why Choose Source Internet?
    </H2>

    <P>
      There are dozens of reasons to get your {language.nbn} service from Source Internet —
      here are a select few.
    </P>

    {/* Simple. */}
    <FeatureSection
      header={<H3><em>We Keep Things</em> <em>Simple</em></H3>}
      image="/images/simple.svg"
      subheader={<P>
        Connecting to the internet shouldn't be hard.
        Our offerings are straightforward, and we intend to keep things that way.
        We don't overcomplicate things.
        <br/><br/>
        <Hyperlink href="/plans?ref=fsi">
          <CTA>Browse Our Plans</CTA>
        </Hyperlink>
      </P>}
    />

    {/* Experts. */}
    <FeatureSection
      flip
      header={<H3><em>We're Industry</em> <em>Experts</em></H3>}
      image="/images/experts.svg"
      subheader={<P>
        Our directors made key contributions towards the majority of the construction of the commercial branch of the {language.nbn} 
        network in Queensland. 
        As a result, we have the best contractors in the business working with us,
        we know the issues and the solutions,
        and we are the only internet service provider that can help you get your internet problems fixed directly.
      </P>}
    />

    {/* Customer Support. */}
    <FeatureSection
      header={<H3>
        <em>Our Customer Support Is</em> <em>Top Notch</em> 
      </H3>}
      image="/images/customerSupport.svg"
      subheader={<P>
        Our local customer service operators have a practical understanding of the {language.nbn} network—they don't work off scripts.
        <br/><br/>
        <Hyperlink href="/contact?ref=fcs">
          <CTA>See For Yourself</CTA>
        </Hyperlink>
      </P>}
    />

    {/* Local. */}
    <FeatureSection
      flip
      header={<H3><em>We're Australian</em> <em>Based</em></H3>}
      image="/images/bikiniDoodle.svg"
      subheader={<P>
        Our core team is based in Brisbane, Queensland, and our network spans throughout the East Coast of Australia.
        We set out on a mission to help our community get the best out of the {language.nbn} network
        and are committed to going above and beyond, wherever necessary, to help our customers 
        experience what we believe to be the best invention since sliced bread.
        <br/><br/>
        <Hyperlink href="/plans?ref=flo">
          <CTA>Join Us</CTA>
        </Hyperlink>
      </P>}
    />

  </Section>

}