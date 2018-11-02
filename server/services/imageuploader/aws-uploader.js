// const Express = require("express");
// const app = new Express();
// const aws = require("aws-sdk");

// app.use(Express.static("public"));

// app.get("/upload", (req, res) => {
//   upload(req.query)
//     .then(url => {
//       res.json({ url: url });
//     })
//     .catch(e => {
//       console.log(e);
//     });
// });

// app.listen(port, error => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.info("listen: ", port);
//   }
// });

// const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
// const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
// const BUCKET_NAME = process.env.BUCKET_NAME;

// aws.config.update({
//   accessKeyId: AWS_ACCESS_KEY_ID,
//   secretAccessKey: AWS_SECRET_ACCESS_KEY
// });

// function upload(file) {
//   const s3 = new aws.S3();
//   const params = {
//     Bucket: BUCKET_NAME,
//     Key: file.filename,
//     Expires: 60,
//     ContentType: file.filetype
//   };

//   return new Promise((resolve, reject) => {
//     s3.getSignedUrl("putObject", params, (err, url) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(url);
//     });
//   });
// }
