const express = require("express");
const app = express();

const myMiddleWare = (req, res, next) => {
  console.log("Middleware Founction");
  req.justTime = new Date(Date.now());
  next();
};

app.get("/", (req, res) => {
  console.log("Home Route");
  res.send("i am home page");
});
app.get("/about", myMiddleWare, (req, res) => {
  console.log("About Route");
  res.send("i am About page");
});

app.use((req, res, next) => {
  res.status(404).send({
    message: "404 page Not Found",
    statusCode: 404,
  });
});

module.exports = app;
