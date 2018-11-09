import React, { Component } from "react";
import { connect } from "react-redux";
import { getDriverPicture } from "../../redux/senderReducer";
import { updateInput, addReview } from "../../redux/mainReducer";
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
    this.setState({
      rating: newRating
    });
  }
  addReview(review, rating, driverId) {
    this.props.addReview(review, rating, driverId);
  }
  componentDidMount() {
    this.props.getDriverPicture(this.props.match.params.driverId);
  }
  render() {
    const { driverPicture } = this.props.sender;
    const { reviewInput } = this.props.main;
    const { rating } = this.state;
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
            name="reviewInput"
            onChange={e => this.props.updateInput(e)}
          />
          <button
            className="addReviewButton"
            onClick={() =>
              this.addReview(
                reviewInput,
                rating,
                this.props.match.params.driverId
              )
            }
          >
            {" "}
            Add Review{" "}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getDriverPicture, updateInput, addReview }
)(AddReview);
