import React from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
require("dotenv").config();

const CURRENCY = "USD";

const fromDollarToCent = amount => amount * 100;

const onToken = (amount, description, email, callGeauxfur) => token =>
  axios
    .post(`/createcharge`, {
      description,
      source: token.id,
      currency: CURRENCY,
      receipt_email: email,
      amount: fromDollarToCent(amount)
    })
    .then(() => {
      callGeauxfur();
    })
    .catch(err => {
      console.log("Error on payment, calling Geauxfur anyway.", err);
      callGeauxfur();
    });

const Checkout = ({ name, description, email, amount, callGeauxfur }) => {
  return (
    <StripeCheckout
      name={name}
      description={description}
      amount={fromDollarToCent(amount)}
      token={onToken(amount, description, email, callGeauxfur)}
      currency={CURRENCY}
      stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
    />
  );
};

export default Checkout;
