const express = require("express");
const { deleteUser, getAllUsers } = require("../controllers/user");
const router = express.Router()

// DELETING USER

router.delete("/:id", deleteUser)

// GET ALL USERS

router.get("/", getAllUsers)

module.exports = router;