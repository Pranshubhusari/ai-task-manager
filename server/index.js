import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";
import Task from "./models/Task.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// DB connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log(err));

// OpenAI config (new syntax)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// AI route
app.post("/api/ai-priority", async (req, res) => {
  try {
    const { title, description } = req.body;
    const prompt = `You are a productivity assistant. Based on this task: "${title}" - "${description}", classify its priority as High, Medium or Low. Give only the single word.`;

    // new chat.completions method
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 10,
    });

    const priority = completion.choices[0].message.content.trim();
    res.json({ priority });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

// CRUD routes
app.get("/api/tasks", async (_, res) => res.json(await Task.find()));
app.post("/api/tasks", async (req, res) => {
  const t = new Task(req.body);
  await t.save();
  res.json(t);
});
app.delete("/api/tasks/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("🚀 Server running on port " + PORT));

