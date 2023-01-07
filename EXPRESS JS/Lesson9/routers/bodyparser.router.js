const express = require("express");
const router = express.Router();


//bodyParse JSON DATA
router.post("/parser", (req, res) => {
  const { id, name,age } = req.body;
  res.send(`bodyParser id is ${id} and Name is ${name} and you are ${age}`);
});

module.exports = router;
