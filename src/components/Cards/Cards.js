import React, { Component } from "react";
import { connect } from "react-redux";
import { getDriverCoordinates } from "../../redux/senderReducer";

import "./Cards.css";

class Cards extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.props.getDriverCoordinates();
  }
  render() {
    return <div className="cardsContainer" />;
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { getDriverCoordinates }
)(Cards);
