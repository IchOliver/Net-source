import styled from 'styled-components'
import { NextPage } from 'next'
import { Page } from '../components/Page'
import { Section } from '../components/Section'
import { H2 } from '../components/H2'
import { PaymentSetupForm } from '../components/PaymentSetupForm'

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_3z3CbApUVi7Ub2NolRBBGzVF00eFhFaC2I');

// Help Page.
const BECSPage: NextPage = () => {

    return <Elements stripe={stripePromise}>
        <Page>
            <Section>
                <H2>BECS</H2>
                <PaymentSetupForm />
            </Section>
        </Page>
        </Elements>
}

export default BECSPage