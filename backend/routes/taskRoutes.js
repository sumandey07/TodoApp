import express from "express";
import getAllTasks, {
  editTask,
  createTask,
  deleteTask,
  toggleTaskStatus,
  getAllTasksByCategory,
  getAllCompletedTasks,
  getTasksForToday,
} from "../controllers/taskController.js";

const taskRoutes = express.Router();

taskRoutes.route("/").get(getAllTasks);
taskRoutes.route("/today").get(getTasksForToday);
taskRoutes.route("/tasks-by-categories/:id").get(getAllTasksByCategory);
taskRoutes.route("/completed").get(getAllCompletedTasks);
taskRoutes.route("/create").post(createTask);
taskRoutes.route("/delete/:id").delete(deleteTask);
taskRoutes.route("/update/:id").put(toggleTaskStatus);
taskRoutes.route("/edit/:id").put(editTask);

export default taskRoutes;
