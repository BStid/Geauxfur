import React, { Component } from "react";
//import connect from react-redux to connect the store to your component
import { connect } from "react-redux";
import TopNav from "../Nav/TopNav";
import SideNav from "../Nav/SideNav";
import routes from "../../routes";
import "./Dashboard.css";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      sideNavClass: "sideContainer"
    };
    this.toggleSideNav = this.toggleSideNav.bind(this);
  }

  toggleSideNav() {
    if (this.state.sideNavClass === "sideContainer-hide") {
      this.setState({ sideNavClass: "sideContainer" });
    } else {
      this.setState({ sideNavClass: "sideContainer-hide" });
    }
  }
  render() {
    return (
      <div className="dashboardOuter">
        <div className="mainContentContainer">
          <TopNav toggleSideNav={this.toggleSideNav} />
          <div className="mainContent">
            <SideNav sideNavClass={this.state.sideNavClass} />
            {routes}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Dashboard);
