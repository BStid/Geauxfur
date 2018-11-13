import React from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
require("dotenv").config();

const CURRENCY = "USD";

const fromDollarToCent = amount => amount * 100;

const onToken = (amount, description) => token =>
  axios
    .post(`/createcharge`, {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromDollarToCent(amount)
    })
    .catch(err => {
      console.log(err);
    });

const Checkout = ({ name, description, amount }) => {
  return (
    <StripeCheckout
      name={name}
      description={description}
      amount={fromDollarToCent(amount)}
      token={onToken(amount, description)}
      currency={CURRENCY}
      stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
    />
  );
};

export default Checkout;
