import React, { Component } from "react";
import { connect } from "react-redux";
import { updateInput } from "../../../redux/mainReducer";
import { getAddressLatLong } from "../../../redux/senderReducer";
import Icons from "../../Icons/Icons";
import "./Cards.css";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      questions: [
        <div className="questionDiv">
          Where would you like to ship?
          <div className="fillerDiv">
            {
              //Input is in the npm mapboxgl-geocode package. I am rendering their input for this question
            }
          </div>
          <button
            id="firstQuestion"
            className="questionButton"
            onClick={() => this.removeInput()}
          >
            {" "}
            Next{" "}
          </button>
        </div>,
        <div className="questionDiv">
          What type of item will you be sending?
          <select
            name="itemType"
            className="searchBarDash"
            placeholder="What type of item will you be sending?"
            onChange={e => this.props.updateInput(e)}
          >
            <option value="appliance">Appliance</option>
            <option value="auto">Auto</option>
            <option value="clothes">Clothes</option>
            <option value="electronics">Electronics</option>
            <option value="food">Food</option>
            <option value="service">Service</option>
            <option value="tools">Tools</option>
          </select>
          <button className="questionButton" onClick={() => this.addInput()}>
            Back
          </button>
          <button
            className="questionButton"
            onClick={() => this.nextQuestion()}
          >
            Final Question
          </button>
        </div>,
        <div className="questionDiv">
          How heavy would you classify this item?
          <form className="heavyQuestion">
            <input type="radio" name="weightInput" value={2} />
            Light
            <br />
            <input type="radio" name="weightInput" value={4} /> Medium
            <br />
            <input type="radio" name="weightInput" value={6} /> Heavy
          </form>
          <button
            className="questionButton"
            onClick={() => this.previousQuestion()}
          >
            Back
          </button>
          <button
            className="questionButton"
            onClick={() => this.submitAnswers()}
          >
            {" "}
            Submit{" "}
          </button>
        </div>,
        <div className="hidden" />
      ]
    };
  }
  async parseAddress() {
    const { searchAddressInput } = this.props;
    const urlAddress = searchAddressInput
      .replace(/\W+/g, " ")
      .split(" ")
      .join("%20");
    await this.props.getAddressLatLong(urlAddress);
  }
  addInput() {
    this.previousQuestion();

    let inputBar = document.querySelector(".mapboxgl-ctrl-geocoder");
    inputBar.classList.remove("mapboxgl-ctrl-geocoder-hide");
  }

  removeInput() {
    this.nextQuestion();

    let inputBar = document.querySelector(".mapboxgl-ctrl-geocoder");
    inputBar.classList.add("mapboxgl-ctrl-geocoder-hide");
  }
  nextQuestion() {
    this.setState({ count: this.state.count + 1 });
  }
  previousQuestion() {
    this.setState({ count: this.state.count - 1 });
  }

  findDistance(lat1, lon1, lat2, lon2) {
    if (lat1 == lat2 && lon1 == lon2) {
      return 0;
    } else {
      var radlat1 = (Math.PI * lat1) / 180;
      var radlat2 = (Math.PI * lat2) / 180;
      var theta = lon1 - lon2;
      var radtheta = (Math.PI * theta) / 180;
      var dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = (dist * 180) / Math.PI;
      dist = dist * 60 * 1.1515;
      console.log("miles", dist);
      return dist;
    }
  }
  async submitAnswers() {
    const { latitude, longitude } = this.props;
    const { itemType, weightInput } = this.props.main;
    await this.parseAddress();
    const distance = await this.findDistance(
      this.props.sender.addressLat,
      this.props.sender.addressLong,
      latitude,
      longitude
    );
    console.log("distance is ", distance);
    const price = distance * weightInput;
    console.log("price is ", price);
    await this.displayTotal(price, distance, itemType);
  }

  displayTotal(price, distance, itemType) {
    console.log("displayTotal called...");
    return (
      <div className="totalCard">
        <Icons category={itemType} />
        <div className="distanceTotal">{distance}</div>
        <div className="totalPrice">{price}</div>
      </div>
    );
  }

  render() {
    const { count, questions } = this.state;

    const displayQuestions = questions.map((value, index) => {
      if (count === index) {
        return value;
      }
    });
    return <div className="questionContainer">{displayQuestions}</div>;
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { updateInput, getAddressLatLong }
)(Cards);
