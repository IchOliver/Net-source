// Dependencies.
import styled from 'styled-components'
import { Section as SECTION } from '../../Section'
import { H3 } from '../../H3'
import { Addon } from './Addon'
import { P } from '../../P'
import { Addons as ADDONS } from '../../../types'
import { language } from '../../../utils'

// Section.
const Section = styled(SECTION)`
  padding-top: 10vmin;

  .addons {
    align-items: flex-start;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    position: relative;
  }
`

// Props.
interface Props {
  onChange: (addons: ADDONS) => void
  value: ADDONS
}

// Extras.
export const Addons: React.FC<Props> = props => {

  // Props.
  const {onChange, value} = props

  // Toggle Addon.
  const toggleAddon = (key: keyof ADDONS) => onChange({...value, [key]: !value[key]})

  // ..
  return <Section>

    <H3>4. Pick Your Add-ons</H3>
    <P style={{marginBottom: '30px'}}>Select additional features below.</P>

    <div className="addons">

      {/* Fixed IP. */}
      <Addon
        description="Useful for establishing reliable IP dependent connections."
        name="Static IP"
        onSelect={() => toggleAddon('staticIP')}
        price="$15 per month"
        selected={value.staticIP}
      />

      {/* VOIP. */}
      <Addon
        description="Includes unlimited calls to mobiles and landlines Australia-wide."
        name="VOIP Phone Connection"
        onSelect={() => toggleAddon('VOIP')}
        price="$10 per month"
        selected={value.VOIP}
      />

      {/* Modem */}
      <Addon
        description={`
          An ${language.nbn} compatible modem, shipped to your listed service address.
        `}
        name="NBN Compatible Modem"
        onSelect={() => toggleAddon('modem')}
        price="$120"
        selected={value.modem}
      />


      {/* Installation. */}
      <Addon
        description="Have us arrange for an experienced technician to visit your address and handle the installation of your NBN and/or VOIP connections (if applicable)."
        name="Guided Installation"
        onSelect={() => toggleAddon('installation')}
        price="$50"
        selected={value.installation}
      />

    </div>

  </Section>

}