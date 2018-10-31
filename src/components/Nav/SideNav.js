import React, { Component } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import homeIcon from "./pictures/placeholder.svg";
import profileButton from "./pictures/avatar.png";
import messagesIcon from "./pictures/envelope.png";
import paymentIcon from "./pictures/hand.png";
import historyIcon from "./pictures/open-book.png";
import safetyIcon from "./pictures/hand-shake.png";
import defaultUser from "./pictures/userDefault.png";

class SideNav extends Component {
  constructor() {
    super();
    this.state = {};
  }
  //TODO: Clean Up This Mess with a .map pulling from database
  render() {
    return (
      <div className="sideContainer">
        <div className="sideNav">
          <Link to="/dashboard">
            <div className="homeButton">
              <img src={homeIcon} alt="home icon" className="homeIcon" />
              Home
            </div>
          </Link>
          <Link to="/profile">
            <div className="profileButton">
              <img
                src={profileButton}
                alt="profile icon"
                className="profileIcon"
                id="noInvert"
              />
              Profile
            </div>
          </Link>
          <Link to="/messages">
            <div className="messagesButton">
              <img
                src={messagesIcon}
                alt="messages icon"
                className="messagesIcon"
                id="noInvert"
              />
              Messages
            </div>
          </Link>
          <Link to="/payment">
            <div className="paymentButton">
              <img
                src={paymentIcon}
                alt="payment icon"
                className="paymentIcon"
              />
              Payment
            </div>
          </Link>
          <Link to="/history">
            <div className="historyButton">
              <img
                src={historyIcon}
                alt="history icon"
                className="historyIcon"
              />
              History
            </div>
          </Link>
          <Link to="/safety">
            <div className="safetyButton">
              <img src={safetyIcon} alt="safety icon" className="safetyIcon" />
              Saftey
            </div>
          </Link>
        </div>
        <div id="sideProfileCard">
          <img
            src={defaultUser}
            id="sideDefaultUser"
            alt="default user image"
          />
          <p id="sideUserName">User</p>
          <br />
          <p id="sideEmail">thisismyemail@email.com</p>
        </div>
      </div>
    );
  }
}

export default SideNav;
