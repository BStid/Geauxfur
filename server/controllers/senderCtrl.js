const getDriverCoordinates = (req, res) => {
  console.log(req.session);
  let db = req.app.get("db");
  db.get_driver_location().then(response => {
    res.status(200).json(response);
  });
};

module.exports = {
  getDriverCoordinates
};
