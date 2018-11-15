import React, { Component } from "react";
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
          <div className="exploreSubOne" />
        </div>
        <div className="floaterContainer">
          <div className="floaterOne" />
          <p>
            Here is some fill text so that I can check out how it looks on the
            page. That was the first sentence, this is the second one. I hope
            this is long enough! Here is some extra text to fill up some
            space...
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
