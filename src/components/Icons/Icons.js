import React from "react";
import Appliance from "./pictures/home-button.svg";
import Auto from "./pictures/sports-car.svg";
import Clothes from "./pictures/tshirt.svg";
import Electronics from "./pictures/electronics.svg";
import Food from "./pictures/food.svg";
import Service from "./pictures/man-walking.svg";
import Tools from "./pictures/tools.svg";
import Default from "./pictures/gopher_badge.png";
import "./Icons.css";

export default function Icons(props) {
  switch (props.category) {
    case "appliance":
      return (
        <img src={Appliance} className="categoryIcon" alt="Category Icon" />
      );
    case "auto":
      return <img src={Auto} className="categoryIcon" alt="Category Icon" />;
    case "clothes":
      return <img src={Clothes} className="categoryIcon" alt="Category Icon" />;
    case "electronics":
      return (
        <img src={Electronics} className="categoryIcon" alt="Category Icon" />
      );
    case "food":
      return <img src={Food} className="categoryIcon" alt="Category Icon" />;
    case "service":
      return <img src={Service} className="categoryIcon" alt="Category Icon" />;
    case "tools":
      return <img src={Tools} className="categoryIcon" alt="Category Icon" />;
    default:
      return <img src={Default} className="categoryIcon" alt="Gopher Icon" />;
  }
}
