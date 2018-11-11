import React, { Component } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateInput, getUser } from "../../redux/mainReducer";
import searchIcon from "./pictures/search.svg";
import moreIcon from "./pictures/moreIcon.svg";
import userDefaultIcon from "./pictures/userDefault.png";
import logo from "../../pictures/gopherHeadSillo.png";

class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: []
    };
  }
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    const { userInfo } = this.props.main;

    return (
      <div className="topNavContainer">
        <div className="menuDiv" onClick={this.props.toggleSideNav}>
          &#x2630;
        </div>
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
              {!userInfo.first_name ? (
                <p className="userName">User</p>
              ) : (
                <p className="userName">{userInfo.first_name}</p>
              )}
              <br />
              {!userInfo.email ? (
                <p className="userEmail">useremail@geauxfur.com</p>
              ) : (
                <p className="userEmail">{userInfo.email}</p>
              )}
            </div>

            {!userInfo.image_url ? (
              <img
                src={userDefaultIcon}
                alt="user picture"
                className="userImage"
              />
            ) : (
              <img
                src={userInfo.image_url}
                alt="user picture"
                className="userImage"
              />
            )}
          </div>
          <div className="moreContainer">
            <img src={moreIcon} alt="more" className="moreIcon" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { updateInput, getUser }
)(TopNav);
