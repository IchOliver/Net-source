// Next Page.
import { NextPage } from 'next'
import { Page } from '../../../components/Page'
import { Section } from '../../../components/Section'
import { H2 } from '../../../components/H2'
import { P } from '../../../components/P'
import { UserContext } from '../../../context'
import { useContext, useEffect } from 'react'
import { SourceList } from '../../../components/SourceList'

// Billing Page.
const BillingPage: NextPage = props => {

  // User Context.
  const {fetchCustomer} = useContext(UserContext)

  // Did Mount.
  useEffect(() => {
    fetchCustomer() // Fetch Customer.
  }, [])

  // ..
  return <Page>

    <Section>

      {/* Header. */}
      <H2>Billing</H2>

      {/* Subheader. */}
      <P style={{marginBottom: '30px'}}>Manage your saved billing methods below.</P>
      
      {/* Billing Methods. */}
      <SourceList/>

    </Section>

  </Page>

}

// Export.
export default BillingPage