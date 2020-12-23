// Dependencies.
import styled from 'styled-components'
import {NextPage} from 'next'
import {Page as PAGE} from '../../components/Page'
import {Section} from '../../components/Section'
import {H2} from '../../components/H2'
import {useRedirectIfUnauthenticated} from '../../utils/redirect'
import {P} from '../../components/P'
import {PlanSection} from '../../components/Dashboard/PlanSection'
import {BillingSection} from '../../components/Dashboard/BillingSection'
import {AccountSection} from '../../components/Dashboard/AccountSection'
import {UserContext} from '../../context'
import { useContext } from 'react'

const Page = styled(PAGE)`
  ${Section} + ${Section} {
    margin-top: 40px;
  }
`

// Dashboard Page.
const DashboardPage: NextPage = props => {

  const {currentUser} = useContext(UserContext)

  // Redirect If Unauthenticated.
  useRedirectIfUnauthenticated('/')

  // ..
  if (!currentUser) return <Page/>

  // ..
  return <Page>

    <Section>
      
      {/* Header. */}
      <H2>Dashboard</H2>
      <P>Manage your selected plan, billing, and profile information below.</P>

    </Section>

    {/* Plan. */}
    <PlanSection/>

    {/* Billing. */}
    <BillingSection/>

    {/* Account. */}
    <AccountSection/>

  </Page>

}

// Export.
export default DashboardPage