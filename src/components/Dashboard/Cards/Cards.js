import React, { Component } from "react";
import { connect } from "react-redux";
import { updateInput } from "../../../redux/mainReducer";

import GeauxfurText from "./pictures/GeauxfurText.png";
import "./Cards.css";
import "./css/CardsActive.css";
import "../../Map/MapBoxOverWrite.css";
import Questions from "./Questions";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  isCardsActive() {
    const { cardsClass } = this.props.sender;
    if (cardsClass === "cardsActive") {
      return true;
    } else {
      return false;
    }
  }
  render() {
    const { cardsClass } = this.props.sender;
    return (
      <div className={cardsClass}>
        <div className={this.isCardsActive() ? "hidden" : "upperInfo"}>
          <div className={this.isCardsActive() ? "hidden" : "headerTitle"}>
            Take your delivery to the next level.
            <div className={this.isCardsActive() ? "hidden" : "headerTitle2"}>
              {" "}
              Just
              <img
                src={GeauxfurText}
                alt="Geauxfur"
                className={this.isCardsActive() ? "hidden" : "geauxfurText"}
              />
              it!
            </div>
            <div className={this.isCardsActive() ? null : "subHeaderDash"}>
              Search an address and send an item
            </div>
          </div>

          <Questions
            parseAddress={this.props.parseAddress}
            searchAddressInput={this.props.searchAddressInput}
            latitude={this.props.latitude}
            longitude={this.props.longitude}
            drawRoute={this.props.drawRoute}
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
