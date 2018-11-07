import React, { Component } from "react";
import { connect } from "react-redux";
import { updateInput } from "../../../redux/mainReducer";
import GeauxfurText from "./pictures/GeauxfurText.png";
import "./Cards.css";
import "../../Map/MapBoxOverWrite.css";
import Questions from "./Questions";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="cardsContainer">
        <div className="upperInfo">
          <div className="headerTitle">
            Take your delivery to the next level.
            <div className="headerTitle2">
              {" "}
              Just
              <img src={GeauxfurText} alt="Geauxfur" className="geauxfurText" />
              it!
            </div>
            <div className="subHeaderDash">
              Search an address and send an item
            </div>
          </div>
          <Questions
            displayGeoCoder={this.props.displayGeoCoder}
            addGeoCoder={this.props.addGeoCoder}
          />
        </div>
        <div className="mainInfo" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { updateInput }
)(Cards);
