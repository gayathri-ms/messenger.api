const express = require("express");
const { Server } = require("socket.io");
const { createServer } = require("http");
const cors = require("cors");

const app = express();
app.use(cors());
const port = 8000;

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("connection is established id : ", socket.id);
  socket.on("message", (data) => {
    console.log("message event : ", data.msg);
  });
});

httpServer.listen(port, () => {
  console.log(`server listenning on port ${port}`);
});
