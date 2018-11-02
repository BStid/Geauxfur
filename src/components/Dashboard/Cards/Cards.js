import React, { Component } from "react";
import { connect } from "react-redux";
import AnimalIcon from "./pictures/heart.svg";
import ApplianceIcon from "./pictures/house.svg";
import ToolsIcon from "./pictures/lift.svg";
import MiscIcon from "./pictures/man-walking.svg";
import FoodIcon from "./pictures/food.svg";

import "./Cards.css";

class Cards extends Component {
  constructor() {
    super();
    this.state = {
      icons: [ApplianceIcon, FoodIcon, AnimalIcon, MiscIcon, ToolsIcon]
    };
  }

  render() {
    const { icons } = this.state;
    let iconRow = icons.map((value, index) => {
      return <img src={value} alt="category" className="categoryIcons" />;
    });

    return (
      <div className="cardsContainer">
        <div className="upperInfo">
          <div className="headerTitle" />
          <div className="categoryContainer">{/* {iconRow} */}</div>
        </div>
        <div className="mainInfo" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Cards);
