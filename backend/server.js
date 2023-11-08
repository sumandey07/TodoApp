import express from "express";
import connectToDatabase from "./db.js";
import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";

const app = express();

app.use(express.json());

const PORT = 1340;

connectToDatabase();

app.get("/new", (req, res) => {
  res.send("Welcome to the Todo App Backend!");
});

app.use("/users", userRoutes);
app.use("/categories", categoryRoutes);
app.use("/tasks", taskRoutes);

app.listen(1340, () => {
  console.log(`Server is running on port ${PORT}.`);
});
