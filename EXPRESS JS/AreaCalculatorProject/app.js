const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const userRouter = require("./routers/user.router");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/home", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.use("/user", userRouter);

app.use("*", (req, res) => {
  res.status(404).send(`<h1>404 Data not Found</h1>`);
});

module.exports = app;
