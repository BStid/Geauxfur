import React, { Component } from "react";
import "./History.css";
import Icons from "../Icons/Icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getDriverName } from "../../redux/senderReducer";

class DisplayHistory extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { value } = this.props;

    return (
      <div className="historyCard">
        <div className="iconType">
          <Icons category={value.category} />
        </div>
        <h1 className="historyTitle">{value.name}</h1>
        <div className="historyInfoContainer">
          <div className="historyInfo">To: {value.address}</div>
          <div className="historyInfo">Time Sent: {value.time_sent}</div>
          <div className="historyInfo">
            Time Recieved: {value.time_recieved}
          </div>
          <div className="historyInfo">Driver: {value.driver_name}</div>
        </div>
        <Link
          to={`/dashboard/review/${value.user_id_driver}/${value.id}`}
          key={value.id}
          className="addReviewButton"
        >
          Add Review
        </Link>
      </div>
    );
  }
}
const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getDriverName }
)(DisplayHistory);
