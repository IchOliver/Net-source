import React from 'react';
import {useStripe, useElements, AuBankAccountElement} from '@stripe/react-stripe-js';

import { BecsForm } from './BecsForm';

export const PaymentSetupForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const auBankAccount = elements.getElement(AuBankAccountElement);

    // For brevity, this example is using uncontrolled components for
    // the accountholder's name and email. In a real world app you will
    // probably want to use controlled components.
    // https://reactjs.org/docs/uncontrolled-components.html
    // https://reactjs.org/docs/forms.html#controlled-components

    const accountholderName = event.target['accountholder-name'];
    const email = event.target.email;

    stripe.confirmAuBecsDebitSetup('seti_1Hef4vLN2Pzi6lrSdhHKjzq9_secret_IF9N6BHXGJw7lHFI2mW3UZAHzUGFWHn', {
      payment_method: {
        au_becs_debit: auBankAccount,
        billing_details: {
          name: accountholderName.value,
          email: email.value,
        },
      }
    }).then(function(res){
      console.log('res', res)
    });

    // if (result.error) {
    //   // Show error to your customer.
    //   console.log(result.error.message);
    // } else {
    //   // Show a confirmation message to your customer.
    //   // The SetupIntent is in the 'succeeded' state.
    // }
  };

  return (
    <BecsForm onSubmit={handleSubmit} disabled={!stripe} />
  );
}