const express = require("express");
const path = require("path");
const routes = require("./routes");
const db = require("pg");
const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const app = express();
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/users",users);
app.use("/api/posts",posts);


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
