import React, { Component } from "react";
import "./History.css";
import { connect } from "react-redux";
import { getDriverName } from "../../redux/senderReducer";

class DisplayHistory extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.props.getDriverName(this.props.value.user_id_driver);
  }
  render() {
    console.log(this.props.sender.driverName);
    const { value } = this.props;
    return (
      <div className="historyCard">
        <h1>{value.name}</h1>
        <h2>To: {value.address}</h2>
        <h2>Time Sent: {value.time_sent}</h2>
        <h2>Time Recieved: {value.time_recieved}</h2>
        <h2>Driver: {this.props.sender.driverName}</h2>
      </div>
    );
  }
}
const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getDriverName }
)(DisplayHistory);
