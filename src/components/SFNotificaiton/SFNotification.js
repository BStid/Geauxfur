import React from "react";
import "./SFNotification.css";

export default function SFNotification(props) {
  const { showNotification, isSuccessful } = props;
  return (
    <div
      className={showNotification ? "notificationOuter" : "hideNotification"}
    >
      <div className={isSuccessful ? "success" : "failure"}>
        {isSuccessful
          ? "Update Successful!"
          : "Error. Please refresh and try again."}
      </div>
    </div>
  );
}
