import React, { Component } from "react";
import { connect } from "react-redux";
import { updateInput } from "../../../redux/mainReducer";

import "./Cards.css";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      questions: [
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
          <button
            className="questionButton"
            onClick={() => this.nextQuestion()}
          >
            {" "}
            Next{" "}
          </button>
        </div>,
        <div className="questionDiv">
          How heavy would you classify this item?
          <form className="heavyQuestion">
            <input type="radio" name="weightInput" value={1} />
            Light
            <br />
            <input type="radio" name="weightInput" value={2} /> Medium
            <br />
            <input type="radio" name="weightInput" value={3} /> Heavy
          </form>
          <button
            className="questionButton"
            onClick={() => this.previousQuestion()}
          >
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
          Where would you like to ship?
          <input
            type="text"
            placeholder="Input an Address"
            className="searchBarDash"
            name="search"
            onChange={e => this.props.updateInput(e)}
          />
          <button
            className="questionButton"
            onClick={() => this.previousQuestion()}
          >
            Back
          </button>
        </div>
      ]
    };
  }
  nextQuestion() {
    console.log("Next Question Clicked...");
    this.setState({ count: this.state.count + 1 });
  }
  previousQuestion() {
    console.log("Previous Question Clicked...");
    this.setState({ count: this.state.count - 1 });
  }
  submitAnswers(address, itemType, weight) {}
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
  { updateInput }
)(Cards);
