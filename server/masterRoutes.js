const senderCtrl = require("./controllers/senderCtrl");
const userCtrl = require("./controllers/userCtrl");

module.exports = app => {
  /** SENDER */
  app.get("/api/userlocation", senderCtrl.getDriverCoordinates);
  app.get("/api/name/:driverId", senderCtrl.getDriverName);
  app.get("/api/picture/:driverId", senderCtrl.getDriverPicture);
  app.get("/api/activedriver", senderCtrl.getActiveDriver);

  /** USER */
  app.get("/api/user", userCtrl.getUser);
  app.get("/api/history", userCtrl.getOrderHistory);
  app.get("/api/reviews", userCtrl.getReviews);
  app.post("/api/location", userCtrl.addLocation);
  app.post("/api/image", userCtrl.addImage);
  app.post("/api/review", userCtrl.addReview);
  app.put("/api/profile", userCtrl.updateProfile);
};
