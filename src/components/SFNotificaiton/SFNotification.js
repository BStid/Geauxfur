import React from "react";
import "./SFNotification.css";

export default function SFNotification(props) {
  const { showNotification, isSuccessful } = props;
  //TODO WHEN YOU GET BACK: Finish up Update Notification - - Add Transition, add text to Notifcation, add toggle to "edit profile" button to move Notification
  //Style the notification. TranslateY.
  return (
    <div
      className={showNotification ? "notificationOuter" : "hideNotification"}
    >
      <div className={isSuccessful ? "success" : "failure"} />
    </div>
  );
}
