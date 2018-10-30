import React, { Component } from "react";
//import connect form react-redux to connec the store to your component
import { connect } from "react-redux";
import TopNav from "../Nav/TopNav";
import SideNav from "../Nav/SideNav";
import Cards from "../Cards/Cards";
import Map from "../Map/Map";
import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboardOuter">
        <div className="mainContentContainer">
          <TopNav />
          <div className="mainContent">
            <SideNav />
            <Cards />
            <Map />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Dashboard);
