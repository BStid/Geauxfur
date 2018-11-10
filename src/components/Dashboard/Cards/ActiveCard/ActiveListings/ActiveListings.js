import React, { Component } from "react";
import { connect } from "react-redux";
import { getActiveItems } from "../../../../../redux/senderReducer";
import Icons from "../../../../Icons/Icons";
import defaultPicture from "../../../../Nav/pictures/userDefault.png";
import "./ActiveListings.css";

class ActiveListings extends Component {
  constructor() {
    super();
    this.state = {
      activeListingClass: "hiddenActiveListing"
    };
  }

  delayState() {
    setTimeout(() => {
      this.setState({ activeListingClass: "activeListingsContainer" });
    }, 3000);
  }
  componentDidMount() {
    this.delayState();
  }
  render() {
    const { activeItems } = this.props.sender;
    const { activeListingClass } = this.state;
    const displayActiveListings = activeItems.map((value, index) => {
      return (
        <div className="activeListing" key={index}>
          Recent Listing...
          <div className="activeHeader">
            <Icons iconId="activeListingIcon" category={value.category} />{" "}
            {value.time_sent} PM{" "}
          </div>
          {!value.image_url ? (
            <img
              src={defaultPicture}
              alt="User Profile"
              className="userIconActive"
            />
          ) : (
            <img
              src={value.image_url}
              alt="User Profile"
              className="userIconActive"
            />
          )}
          <h3>{value.description}</h3>
        </div>
      );
    });
    return <div className={activeListingClass}>{displayActiveListings}</div>;
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { getActiveItems }
)(ActiveListings);
