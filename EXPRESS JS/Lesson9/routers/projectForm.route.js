const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/form", (req, res) => {
  const vpath = path.join(__dirname + "/../projectone/index.html");
  // res.send(vpath)
  res.sendFile(vpath);
});

router.post("/form", (req, res) => {
  const { name, age } = req.body;
  res.send(`response name is ${name} and age is ${age}`);
});

module.exports = router;
