const express = require("express");
const app = express();
const userRouter = require("./routes/user.route");

app.use("/user", userRouter);

app.use("/home", (req, res) => {
  res.send("<h1>this is app home.</h1>");
});

app.use((req, res) => {
  res.status(404).send("<h1>404 Not a Valid URL</h1>");
});

module.exports = app;
