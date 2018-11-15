import React from "react";
import "./Title.css";
import CoverImg from "../../pictures/Z.png";
import logo from "../../pictures/gophersillo.png";
import Sunset from "../../pictures/drivergreen.png";
import { Link } from "react-router-dom";

export default function Overlay() {
  const redirect = () => {
    window.location.href = `${process.env.REACT_APP_SERVER}/login`;
  };
  return (
    <div className="overlayContainer">
      <img src={Sunset} alt="" className="middlePicture" />
      <img src={CoverImg} alt="" className="whiteOverlay" />
      <img
        src={logo}
        alt=""
        className="gopherIcon"
        onClick={() => redirect()}
      />
      <Link to="/explore">
        <div className="learnMoreContainer">
          <div className="lowerLearnMoreContainer" />
        </div>
        <p className="exploreText">Explore</p>
      </Link>
      <div className="dashboardLinkContainer">
        <div onClick={() => redirect()} className="dashLink" id="send">
          Send
        </div>
        <div className="greenBlock" />
        <div onClick={() => redirect()} className="dashLink" id="deliver">
          Deliver
        </div>
      </div>
    </div>
  );
}

//TODO @ End: Clean up console.log's and comments
