//All Api related with task will be here

const express = require('express');
const router = express.Router()
//express Router

router.post('/tasks', (req, res) => {
    res.send("create task");
});
//build first router "Post" /w callback Function

router.get('/tasks', (req, res) => {
    res.send("get tasks");
})
//second router "Get", read task

router.put('/tasks/:id', (req, res) => {
    res.send("update task");
})
//third router "put", Update task status, "/:id"=> Declare id to each task

router.delete('/tasks/:id', (req, res) => {
    res.send("delete task");
})
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