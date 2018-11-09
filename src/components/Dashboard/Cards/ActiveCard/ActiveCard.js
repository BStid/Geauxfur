import React, { Component } from "react";
import { connect } from "react-redux";
import { updateInput } from "../../../../redux/mainReducer";
import { updateCardsClass } from "../../../../redux/senderReducer";
import Icons from "../../../Icons/Icons";
import "../../../Icons/Icons.css";
import "../css/Cards.css";

class ActiveCard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { panelClass } = this.props.sender;
    return <div className={panelClass} />;
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { updateInput, updateCardsClass }
)(ActiveCard);
