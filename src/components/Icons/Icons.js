import React from "react";
import Appliance from "./pictures/home-button.svg";
import Auto from "./pictures/sports-car.svg";
import Clothes from "./pictures/tshirt.svg";
import Electronics from "./pictures/electronics.svg";
import Food from "./pictures/food.svg";
import Service from "./pictures/man-walking.svg";
import Tools from "./pictures/tools.svg";
import Default from "./pictures/gopher_injured.png";
import "./Icons.css";

export default function Icons(props) {
  const { iconId } = props;
  switch (props.category) {
    case "appliance":
      return (
        <img
          src={Appliance}
          id={iconId}
          className="categoryIcon"
          alt="Category Icon"
        />
      );
    case "auto":
      return (
        <img
          src={Auto}
          id={iconId}
          className="categoryIcon"
          alt="Category Icon"
        />
      );
    case "clothes":
      return (
        <img
          src={Clothes}
          id={iconId}
          className="categoryIcon"
          alt="Category Icon"
        />
      );
    case "electronics":
      return (
        <img
          src={Electronics}
          id={iconId}
          className="categoryIcon"
          alt="Category Icon"
        />
      );
    case "food":
      return (
        <img
          src={Food}
          id={iconId}
          className="categoryIcon"
          alt="Category Icon"
        />
      );
    case "service":
      return (
        <img
          src={Service}
          id={iconId}
          className="categoryIcon"
          alt="Category Icon"
        />
      );
    case "tools":
      return (
        <img
          src={Tools}
          id={iconId}
          className="categoryIcon"
          alt="Category Icon"
        />
      );
    default:
      return (
        <img
          src={Default}
          id={iconId}
          className="categoryIcon"
          alt="Gopher Icon"
        />
      );
  }
}
