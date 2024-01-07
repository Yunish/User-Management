const express = require("express");
const {
  createUser,
  getUsers,
  deleteUser,
  getUser,
  updateUser,
} = require("../controller/usersController");
const { auth } = require("../middlewares/auth");

const router = express.Router();

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     description: Create a new user with the provided data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *             required:
 *               - username
 *               - email
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             example:
 *               message: User created successfully
 */
router.post("/", createUser);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get a list of users
 *     description: Returns a list of users
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               message: List of users retrieved successfully
 */
router.get("/", auth, getUsers);
router.delete("/:id", deleteUser);
router.get("/:id", getUser);
router.post("/:id", updateUser);

module.exports = router;
