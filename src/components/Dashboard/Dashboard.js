import React, { Component } from "react";
//import connect from react-redux to connect the store to your component
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
            {/* <Map /> */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Dashboard);
