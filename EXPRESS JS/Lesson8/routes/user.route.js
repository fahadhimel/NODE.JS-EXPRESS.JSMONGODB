const express = require("express");
const route = express.Router();

//response
//all response chek the postman app;

// send file
route.get("/register", (req, res) => {
  res.statusCode = 202;
  res.sendFile(__dirname + "/views/register.html");
});

route.get("/login", (req, res) => {
  res.statusCode = 202;
  res.sendFile(__dirname + "/views/login.html");
});

//send json
route.put("/register", (req, res) => {
  res.status(201).json({
    name: "Fahad Himel",
    Age: 22,
  });
});

// send Cookie
route.delete("/register", (req, res) => {
  // set cookie
  //   res.cookie("name", "fahadhimel");
  //   res.cookie("Age", "21");

  //clear cookie
  res.clearCookie("name");
  res.end();
});

// send header
route.post("/login", (req, res) => {
  res.append("id", "1254801000000");
  res.end();
});

module.exports = route;
