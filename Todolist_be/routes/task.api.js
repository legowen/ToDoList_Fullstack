//All Api related with task will be here

const express = require("express");
const taskController = require("../controller/task.controller");
const router = express.Router();
//express Routers

router.post("/", taskController.createTask);
//router.post("/", (req, res) => { res.send("post tesk")}) => old code
//build first router "Post" /w callback Function
//CRUD의 C, Create

router.get("/", taskController.getTasks);
//second router "Get", read task

router.put("/:id", taskController.updateTask);
//third router "put", Update task status, "/:id"=> Declare id to each task

router.delete("/:id", taskController.deleteTask);
// router.delete("/:id", (req, res) => {
//     res.send("delete task");
// })
//last router "delete", delete each task, Also Give id value for task 

module.exports = router;














//First Router Code that I wrote on index.js
// And organize it.

// const express = require('express');
// const router = express.Router()
// //express Router

// router.post('/tasks', (req, res) => {
//     res.send("create task");
// });
// //build first router "Post" /w callback Function

// router.get('/tasks', (req, res) => {
//     res.send("get tasks");
// })
// //second router "Get", read task

// router.put('/tasks/:id', (req, res) => {
//     res.send("update task");
// })
// //third router "put", Update task status, "/:id"=> Declare id to each task

// router.delete('/tasks/:id', (req, res) => {
//     res.send("delete task");
// })
// //last router "delete", delete each task, Also Give id value for task 

// module.exports = router;
// //export router module to use