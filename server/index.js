require("dotenv").config();
const express = require("express");
const app = express();
const {
  SESSION_SECRET: secret,
  CONNECTION_STRING,
  PORT,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY
} = process.env;
const port = PORT || 3006;
const session = require("express-session");
const massive = require("massive");
const { json } = require("body-parser");
const cors = require("cors");
const authCtrl = require("./controllers/authCtrl");
const masterRoutes = require("./masterRoutes");
const AWS = require("aws-sdk");
const configureRoutes = require("./services/stripe/stripe");

app.use(json());
app.use(cors());
app.use(
  session({
    secret,
    saveUninitialized: true,
    resave: false,
    cookie: {
      maxAge: 1209600000 // two weeks
    }
  })
);

configureRoutes(app);

AWS.config.update({
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY
});
app.use(
  "/s3",
  require("react-s3-uploader/s3router")({
    bucket: process.env.BUCKET_NAME,
    region: "us-east-2",
    headers: { "Access-Control_Allow-Origin": "*" },
    ACL: "public-read"
  })
);

massive(CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
  //     dbInstance
  //       .alter_table()
  //       .then(response => {
  //         console.log(response);
  //       })
  //       .catch(e => console.log(e));
  //   })
  //   .catch(error => {
  //     console.log(error);
});

//Express.static to join the files to build ---- when ready, run "npm build"
/*
app.use(express.static(`${__dirname}/../build`));
*/

authCtrl(app);
masterRoutes(app);

app.listen(port, () => console.log(`Server now running on port ${port}`));
