// Dependencies.
import axios from 'axios'
import styled from 'styled-components'
import { Page as PAGE } from '../../components/Page'
import { NextPage } from 'next'
import { H2 } from '../../components/H2'
import { language, fadeIn } from '../../utils'
import { Section } from '../../components/Section'
import { useState, useContext } from 'react'
import { Addons as ADDONS, AddressDetail, NBNPlan, CustomerSource, Customer, ContractOption } from '../../types'
import { Address } from '../../components/Build/Address'
import { Account } from '../../components/Build/Account'
import { Order } from '../../components/Build/Order'
import { UserContext } from '../../context'
import { Billing } from '../../components/Build/Billing'
import { SelectPlan } from '../../components/Build/SelectPlan'
import { P } from '../../components/P'
import { Hyperlink } from '../../components/Hyperlink'
import { Contract } from '../../components/Build/Contract'
import { Addons } from '../../components/Build/Addons'
import { Input } from '../../components/Input'
import { useRouter } from 'next/router'

const Page = styled(PAGE)`
  text-align: center;

  ${Input} {
    margin: auto;
  }
  
  .textField {
    display: inline-block;
  }

  .addressInput {
    margin: auto;
  }
`

// Build Page.
const BuildPage: NextPage<{plans: NBNPlan[]}> = props => {

  // Props.
  const {plans} = props

  // User Context.
  const {currentUser, customer, service} = useContext(UserContext)

  // Router.
  const router = useRouter()

  // State.
  const [addons, setAddons] = useState<ADDONS>({installation: false, modem: false, staticIP: false, VOIP: false})
  const [currentStep, setCurrentStep] = useState(0)
  const [address, setAddress] = useState<AddressDetail>(undefined)
  const [plan, setPlan] = useState<NBNPlan>(plans.find(plan => plan.name === router.query.plan) || undefined)
  const [contract, setContract] = useState<ContractOption>(ContractOption.None)

  // Service.
  if (service) return <Page>
    <Section>
      <H2>Your NBN Service Is On Its Way</H2>
      <P>
        We appreciate your patience while we process your order and will send you a text as soon as it's ready.
        <br/><br/>
        One of our technicians may contact you via email over the coming days if there's anything else we need on our end.
        <br/><br/>
        In the meantime, please <Hyperlink href="/support">visit our support page</Hyperlink> if there's anything else we can help you out with.
        <br/><br/>
        Thanks for choosing Source Internet.
      </P>
    </Section>
  </Page>

  // Render Circuits.
  const showAddress = true
  const showPlans = showAddress && Boolean(address)
  const showContractOptions = showPlans && Boolean(plan)
  const showAddons = showContractOptions && Boolean(contract)
  const showAccount = showAddons && Boolean(addons)
  const showBilling = showAddons && Boolean(currentUser)
  const showOrderConfirmation = showBilling && Boolean(customer && ((customer.sources && customer.sources.data.length)||(customer.payment_methods && customer.payment_methods.data.length)))

  // ..
  return <Page style={{paddingBottom: showPlans && '5vmin'}}>

    <Section>

      {/* Header. */}
      <H2>Build Your Service</H2>
      <P>Build and order your custom {language.nbn} plan by completing the 7 step form below.</P>

    </Section>

    {/* Address. */}
    {showAddress && <Address 
      address={address}
      onSelect={setAddress}
    />}

    {/* Speed. */}
    {showPlans && <SelectPlan
      onSelect={plan => {
        setPlan(plan)
        setCurrentStep(1)
      }}
      plans={plans} 
      selectedPlan={plan}
    />}

    {/* Contract. */}
    {showContractOptions && <Contract
      onChange={setContract}
      value={contract}
    />}

    {/* Add-ons. */}
    {showAddons && <Addons
      onChange={setAddons}
      value={addons}
    />}

    {/* Account. */}
    {showAccount && <Account/>}

    {/* Enter Billing Method. */}
    {showBilling && <Billing/>}

    {/* Place Order. */}
    {showOrderConfirmation && <Order
      addons={addons}
      contract={contract}
      location={address}
      plan={plan}
      setCurrentStep={setCurrentStep}
    />}

  </Page>

}

// Get Initial Props.
BuildPage.getInitialProps = async context => {
  const request = context.req
  const host = typeof window !== 'undefined' ? window.location.host || '' : request.headers.host
  const protocol = host.includes('localhost') ? 'http' : 'https'
  const plans = (await axios.get<NBNPlan[]>(`${protocol}://${host}/api/plans`)).data.filter(plan => plan.metadata.isNBNPlan)
  return {plans}
}

// Export.
export default BuildPage