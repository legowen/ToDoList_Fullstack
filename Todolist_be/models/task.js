const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Build Schema
const taskSchema = Schema({
    task:{
        type: String,
        required: true
    },
    status:{
        type : Boolean,
        required: true
    }
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;