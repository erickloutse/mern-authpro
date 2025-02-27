import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import passport from "./config/passport.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import "dotenv/config";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// Connect to MongoDB
const connectDB = async () => {
  try {
    // For development in browser environment, we'll use a mock DB approach
    if (
      !process.env.MONGODB_URI ||
      process.env.MONGODB_URI.includes("localhost")
    ) {
      console.log("MongoDB connection skipped in development environment");
      // Set up mock data
      global.mockUsers = [];
      return;
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    // Set up mock data as fallback
    global.mockUsers = [];
  }
};

connectDB();

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
