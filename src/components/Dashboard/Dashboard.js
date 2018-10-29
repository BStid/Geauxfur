import React, { Component } from "react";
//import connect form react-redux to connec the store to your component
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SideNav from "../Nav/SideNav";
import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboardOuter">
        {/* <TopNav /> */}
        <div className="mainContentDiv">
          <SideNav />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Dashboard);
