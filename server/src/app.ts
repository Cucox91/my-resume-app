import cors from "cors";
import path from "path";
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes";
import experienceRoute from "./routes/experienceRoute";
import educationRoute from "./routes/educationRoute";

dotenv.config();

const app = express();

// Declare CORS Options
const corsOptions = {
  origin: process.env.CLIENT_URL || "http://localhost:5002",
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

export default app;
