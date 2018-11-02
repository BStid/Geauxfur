import React, { Component } from "react";
import { connect } from "react-redux";
import userDefaultPicture from "../Nav/pictures/userDefault.png";
import { Link } from "react-router-dom";
import "./Profile.css";

class EditInfo extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <div className="editOuter" />;
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(EditInfo);
