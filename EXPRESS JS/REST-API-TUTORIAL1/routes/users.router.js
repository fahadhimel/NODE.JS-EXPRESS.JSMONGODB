const {
  getUsers,
  createUsers,
  updateUser,
  deleteUser,
  getSengleUser,
} = require("../controllers/users.controller");
const users = require("../models/user.model");

const router = require("express").Router();

router.get("/", getUsers);
router.post("/", createUsers);

router.get("/:id", getSengleUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
