const express = require("express");
const routes = require("./routes");
const db = require("pg");
const logger = require("morgan");

const app = express();
const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

app.listen(PORT, function() {
  console.log(`App now running on port ${PORT}`);
});
