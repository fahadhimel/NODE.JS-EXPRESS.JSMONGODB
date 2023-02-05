const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// require router
const userRouter = require("./routes/users.router");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//home route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// use router
app.use("/users", userRouter);

//route not found
app.use((req, res, next) => {
  res.status(404).json({ message: "route not found" });
});
//server error
app.use((err, req, res, next) => {
  res.status(500).json({ message: "something broke" });
});

module.exports = app;
