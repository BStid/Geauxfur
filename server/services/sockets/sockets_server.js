const ioApp = require("http").createServer();
const io = require("socket.io")(ioApp);
const ioPort = 3100;

module.exports = app => {
  io.on("connection", socket => {
    console.log("Socket Id" + socket.id);
  });
  io.listen(ioPort);
  console.log(`Sockets listening on port ${ioPort}`);
};
