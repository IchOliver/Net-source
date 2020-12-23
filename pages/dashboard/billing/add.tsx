// Dependencies.
import { NextPage } from 'next'
import { Page } from '../../../components/Page'
import { Section } from '../../../components/Section'
import { H2 } from '../../../components/H2'
import { CreditCardForm } from '../../../components/CreditCardForm'

// Add Billing Method Page.
const AddBillingMethodPage: NextPage = () => {

  return <Page>
    
    <Section>

      {/* Header. */}
      <H2>Billing</H2>

      {/* Credit Card Form. */}
      <CreditCardForm/>

    </Section>

  </Page>

}

// Export.
export default AddBillingMethodPage