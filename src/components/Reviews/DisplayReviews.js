import React from "react";
import DefaultImage from "../Nav/pictures/userDefault.png";
import "./Reviews.css";

export default function DisplayReviews(props) {
  const { value } = props;
  return (
    <div className="reviewsContainer">
      {!value.image_url ? (
        <img
          src={DefaultImage}
          alt="User Profile Picture"
          className="userIconReview"
        />
      ) : (
        <img
          src={value.image_url}
          alt="User Profile Picture"
          className="userIconReview"
        />
      )}
      <div className="reviewsTitle">{value.first_name}</div>
      <div className="reviewsTimeStamp">{value.time_submitted}</div>
      <div className="reviewText">{value.text}</div>
    </div>
  );
}
