import mongoose, { Schema } from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    isEditable: {
      type: Boolean,
      default: false,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    priority: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);

export default Task;
