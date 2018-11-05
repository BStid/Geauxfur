import React, { Component } from "react";
import "./History.css";
import { connect } from "react-redux";
import { getDriverName } from "../../redux/senderReducer";

class DisplayHistory extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {}
  render() {
    const { value } = this.props;

    return (
      <div className="historyCard">
        <h1 className="historyTitle">{value.name}</h1>
        <div className="historyInfoContainer">
          <div className="historyInfo">To: {value.address}</div>
          <div className="historyInfo">Time Sent: {value.time_sent}</div>
          <div className="historyInfo">
            Time Recieved: {value.time_recieved}
          </div>
          <div className="historyInfo">Driver: {value.driver_name}</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getDriverName }
)(DisplayHistory);
