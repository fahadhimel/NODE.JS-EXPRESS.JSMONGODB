const express = require("express");
const app = express();
const userRouter = require("./routers/user.router");
const bodyParserRouter = require("./routers/bodyparser.router");
const ProjectFormRouter = require("./routers/projectForm.route");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/home", (req, res) => {
  res.send(`this is Home Route`);
});

app.use("/project",ProjectFormRouter)

//inside all paramitar discust;
app.use("/user", userRouter);

//inside the json body pass,
//make Sure install bodyParser,and add -- bottom 2 line
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());
app.use("/body", bodyParserRouter);

app.use((req, res) => {
  res.send(`404 Error Page`);
});

module.exports = app;
