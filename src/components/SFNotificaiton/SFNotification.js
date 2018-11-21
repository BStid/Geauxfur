import React from "react";
import "./SFNotification.css";

export default function SFNotification(props) {
  const { showNotification, isSuccessful } = props;
  //TODO WHEN YOU GET BACK: Test Notification Success/Failure when making the call to the database.
  //Style the notification. TranslateY.
  return (
    <div
      className={showNotification ? "notificationOuter" : "hideNotification"}
    >
      <div className={isSuccessful ? "success" : "failure"} />
    </div>
  );
}
