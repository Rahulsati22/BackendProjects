const mongoose = require("mongoose");
const Todo = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const Task = mongoose.model("Task", Todo);
module.exports = Task;
