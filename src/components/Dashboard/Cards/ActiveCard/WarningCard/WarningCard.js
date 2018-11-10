import React from "react";
import "../../css/CardsActive.css";

export default function WarningCard(props) {
  return (
    <div className="warningCard">
      <div className="warningText">
        Are You Sure You Wish to Cancel?
        <p>There may be an additional cancel fee in place if you do.</p>
      </div>
      <div className="areYouSureContainer">
        <button className="questionButton" onClick={() => props.closeWarning()}>
          Go Back
        </button>
        <button
          className="questionButton"
          onClick={() => props.cancelGeauxfur()}
        >
          {" "}
          Cancel Geauxfur{" "}
        </button>
      </div>
    </div>
  );
}
