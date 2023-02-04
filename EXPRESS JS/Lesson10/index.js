require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3002;

app.get("/", (req, res) => {
  res.send(`hellow i am home route.`);
});
app.get((req, res) => {
  res.status(404
    ).send(`404 not found !`);
});

app.listen(PORT, () => {
  console.log(`The servsr raning at http://127.0.0.1:${PORT} `);
});
