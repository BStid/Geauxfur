const addLocation = (req, res) => {
  const { userLong, userLat } = req.body;
  let db = req.app.get("db");
  db.add_location([userLong, userLat, req.user.auth_id]).then(response => {
    res.status(200).json(response);
  });
};

module.exports = {
  addLocation
};
