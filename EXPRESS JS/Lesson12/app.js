const express = require("express");
const app = express();


app.use(express.static("public"))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.use((req, res, next) => {
  res.status(404).send({ message: "404 Page Not Found" });
});

module.exports = app;
