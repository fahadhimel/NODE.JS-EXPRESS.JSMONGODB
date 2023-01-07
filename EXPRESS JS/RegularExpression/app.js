const express = require("express");
const app = express();

app.get("/home/:id([0-9]{3})", (req, res) => {
  const id = req.params.id;
  res.send(`Thrre Numbar is... ${id}`);
});

app.get("/home/:id([0-9]+)", (req, res) => {
  const id = req.params.id;
  res.send(`ID is... ${id}`);
});

app.get("/home/:title([a-z]+)", (req, res) => {
  const title = req.params.title;
  res.send(`Title is... ${title}`);
});
app.get("/home/:title([a-zA-z0-9]+)", (req, res) => {
  const title = req.params.title;
  res.send(`TitleC is... ${title}`);
});
app.get("*", (req, res) => {
  res.status(404).send({
    message: "404 Data Not Found",
    statuscode: 404,
  });
});

module.exports = app;
