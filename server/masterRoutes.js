const senderCtrl = require("./controllers/senderCtrl");
const userCtrl = require("./controllers/userCtrl");

module.exports = app => {
  /** SENDER */
  app.get("/api/userlocation", senderCtrl.getDriverCoordinates);

  /** USER */
  app.post("/api/location", userCtrl.addLocation);
  app.post("/api/image", userCtrl.addImage);
  app.get("/api/user", userCtrl.getUser);
};
