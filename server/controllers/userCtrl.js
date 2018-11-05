//GET
const getUser = (req, res) => {
  let db = req.app.get("db");
  db.get_user(req.user.auth_id).then(response => {
    res.status(200).json(response);
  });
};

const getOrderHistory = (req, res) => {
  let db = req.app.get("db");
  db.get_order_history(req.user.id).then(response => {
    res.status(200).json(response);
  });
};

//POST
const addLocation = (req, res) => {
  const { userLong, userLat } = req.body;
  let db = req.app.get("db");
  db.add_location([userLong, userLat, req.user.auth_id]).then(response => {
    res.status(200).json(response);
  });
};

const addImage = (req, res) => {
  console.log(req.body);
  let db = req.app.get("db");
  const { imageUrl } = req.body;
  db.add_image([imageUrl, req.user.auth_id])
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => res.status(500).send(err => console.log("Error", err)));
};

const updateProfile = (req, res) => {
  let db = req.app.get("db");
  const {
    dobInput,
    emailInput,
    phoneInput,
    firstNameInput,
    lastNameInput,
    genderInput
  } = req.body;
  db.update_user([
    dobInput,
    emailInput,
    phoneInput,
    genderInput,
    firstNameInput,
    lastNameInput,
    req.user.auth_id
  ])
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => res.status(500).send(err => console.log("Oops", err)));
};
module.exports = {
  addLocation,
  addImage,
  getUser,
  updateProfile,
  getOrderHistory
};
