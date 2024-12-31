const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const http = require("http");
const { Server } = require("socket.io");

// Load environment variables
dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*", // Replace '*' with your frontend URL in production
        methods: ["GET", "POST"],
    },
});

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection (uncomment if needed)
// const mongoose = require("mongoose");
// mongoose
//     .connect(process.env.MONGO_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     })
//     .then(() => console.log("Connected to MongoDB"))
//     .catch((err) => console.error("MongoDB connection error:", err));

// Socket.IO
io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    // Listen for messages from the client
    socket.on("message", (msg) => {
        console.log("Message received:", msg);
        io.emit("message", msg); // Broadcast the message to all clients
    });

    socket.on("disconnect", () => {
        console.log("A user disconnected:", socket.id);
    });
});

// Basic API route for testing
app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to the WhatsUp backend!" });
});

// 404 Handler
app.use((req, res, next) => {
    res.status(404).json({ error: "Route not found" });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal Server Error" });
});

// Start Server
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
