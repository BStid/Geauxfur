import React from "react";

export default function ProfileInfo(props) {
  return (
    <div className={props.infoClass}>
      <div className="sectionContainer">
        <h3 className="categorySelector">DOB: </h3>
      </div>
      <div className="sectionContainer">
        <h3 className="categorySelector">Email: </h3>
      </div>
      <div className="sectionContainer">
        <h3 className="categorySelector">Phone: </h3>
      </div>
      <div className="sectionContainer">
        <h3 className="categorySelector">Gender: </h3>
      </div>
    </div>
  );
}
