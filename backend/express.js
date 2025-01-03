const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const http = require("http");
const { Server } = require("socket.io");
const mongoose = require("mongoose");
const { User, Message } = require("./models/userModels"); // Import User and Message models

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL || "*", // Use CLIENT_URL in production
    methods: ["GET", "POST"],
  },
});

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

// API Endpoints
app.post("/signup", async (req, res) => {
  const { email, username } = req.body;

  try {
    const existingUserByEmail = await User.findOne({ email });
    if (!existingUserByEmail) {
      return res.status(404).json({ error: "Email not found. Please log in first." });
    }

    const existingUserByUsername = await User.findOne({ username });
    if (existingUserByUsername) {
      return res.status(400).json({ error: "Username already taken" });
    }

    existingUserByEmail.username = username;
    await existingUserByEmail.save();

    res.status(201).json({ message: "User created successfully", user: existingUserByEmail });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ error: "Error creating user" });
  }
});

app.post("/login/email", async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "Email not found. Please sign up first." });
    }

    res.status(200).json({ message: "Email verified successfully", user });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Error during login" });
  }
});

app.post("/login", async (req, res) => {
  const { username } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Error during login" });
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Error fetching users" });
  }
});

app.post("/message", async (req, res) => {
  const { senderUsername, receiverUsername, message } = req.body;

  try {
    const sender = await User.findOne({ username: senderUsername });
    const receiver = await User.findOne({ username: receiverUsername });

    if (!sender || !receiver) {
      return res.status(404).json({ error: "Sender or receiver not found" });
    }

    const newMessage = new Message({
      sender: sender._id,
      receiver: receiver._id,
      message,
    });

    await newMessage.save();

    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ error: "Error sending message" });
  }
});

// Socket.IO Setup
io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("join", async (username) => {
    try {
      const user = await User.findOne({ username });
      if (!user) {
        socket.emit("error", { message: "User not found" });
        return;
      }

      socket.username = username;
      socket.userId = user._id;

      io.emit("users", await User.find());
    } catch (error) {
      console.error("Join error:", error);
    }
  });

  socket.on("message", async (msg) => {
    try {
      const sender = await User.findOne({ username: msg.sender });
      const receiver = await User.findOne({ username: msg.receiver });

      if (!sender || !receiver) {
        return;
      }

      const newMessage = new Message({
        sender: sender._id,
        receiver: receiver._id,
        message: msg.message,
      });

      await newMessage.save();

      io.emit("message", msg);
    } catch (error) {
      console.error("Message error:", error);
    }
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected:", socket.id);
  });
});

// Default Route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the WhatsUp backend!" });
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
