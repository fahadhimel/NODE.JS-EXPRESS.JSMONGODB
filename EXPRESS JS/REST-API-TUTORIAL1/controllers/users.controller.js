const { v4: uuidv4 } = require("uuid");
let users = require("../models/user.model");

// GET users
const getUsers = (req, res) => {
  res.status(200).json(users);
};

// POST users
const createUsers = (req, res) => {
  const { username, email } = req.body;
  const user = {
    id: uuidv4(),
    username,
    email,
  };
  users.push(user);
  res.status(201).json(users);
};

// GET by ID users
const getSengleUser = (req, res) => {
  const userId = req.params.id;
  const user = users.filter((user) => user.id === userId);
  res.status(201).json(user);
};

// PUT users
const updateUser = (req, res) => {
  const userId = req.params.id;
  const { username, email } = req.body;
  users
    .filter((user) => user.id === userId)
    .map((selectedUser) => {
      (selectedUser.username = username), (selectedUser.email = email);
    });
  res.status(201).json(users);
};

// DELETE users
const deleteUser = (req, res) => {
  const userId = req.params.id;
  users = users.filter((user) => user.id != userId);

  res.status(201).json(users);
};

module.exports = {
  getUsers,
  createUsers,
  getSengleUser,
  updateUser,
  deleteUser,
};
