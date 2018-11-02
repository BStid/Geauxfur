import React, { Component } from "react";
import { connect } from "react-redux";
import userDefaultPicture from "../Nav/pictures/userDefault.png";
import S3Uploader from "./S3Uploader";
import { Link } from "react-router-dom";
import { getUser } from "../../redux/mainReducer";
import "./Profile.css";

class Profile extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    const { userInfo } = this.props.main;

    return (
      <div className="profileOuter">
        <div className="profileCard">
          <div className="profileImageContainer">
            {!userInfo.image_url ? (
              <img
                src={userDefaultPicture}
                alt="default image"
                className="profileImage"
              />
            ) : (
              <img
                src={userInfo.image_url}
                className="profileImage"
                alt="user profile image"
              />
            )}

            <S3Uploader />
          </div>
          <div className="profileCardText">
            {console.log(userInfo.first_name)}
            <p id="helpUploadText"> Click or Drag a Picture to Upload</p>
            <br />
            {!userInfo.first_name ? (
              <h1 className="profileName">User Profile</h1>
            ) : (
              <h1 className="profileName">{userInfo.first_name}</h1>
            )}
            {!userInfo.last_name ? (
              <div />
            ) : (
              <h1 className="profileName">{userInfo.last_name}</h1>
            )}
            <Link to="/dashboard/editinfo" className="editProfileLink">
              Edit Profile Information
            </Link>
          </div>
        </div>

        <div className="profileInfo">
          <div className="shortHistory" />
          <div className="reviewContainer" />
          <div className="badgeContainer" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getUser }
)(Profile);
