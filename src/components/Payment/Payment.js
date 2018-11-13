import React, { Component } from "react";
import { StripeProvider, Elements } from "react-stripe-elements";
import Checkout from "./Checkout";
import "./Payment.css";

class Payment extends Component {
  render() {
    return (
      <div className="paymentOuter">
        <StripeProvider apiKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}>
          <Elements>
            <Checkout
              name={"Geauxfur"}
              description={""}
              amount={this.props.amount}
              email={this.props.email}
              callGeauxfur={this.props.callGeauxfur}
            />
          </Elements>
        </StripeProvider>
      </div>
    );
  }
}

export default Payment;
