const express = require("express");
const router = express.Router();
//express Router
const taskApi = require("./task.api");

router.use("/tasks", taskApi);
//If "/task" url called, router will be call "/task" api

module.exports = router;
//export router module to use
