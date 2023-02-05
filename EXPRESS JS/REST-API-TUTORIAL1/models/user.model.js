const { v4: uuidv4 } = require("uuid");

const users = [
  {
    id: uuidv4(),
    username: "fahadHimel",
    email: "fahadhimel2@gmail.com",
  },
  {
    id: uuidv4(),
    username: "MIMI",
    email: "mimi45896@gmail.com",
  },
];
module.exports = users;
