import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";
import connectDB from "./config/db.js";

import socketHandler from "./socket.js";
import authRoutes from "./routes/authRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js";

dotenv.config(); // Load environment variables

// Initialize Express app and server
const app = express();
const server = http.createServer(app);

// Set up Socket.IO
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL || "*", // Replace * with your frontend URL in production
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  },
});

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/chats", chatRoutes);
app.use("/api/users", userRoutes);
app.use("/api/notifications", notificationRoutes);

// Socket.IO logic
socketHandler(io);

// Default Route
app.get("/", (req, res) => {
  res.status(200).send("Server is running...");
});

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
