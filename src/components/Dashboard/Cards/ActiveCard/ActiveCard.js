import React, { Component } from "react";
import { connect } from "react-redux";
import { updateInput } from "../../../../redux/mainReducer";
import {
  updateCardsClass,
  getDriverPicture,
  getActiveDriver,
  cancelGeauxfur
} from "../../../../redux/senderReducer";
import defaultPicture from "../../../Nav/pictures/userDefault.png";
import Timer from "simple-react-timer";
import Icons from "../../../Icons/Icons";
import WarningCard from "./WarningCard/WarningCard";
import "../../../Icons/Icons.css";
import "../css/CardsActive.css";

class ActiveCard extends Component {
  constructor() {
    super();
    this.state = {
      showWarning: false
    };
    this.promptCancel = this.promptCancel.bind(this);
    this.cancelGeauxfur = this.cancelGeauxfur.bind(this);
  }

  promptCancel() {
    if (!this.state.showWarning) {
      this.setState({ showWarning: true });
    } else {
      this.setState({ showWarning: false });
    }
  }
  cancelGeauxfur() {
    this.props.cancelGeauxfur(["cancelActiveDriver", "cardsContainer"]);
    this.props.addGeoCoder();
    this.setState({ showWarning: false });
  }
  componentDidMount() {
    console.log(this.props.sender);
  }
  render() {
    const { showWarning } = this.state;
    const { activeDriver, panelClass, activeDriverCard } = this.props.sender;
    const { itemType } = this.props.main;
    return (
      <div className={panelClass}>
        <div className={activeDriverCard}>
          <Icons iconId="activeIcon" category={itemType} />
          On Route...
          {!activeDriver.image_url ? (
            <img
              src={defaultPicture}
              alt="User Profile"
              className="userIconActive"
              onClick={() => console.log(activeDriver)}
            />
          ) : (
            <img
              src={activeDriver.image_url}
              alt="User Profile"
              className="userIconActive"
            />
          )}
          <p>{activeDriver.first_name}</p>
          <Timer countdown />
          <button className="cancelButton" onClick={() => this.promptCancel()}>
            {" "}
            Cancel Geauxfur
          </button>
        </div>

        {showWarning ? (
          <WarningCard
            cancelGeauxfur={this.cancelGeauxfur}
            closeWarning={this.promptCancel}
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  {
    updateInput,
    updateCardsClass,
    getDriverPicture,
    getActiveDriver,
    cancelGeauxfur
  }
)(ActiveCard);
