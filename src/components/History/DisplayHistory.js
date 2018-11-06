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
    const { value, card, title, infoContainer, info, addButton } = this.props;
    return (
      <div className={card}>
        <div className="iconType">
          <Icons category={value.category} />
        </div>
        <h1 className={title}>{value.name}</h1>
        <div className={infoContainer}>
          <div className={info}>To: {value.address}</div>
          <div className={info}>Time Sent: {value.time_sent}</div>
          <div className={info}>Time Recieved: {value.time_recieved}</div>
          <div className={info}>Driver: {value.driver_name}</div>
        </div>
        <Link
          to={`/dashboard/review/${value.user_id_driver}/${value.id}`}
          key={value.id}
          className={addButton}
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
