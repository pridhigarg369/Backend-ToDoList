const { Todo } = require("../models/models");

const getTasks = async (request, response) => {
  var taskId = request.query.Id;
  if (taskId) {
    try {
      var allTasks = await Todo.findById(taskId);
    } catch {
      allTasks = null;
    }
  } else {
    allTasks = await Todo.find(taskId);
  }
  //console.log(allTasks);
  return response.json(allTasks);
};
const createNewTask = async (request, response) => {
  await Todo.create(request.body);
  console.log(request.body);
  return response.json({ data: "Task Added" });
};

const updateTask = async (request, response) => {
  var taskId = request.query.Id;
  try {
    var task = await Todo.findById(taskId);
    if (!task) {
      return response
        .status(404)
        .json({ status: "Error", msg: "No Such Task" });
    }
  } catch {
    return response.status(404).json({ status: "Error", msg: "No Such Task" });
  }
  await Todo.findByIdAndUpdate(taskId, request.body);
  return response.json({ data: "Task Completed" });
};

const deleteTask = async (request, response) => {
  var taskId = request.query.Id;
  if (taskId) {
    await Todo.findByIdAndDelete(taskId);
    return response.json({ data: "Task Deleted" });
  } else {
    return response.status(404).json({ status: "Error", msg: "Invalid Id" });
  }
};
const completeAllTasks = async (request, response) => {
  var getdata = { completed: "False" };
  var setdata = { completed: "True" };
  await Todo.updateMany(getdata, setdata);
  return response.json({ data: "All tasks completed" });
};
module.exports = {
  getTasks,
  createNewTask,
  updateTask,
  deleteTask,
  completeAllTasks,
};
