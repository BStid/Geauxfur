import React from "react";
import "./Title.css";
import CoverImg from "../../pictures/Z.png";
import logo from "../../pictures/gophersillo.png";
import Sunset from "../../pictures/drivergreen.png";
import { Link } from "react-router-dom";

export default function Overlay() {
  return (
    <div className="overlayContainer">
      <img src={Sunset} alt="" className="middlePicture" />
      <img src={CoverImg} alt="" className="whiteOverlay" />
      <img src={logo} alt="" className="gopherIcon" />
      <Link to="/explore">
        <div className="learnMoreContainer">
          <div className="lowerLearnMoreContainer" />
        </div>
        <p className="exploreText">Explore</p>
      </Link>
      <div className="dashboardLinkContainer">
        <Link to="/dashboard" className="dashLink" id="send">
          Send
        </Link>
        <div className="greenBlock" />
        <Link to="/dashboard" className="dashLink" id="deliver">
          Deliver
        </Link>
      </div>
    </div>
  );
}
