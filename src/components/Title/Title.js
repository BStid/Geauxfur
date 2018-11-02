import React, { Component } from "react";
import { connect } from "react-redux";
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
