import React, { Component } from "react";
import DropzoneS3Uploader from "react-dropzone-s3-uploader";
import userDefaultPicture from "../Nav/pictures/userDefault.png";
import { connect } from "react-redux";
import { addImage } from "../../redux/mainReducer";
require("dotenv").config();

class S3Uploader extends Component {
  constructor() {
    super();
    this.state = {
      image: ""
    };
  }
  handleFinishedUpload = info => {
    console.log("File uploaded with filename", info.filename);
    console.log("Access it on s3 at", info.fileUrl);
    this.props.addImage(info.fileUrl);
    console.log(this.props.main.image);
    this.setState({ image: this.props.main.image });
  };

  render() {
    const uploadOptions = {
      server: process.env.REACT_APP_SERVER,
      signingUrlQueryParams: { uploadType: "avatar" }
    };
    const s3Url = `https://geauxfurupload.s3.amazonaws.com`;
    console.log("rendering...");
    return (
      <DropzoneS3Uploader
        onFinish={this.handleFinishedUpload}
        s3Url={s3Url}
        maxSize={1024 * 1024 * 5}
        upload={uploadOptions}
        id="imageUploader"
      >
        {!this.props.image_url ? (
          <img
            src={userDefaultPicture}
            alt="default image"
            className="profileImageDefault"
          />
        ) : (
          <img
            src={this.props.image_url}
            className="profileImage"
            alt="user profile image"
          />
        )}
      </DropzoneS3Uploader>
    );
  }
}
const mapStateToProps = state => state;
export default connect(
  mapStateToProps,
  { addImage }
)(S3Uploader);
