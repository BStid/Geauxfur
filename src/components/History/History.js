import React, { Component } from "react";
import DisplayHistory from "./DisplayHistory";
import "./History.css";
import { connect } from "react-redux";
import { getOrderHistory } from "../../redux/mainReducer";

class History extends Component {
  constructor() {
    super();
    this.state = {
      card: "historyCard",
      title: "historyTitle",
      infoContainer: "historyInfoContainer",
      info: "historyInfo",
      addButton: "addReviewButton"
    };
  }
  componentDidMount() {
    this.props.getOrderHistory();
  }
  render() {
    const { orderHistory } = this.props.main;
    const { card, title, infoContainer, info, addButton } = this.state;
    const displayHistory = orderHistory.map((value, index) => {
      return (
        <DisplayHistory
          value={value}
          key={index}
          card={card}
          title={title}
          infoContainer={infoContainer}
          info={info}
          addButton={addButton}
        />
      );
    });
    return <div className="historyOuter">{displayHistory}</div>;
  }
}
const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getOrderHistory }
)(History);
