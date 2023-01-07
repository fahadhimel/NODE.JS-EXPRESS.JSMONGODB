const express = require("express");
const router = express.Router();

router.get("/circle", (req, res) => {
  res.sendFile(__dirname + "/circle.html");
});
router.post("/circle", (req, res) => {
  const { radius } = req.body;
  const area = Math.PI * radius * radius;
  res.send(`<h1>Circle Number is ${area}</h1>`);
});
router.get("/triangle", (req, res) => {
  res.sendFile(__dirname + "/triangle.html");
});
router.post("/triangle", (req, res) => {
  const { base, height } = req.body;
  const area = 0.5 * base * height;
  res.send(`<h1>Triangle Number is ${area}</h1>`);
});

module.exports = router;
