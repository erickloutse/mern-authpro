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
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
