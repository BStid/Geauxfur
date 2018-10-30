const senderCtrl = require("./controllers/senderCtrl");

module.exports = app => {
  /** SENDER */
  app.get("/api/userlocation", senderCtrl.getDriverCoordinates);

  /** CART */
  //   app.post("/api/cart", cartCtrl.addToCart);
  //   app.get("/api/cart", cartCtrl.getCart);
  /** USER */
};
