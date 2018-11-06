import React, { Component } from "react";
import { Elements } from "react-stripe-elements";
import Checkout from "./Checkout";
import "./Payment.css";

class Payment extends Component {
  render() {
    return (
      <div className="paymentOuter">
        {/* <Elements>
          <Checkout />
        </Elements> */}
      </div>
    );
  }
}

export default Payment;
