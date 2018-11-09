import React from "react";
import Cards from "../Cards/Cards";
import Map from "../../Map/Map";
import "../Dashboard.css";

export default function DashboardContent() {
  return (
    <div className="dashContentContainer">
      <Map />
    </div>
  );
}
