import React, { Component } from "react";
import GeauxfurText from "../Dashboard/Cards/pictures/GeauxfurText.png";
import "./Explore.css";

class Explore extends Component {
  constructor() {
    super();
    this.state = {
      sideBarClass: "zero"
    };
  }
  trackScroll = () => {
    console.log(window.scrollY);
    let scrollHeight = document.querySelector(".exploreOuter").scrollHeight;
    let scroll = Math.floor((window.scrollY / scrollHeight) * 100);
    console.log("Here it is", scroll);
    if (scroll < 10) {
      this.setState({ sideBarClass: "zero" });
    } else if (scroll >= 10 && scroll < 20) {
      this.setState({ sideBarClass: "twenty" });
    } else if (scroll >= 20 && scroll < 25) {
      this.setState({ sideBarClass: "forty" });
    } else if (scroll >= 25 && scroll < 30) {
      this.setState({ sideBarClass: "sixty" });
    } else if (scroll >= 30 && scroll < 35) {
      this.setState({ sideBarClass: "eighty" });
    } else if (scroll >= 35) {
      this.setState({ sideBarClass: "zero" });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.trackScroll);
  }

  render() {
    return (
      <div className="exploreOuter" id="outer">
        <div className={this.state.sideBarClass} />
        <div className="exploreContainer">
          <div className="exploreSubOne">
            {/* <img src={GeauxfurText} alt="Geauxfur" id="geauxfurTextLogo" /> */}
          </div>
        </div>
        <div className="floaterContainer">
          <div className="floaterOne" />
          <p>
            Geauxfur aims to keep you and your belongs as safe as possible. From
            the moment you Geauxfur your item, all parties involved in the
            shipment process are tracked and monitored until the item has
            reached its destination...
          </p>
          <div className="floaterTwo" />
        </div>
        <div className="exploreContainer">
          <div className="exploreSubOne" />
        </div>
      </div>
    );
  }
}
export default Explore;
