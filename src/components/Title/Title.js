import React, { Component } from "react";
//import connect form react-redux to connec the store to your component
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Overlay from "./Overlay";

import "./Title.css";

class Title extends Component {
  render() {
    return (
      <div className="titleOuter">
        <Overlay />
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Title);
