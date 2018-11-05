import React, { Component } from "react";
import { connect } from "react-redux";
import { getDriverPicture } from "../../redux/senderReducer";
import defaultPicture from "../Nav/pictures/userDefault.png";
import StarRatings from "react-star-ratings";
import "./Reviews.css";

class AddReview extends Component {
  constructor() {
    super();
    this.state = {
      rating: 0
    };
  }

  changeRating(newRating) {
    console.log(newRating);
    this.setState({
      rating: newRating
    });
  }
  componentDidMount() {
    console.log(this.props.match.params.driverId);
    this.props.getDriverPicture(this.props.match.params.driverId);
  }
  render() {
    const { driverPicture } = this.props.sender;
    return (
      <div className="addReviewOuter">
        <div className="addReviewContainer">
          Your Driver
          {!driverPicture ? (
            <img
              src={defaultPicture}
              alt="User Profile"
              className="userIconReview"
            />
          ) : (
            <img
              src={driverPicture}
              alt="User Profile"
              className="userIconReview"
            />
          )}
          <StarRatings
            rating={this.state.rating}
            starRatedColor="gold"
            numberOfStars={5}
            name="rating"
            changeRating={rating => this.changeRating(rating)}
            starDimension="20px"
            starSpacing="5px"
            starHoverColor="gold"
            starRatedColor="gold"
          />
          <input
            type="text"
            placeholder="How was your experience today?"
            className="reviewInput"
          />
          <button className="addReviewButton"> Add Review </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getDriverPicture }
)(AddReview);
