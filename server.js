const express = require("express");
const passport = require('passport');

//importing api routes
const users = require("./routes/api/users");
const posts = require("./routes/api/posts");

//init app
const app = express();

//set PORT
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//setting passport middleware
app.use(passport.initialize());


//app routes
app.use("/api/users",users);
app.use("/api/posts",posts);

//set app to listen on port
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
