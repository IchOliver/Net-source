// Dependencies.
import styled from 'styled-components'
import {H4} from '../H4'
import {Section as SECTION} from '../Section'
import {SignOutButton} from '../SignOutButton'
import {useContext} from 'react'
import {UserContext} from '../../context'
import {FormField} from '../FormField'
import { P } from '../P'

// Section.
const Section = styled(SECTION)`
  .nameField {
    text-transform: capitalize;
  }
  .signOutButton {
    margin-top: 15px;
  }
`

// Account Section.
export const AccountSection: React.FC = props => {

  // 
  const {currentUser} = useContext(UserContext)
  if (!currentUser) return null
  const {displayName, email} = currentUser
  const address = ''

  // ..
  return <Section>

    {/* Header. */}
    <H4>Account</H4>

    {/* Email. */}
    <FormField title="Email">
      <P>{email}</P>
    </FormField>


    {/* Sign Out. */}
    <SignOutButton/>

  </Section>
  
}