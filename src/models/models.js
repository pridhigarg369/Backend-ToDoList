const mongoose = require("mongoose");

//creating db
const TodoSchema = new mongoose.Schema({
  Task: String,
  Description: String,
  Completed: Boolean,
});

const Todo = new mongoose.model("Todo", TodoSchema);

module.exports = { Todo };
