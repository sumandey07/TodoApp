import Task from "../models/taskModel.js";

const getAllTasks = async (req, res) => {
  try {
    const userId = req.body;
    const tasks = await Task.find({ user: userId });
    res.send(tasks);
  } catch (error) {
    console.log("Error getting the tasks.", error.message);
    res.send({ error: "Error while fetching tasks" });
    throw error;
  }
};

export const getAllTasksByCategory = async (req, res) => {
  try {
    const userId = req.body;
    const { id } = req.params;
    const tasks = await Task.find({ user: userId, category: id });
    res.send(tasks);
  } catch (error) {
    console.log("Error getting the tasks by category.", error.message);
    res.send({ error: "Error while fetching tasks by category" });
    throw error;
  }
};

export const createTask = async (req, res) => {
  try {
    const userId = req.user;
    const { name, priority, categoryId, date } = req.body;

    const task = await Task.create({
      name,
      priority,
      categoryId,
      date,
      user: userId,
    });
    res.send(task);
  } catch (error) {
    console.log("Error creating the tasks.", error.message);
    res.send({ error: "Error while creating tasks" });
    throw error;
  }
};

export const toggleTaskStatus = async (req, res) => {
  try {
    const { isCompleted } = req.body;
    const { id } = req.params;

    const task = await Task.updateOne({ _id: id }, { isCompleted });
    res.send(task);
  } catch (error) {
    console.log("Error while toggling the task status.", error.message);
    res.send({ error: "Error while toggling the task status." });
    throw error;
  }
};

export const getTasksForToday = async (req, res) => {
  try {
    const userId = req.user;
    const todaysISODate = new Date();
    todaysISODate.setHours(0, 0, 0, 0);
    const tasks = await Task.find({
      user: userId,
      date: todaysISODate.toISOString(),
    });
    res.send(tasks);
  } catch (error) {
    console.log("Error getting all tasks for today.", error.message);
    res.send({ error: "Error while fetching all tasks for today" });
    throw error;
  }
};

export const getAllCompletedTasks = async (req, res) => {
  try {
    const userId = req.user;
    const tasks = await Task.find({ user: userId, isCompleted: true });
    res.send(tasks);
  } catch (error) {
    console.log("Error getting all completed tasks.", error.message);
    res.send({ error: "Error while fetching all completed tasks." });
    throw error;
  }
};

export const editTask = async (req, res) => {
  try {
    const { id, categoryId, date, name } = req.body;
    await Task.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          name,
          categoryId,
          date,
        },
      }
    );
    res.send({ message: "Task updated successfully." });
  } catch (error) {
    console.log("Error editing the tasks.", error.message);
    res.send({ error: "Error while editing the tasks." });
    throw error;
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.deleteOne({ _id: id });
    res.send({ message: "Task deleted successfully" });
  } catch (error) {
    console.log("Error deleting the tasks.", error.message);
    res.send({ error: "Something went wrong" });
    throw error;
  }
};

export default getAllTasks;
