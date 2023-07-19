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

  socket.on('setting_game_to_ready', (data) => {
    console.log('setting game to ready')
    socket.broadcast.emit('game_ready', true);
  })

  socket.on('sending_user', (data) => {
    console.log(data);
    const playerData = {
      name: data.name,
      points: 0,
      id: data.id,
    }
    console.log(playerData);
    socket.broadcast.emit('receive_user', playerData);
  });

  // const times = [];

  socket.on('buzzing', (data) => {
    console.log(`User ${data.id} buzzed at:`, data);
    socket.broadcast.emit('buzzed_in', data);
  })

});

server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
