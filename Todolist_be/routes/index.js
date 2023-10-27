const express = require("express");
const router = express.Router();
//express Router
const taskApi = require("./task.api");

const userApi = require("./user.api");
// Call user Api

router.use("/tasks", taskApi);
//If "/task" url called, router will be call "/task" api
router.use("/user", userApi);

module.exports = router;
//export router module to use
