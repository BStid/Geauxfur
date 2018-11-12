import React, { Component } from "react";
import { connect } from "react-redux";
import { updateInput } from "../../../redux/mainReducer";
import {
  getAddressLatLong,
  updateCardsClass,
  updateActivePanel
} from "../../../redux/senderReducer";
import Icons from "../../Icons/Icons";
import Payment from "../../Payment/Payment";
import "../../Icons/Icons.css";
import "./css/Cards.css";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayTotal: "hidden",
      iconId: "totalPage",
      count: 0,
      questions: [
        <div className="questionDiv">
          Where would you like to ship?
          <div className="fillerDiv">
            {
              //Input is in the npm mapboxgl-geocode package. I am rendering their input for this question.
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
            <option value="null">Choose an Option...</option>
            <option value="clothes">Clothes</option>
            <option value="food">Food</option>
            <option value="auto">Auto</option>
            <option value="tools">Tools</option>
            <option value="electronics">Electronics</option>
            <option value="appliance">Appliance</option>
            <option value="service">Service</option>
          </select>
          <div className="buttonContainer">
            <button className="questionButton" onClick={() => this.addInput()}>
              Back
            </button>
            <button
              className="questionButton"
              onClick={() => this.nextQuestion()}
            >
              Final Question
            </button>{" "}
          </div>
        </div>,
        <div className="questionDiv">
          How heavy would you classify this item?
          <form
            className="heavyQuestion"
            onChange={e => this.props.updateInput(e)}
          >
            <input type="radio" name="weightInput" value={2} />
            Light
            <br />
            <input type="radio" name="weightInput" value={3.5} /> Medium
            <br />
            <input type="radio" name="weightInput" value={5} /> Heavy
          </form>
          <div className="buttonContainer">
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
          </div>
        </div>,
        <Payment />,
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
    if (lat1 === lat2 && lon1 === lon2) {
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

      return Math.round(dist * 100) / 100;
    }
  }
  async submitAnswers() {
    await this.parseAddress();
    this.setState({ count: this.state.count + 1, displayTotal: "totalCard" });
  }
  async callGeauxfur() {
    const { updateCardsClass, drawRoute, updateActivePanel } = this.props;
    await updateCardsClass("cardsActive");
    await drawRoute();
    await updateActivePanel(["activeRoute", "activeDriverContainer-left"]);
    this.setState({ displayTotal: "hidden" });
  }

  reset() {
    let inputBar = document.querySelector(".mapboxgl-ctrl-geocoder");
    inputBar.classList.remove("mapboxgl-ctrl-geocoder-hide");
    this.setState({
      count: 0,
      displayTotal: "hidden"
    });
  }

  componentDidMount() {
    window.addEventListener(
      "keydown",
      event => {
        if (event.keyCode === 13) {
          this.removeInput();
        }
      },
      true
    );
  }

  render() {
    const { count, questions, displayTotal, iconId } = this.state;
    const { weightInput, itemType } = this.props.main;
    const { cardsClass } = this.props.sender;
    const { latitude, longitude } = this.props;

    const displayQuestions = questions.map((value, index) => {
      if (count === index) {
        return value;
      }
      return null;
    });
    const distance = this.findDistance(
      this.props.sender.addressLat,
      this.props.sender.addressLong,
      latitude,
      longitude
    );

    const price = Math.round((distance * weightInput * 100) / 100);

    return (
      <div
        className={cardsClass === "cardsContainer" ? "questionContainer" : null}
      >
        {displayQuestions}
        <div className={displayTotal}>
          <Icons category={itemType} iconId={iconId} /> X
          <div className="distanceTotal">
            <p>Miles</p>
            {distance}
          </div>{" "}
          =
          <div className="totalPrice">
            <p>Price</p>${price}
          </div>
          <button
            className="questionButton"
            id="finalButton"
            onClick={() => this.reset()}
          >
            Restart
          </button>
          <button
            id="finalButton"
            className="questionButton"
            onClick={() => this.callGeauxfur()}
          >
            Call a Geauxfur
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  {
    updateInput,
    getAddressLatLong,
    updateCardsClass,
    updateActivePanel
  }
)(Cards);
