// Dependencies.
import { NextPage } from 'next'
import { Page } from '../components/Page'
import { Section } from '../components/Section'
import { H2 } from '../components/H2'
import { AddressSuggestion, AddressDetail } from '../types'
import { useState, useEffect } from 'react'
import { colors } from '../utils'
import { FormField } from '../components/FormField'
import { AddressInput } from '../components/AddressInput'

// Address Page.
const AddressPage: NextPage = () => {

  // ..
  return <Page>

    <Section>

      <H2>Address</H2>

      <AddressInput onConfirm={() => {}}/>

    </Section>

  </Page>

}

export default AddressPage