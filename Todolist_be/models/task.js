const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Build Schema
const taskSchema = Schema(
  {
    task: {
      type: String,
      required: true,
    },
    isComplete: {
      type: Boolean,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User"
    },
  },
  { timestamps: true } // createAt, uptadteAt
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
