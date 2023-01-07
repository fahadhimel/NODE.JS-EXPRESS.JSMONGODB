const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.send(`user.router...........login page`);
});

//query paramitars
router.post("/login", (req, res) => {
  const { id, name } = req.query;
  res.send(`Query id is ${id} and Name is ${name}`);
});

//route paramitars
router.post("/login/route/id/:id/name/:name", (req, res) => {
  const { id, name } = req.params;
  res.send(`Query id is ${id} and Name is ${name}`);
});

//header paramitars
router.post("/login/header", (req, res) => {
  const id = req.header("id");
  const name = req.header("name");
  res.send(`Query id is ${id} and Name is ${name}`);
});

module.exports = router;
