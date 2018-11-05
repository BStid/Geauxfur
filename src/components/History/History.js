import React, { Component } from "react";
import DisplayHistory from "./DisplayHistory";
import "./History.css";
import { connect } from "react-redux";
import { getOrderHistory } from "../../redux/mainReducer";

class History extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.props.getOrderHistory();
  }
  render() {
    const { orderHistory } = this.props.main;
    const displayHistory = orderHistory.map((value, index) => {
      return <DisplayHistory value={value} key={index} />;
    });
    return <div className="historyOuter">{displayHistory}</div>;
  }
}
const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getOrderHistory }
)(History);
