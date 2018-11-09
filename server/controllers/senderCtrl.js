const getDriverCoordinates = (req, res) => {
  let db = req.app.get("db");
  db.get_driver_location().then(response => {
    res.status(200).json(response);
  });
};
const getActiveDriver = (req, res) => {
  let db = req.app.get("db");
  db.get_active_driver().then(response => {
    res.status(200).json(response);
  });
};
const getDriverName = (req, res) => {
  let db = req.app.get("db");
  db.get_driver_name(req.params.driverId).then(response => {
    res.status(200).json(response);
  });
};
const getDriverPicture = (req, res) => {
  let db = req.app.get("db");
  db.get_driver_picture(req.params.driverId)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => res.status(500).send(err => console.log("Error", err)));
};
module.exports = {
  getDriverCoordinates,
  getDriverName,
  getDriverPicture,
  getActiveDriver
};
