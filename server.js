const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ["GET", "POST"],
  }
});
const port = 5001;

io.on("connection", (socket) => {
  console.log(`User connected ${socket.id}`);

  socket.on('sending_user', (data) => {
    // console.log(data);
    const playerData = {
      name: data.name,
      points: 0,
      id: socket.id,
    }
    console.log(playerData);
    socket.broadcast.emit('receive_user', playerData);
  })
});

server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
