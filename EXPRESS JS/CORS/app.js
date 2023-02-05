const express = require("express");
const damyData = require("./models/damyData");
const app = express();
const cors = require("cors");

app.use(cors())

app.use("/data", (req, res) => {
  res.send({damyData});
});

app.use((req, res) => {
  res.status(404).send("<h1>404 Not a Valid URL</h1>");
});

module.exports = app;
