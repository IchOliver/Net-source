/**
* Use the CSS tab above to style your Element's container.
*/
import React from 'react';
import {AuBankAccountElement} from '@stripe/react-stripe-js';
// import './BecsFormStyles.css'

// Custom styling can be passed as options when creating an Element.
const AU_BANK_ACCOUNT_STYLE = {
  base: {
    color: '#32325d',
    fontSize: '16px',
    '::placeholder': {
      color: '#aab7c4'
    },
    ':-webkit-autofill': {
      color: '#32325d',
    },
  },
  invalid: {
    color: '#fa755a',
    iconColor: '#fa755a',
    ':-webkit-autofill': {
      color: '#fa755a',
    },
  },
  disabled: false,
  hideIcon: false,
  iconStyle: "default", // or "solid"
};

const AU_BANK_ACCOUNT_ELEMENT_OPTIONS = {
  style: AU_BANK_ACCOUNT_STYLE
};

export const BecsForm = ({onSubmit, disabled}) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-row inline">
        <div className="col">
          <label>
            Name
            <input
              name="accountholder-name"
              placeholder="John Smith"
              required
            />
          </label>
        </div>

        <div className="col">
          <label>
            Email Address
            <input
              name="email"
              type="email"
              placeholder="john.smith@example.com"
              required
            />
          </label>
        </div>
      </div>

      <div className="form-row">
        <label>
          Bank Account
          <AuBankAccountElement options={AU_BANK_ACCOUNT_ELEMENT_OPTIONS} />
        </label>
      </div>

      {/* Display mandate acceptance text. */}
      <div className="mandate-acceptance">
        By providing your bank account details, you agree to this Direct Debit Request
        and the <a href="https://stripe.com/au-becs-dd-service-agreement/legal">Direct Debit Request service agreement</a>,
        and authorise Stripe Payments Australia Pty Ltd ACN 160 180 343
        Direct Debit User ID number 507156 (“Stripe”) to debit your account
        through the Bulk Electronic Clearing System (BECS) on behalf of
        Rocketship Inc. (the "Merchant") for any amounts separately
        communicated to you by the Merchant. You certify that you are either
        an account holder or an authorised signatory on the account listed above.
      </div>

      <button type="submit" disabled={disabled}>Set up BECS Direct Debit</button>
    </form>
  );
};