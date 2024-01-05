const express = require("express");
const {
  createUser,
  getUsers,
  deleteUser,
  getUser,
  updateUser,
} = require("../controller/usersController");

const router = express.Router();

router.post("/", createUser);
router.get("/", getUsers);
router.delete("/:id", deleteUser);
router.get("/:id", getUser);
router.post("/:id", updateUser);

module.exports = router;
