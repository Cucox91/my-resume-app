import cors from "cors";
import path from "path";
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes";
import experienceRoute from "./routes/experienceRoute";
import educationRoute from "./routes/educationRoute";
import skillRoute from "./routes/skillRoute";
import hobbyRoute from "./routes/hobbyRoute";
import learningRoute from "./routes/learningRoute";
import { seedAllData } from "./utils/SeedData";

dotenv.config();

const app = express();

// Declare CORS Options
const corsOptions = {
  origin: process.env.CLIENT_URL || "https://localhost:5001", //Raziel: In the future fix this for azure. This is taking the hardcoded value for now.
  credentials: true,
};

// Enable CORS with these options
app.use(cors(corsOptions));

// Optionally, if you want to allow pre-flight across the board
app.options("*", cors(corsOptions));

// Middleware to parse JSON requests
app.use(express.json());

// Connect to Mongo
mongoose
  .connect(process.env.MONGO_URI || "")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Use auth routes
app.use("/api/auth", authRoutes);
app.use("/api/experiences", experienceRoute);
app.use("/api/education", educationRoute);
app.use("/api/skills", skillRoute);
app.use("/api/hobbies", hobbyRoute);
app.use("/api/learning", learningRoute);

if (process.env.SEED_DATA === "true") {
  seedAllData();
}

export default app;
