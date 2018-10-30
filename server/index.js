require("dotenv").config();
const express = require("express"),
  app = express(),
  { SESSION_SECRET: secret, CONNECTION_STRING, PORT } = process.env,
  port = PORT || 3006,
  session = require("express-session"),
  massive = require("massive"),
  { json } = require("body-parser"),
  cors = require("cors"),
  authCtrl = require("./controllers/authCtrl"),
  masterRoutes = require("./masterRoutes");

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
