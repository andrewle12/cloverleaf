const express = require("express");
const routes = require("./routes");
const db = require("pg");
const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const app = express();
const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/users",users);
app.use("/api/posts",posts);

app.listen(PORT, function() {
  console.log(`App now running on port ${PORT}`);
});
