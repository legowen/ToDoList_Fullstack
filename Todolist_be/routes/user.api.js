const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");

// 1. Sign-in endpoint, For signin is "Post"
router.post("/", userController.createUser);

// 2. login endpoint
router.post("/login", userController.loginWithEmail);

module.exports = router;
