import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: { type: String, default: "General" },
  priority: { type: String, default: "Medium" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Task", taskSchema);
