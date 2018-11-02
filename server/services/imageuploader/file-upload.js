// require("dotenv").config();

// const multer = require("multer");
// const multerS3 = require("multer-s3");

// const s3 = new aws.S3();

// const upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: "geauxfurupload",
//     acl: "public-read",
//     metadata: function(req, file, cb) {
//       cb(null, { fieldName: file.fieldname });
//     },
//     key: function(req, file, cb) {
//       cb(null, Date.now().toString());
//     }
//   })
// });

// module.export = { upload };
