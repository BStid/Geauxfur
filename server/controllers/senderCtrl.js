const getDriverCoordinates = (req, res) => {
  console.log(req.session);
  let db = req.app.get("db");
  db.get_driver_location().then(response => {
    res.status(200).json(response);
  });
};

const getDriverName = (req, res) => {
  console.log(req.params.driverId);
  let db = req.app.get("db");
  db.get_driver_name(req.params.driverId).then(response => {
    res.status(200).json(response);
  });
};
const getDriverPicture = (req, res) => {
  let db = req.app.get("db");
  db.get_driver_picture(req.params.driverId)
    .then(response => {
      console.log(response);
      res.status(200).json(response);
    })
    .catch(err => res.status(500).send(err => console.log("Error", err)));
};
module.exports = {
  getDriverCoordinates,
  getDriverName,
  getDriverPicture
};
