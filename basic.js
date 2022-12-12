const server = require("express");
const app = server();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// ToDo: data base connection
mongoose.connect("mongodb://localhost:27017/mernSt2");
mongoose.connection.on("connected", () => {
  console.log("DB Connected");
});
mongoose.connection.on("Error", () => {
  console.log("Error");
});
// Data connection end

const {
  getTasks,
  createNewTask,
  updateTask,
  deleteTask,
  completeAllTasks,
} = require("./src/controllers/index");

app.use(cors());
app.use(bodyParser.json());

app.get("/Todo", getTasks);
app.post("/create-new-Tasks", createNewTask);
app.put("/updateTasks", updateTask);
app.put("/complete-All", completeAllTasks);
app.delete("/deleteTasks", deleteTask);

app.listen(4000, () => {
  console.log("server started on port 4000");
});
