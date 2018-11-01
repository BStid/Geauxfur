const senderCtrl = require("./controllers/senderCtrl");
const userCtrl = require("./controllers/userCtrl");

module.exports = app => {
  /** SENDER */
  app.get("/api/userlocation", senderCtrl.getDriverCoordinates);

  /** CART */
  //   app.post("/api/cart", cartCtrl.addToCart);
  //   app.get("/api/cart", cartCtrl.getCart);
  /** USER */
  app.post("/api/location", userCtrl.addLocation);
};
