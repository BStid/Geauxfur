import React, { Component } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateInput } from "../../redux/mainReducer";
import searchIcon from "./pictures/search.svg";
import moreIcon from "./pictures/moreIcon.svg";
import userDefaultIcon from "./pictures/userDefault.png";
import logo from "../../pictures/gopherHeadSillo.png";

class TopNav extends Component {
  render() {
    return (
      <div className="topNavContainer">
        <Link to="/" className="">
          <div className="iconContainer">
            <img src={logo} alt="logo" className="logo" />
            <p className="logoText">GEAUXFUR</p>
          </div>
        </Link>
        <div className="header">
          <img src={searchIcon} alt="search" className="searchIcon" />
          <input
            type="text"
            placeholder="Where would you like to ship?"
            className="searchBar"
            name="search"
            value={this.props.search}
            onChange={e => this.props.updateInput(e)}
          />
          <div className="filler" />
          {this.props.input && this.props.input}

          <div className="userProfileCard">
            <div className="userInfo">
              <p className="userName">User</p>
              <br />
              <p className="userEmail">thisismyemail@email.com</p>
            </div>
            <img
              src={userDefaultIcon}
              alt="user picture"
              className="userImage"
            />
          </div>
          <div className="moreContainer">
            <img src={moreIcon} alt="more" className="moreIcon" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    input: state.input
  };
};
export default connect(
  mapStateToProps,
  { updateInput }
)(TopNav);
