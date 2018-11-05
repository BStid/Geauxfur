const senderCtrl = require("./controllers/senderCtrl");
const userCtrl = require("./controllers/userCtrl");

module.exports = app => {
  /** SENDER */
  app.get("/api/userlocation", senderCtrl.getDriverCoordinates);
  app.get("/api/name/:driverId", senderCtrl.getDriverName);

  /** USER */
  app.get("/api/user", userCtrl.getUser);
  app.get("/api/history", userCtrl.getOrderHistory);
  app.post("/api/location", userCtrl.addLocation);
  app.post("/api/image", userCtrl.addImage);
  app.put("/api/profile", userCtrl.updateProfile);
};
