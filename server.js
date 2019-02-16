const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");

//db key
const db = require("./server/config/keys").mongoURI;

//importing api routes
const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
// const user = require("./server/models/user")

//mLab connection
mongoose
  .connect(db)
  .then(() => console.log("Connected to Mongo"))
  .catch(err => console.log(err));

//init app
const app = express();

//set PORT
const PORT = process.env.PORT || 3001;

//socket dependencies
var path = require("path");
var server = require("http").createServer(app);
var io = require("socket.io")(server);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
);

//setting passport middleware
app.use(passport.initialize());

require("./server/config/passport")(passport);

//app routes
app.use("/api/users", users);
app.use("/api/posts", posts);

//set app to listen on port
server.listen(PORT, () => {
  console.log("Server listening at port %d", PORT);
});

// Chatroom

var numUsers = 0;

io.on("connection", socket => {
  var addedUser = false;

  // when the client emits 'new message', this listens and executes
  socket.on("new message", data => {
    // we tell the client to execute 'new message'
    socket.broadcast.emit("new message", {
      username: socket.username,
      message: data
    });
  });

  // when the client emits 'add user', this listens and executes
  socket.on("add user", username => {
    if (addedUser) return;

    // we store the username in the socket session for this client
    socket.username = username;
    ++numUsers;
    addedUser = true;
    socket.emit("login", {
      numUsers: numUsers
    });
    // echo globally (all clients) that a person has connected
    socket.broadcast.emit("user joined", {
      username: socket.username,
      numUsers: numUsers
    });
  });

  // when the client emits 'typing', we broadcast it to others
  socket.on("typing", () => {
    socket.broadcast.emit("typing", {
      username: socket.username
    });
  });

  // when the client emits 'stop typing', we broadcast it to others
  socket.on("stop typing", () => {
    socket.broadcast.emit("stop typing", {
      username: socket.username
    });
  });

  // when the user disconnects.. perform this
  socket.on("disconnect", () => {
    if (addedUser) {
      --numUsers;

      // echo globally that this client has left
      socket.broadcast.emit("user left", {
        username: socket.username,
        numUsers: numUsers
      });
    }
  });
});

module.exports = app;
