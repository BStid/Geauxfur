import React, { Component } from "react";
import DropzoneS3Uploader from "react-dropzone-s3-uploader";
require("dotenv").config();

export default class S3Uploader extends Component {
  handleFinishedUpload = info => {
    console.log("File uploaded with filename", info.filename);
    console.log("Access it on s3 at", info.fileUrl);
  };

  render() {
    const uploadOptions = {
      server: process.env.REACT_APP_SERVER,
      signingUrlQueryParams: { uploadType: "avatar" }
    };
    const s3Url = "https://geauxfurupload.s3.amazonaws.com";

    return (
      <DropzoneS3Uploader
        onFinish={this.handleFinishedUpload}
        s3Url={s3Url}
        maxSize={1024 * 1024 * 5}
        upload={uploadOptions}
        id="imageUploader"
      />
    );
  }
}
