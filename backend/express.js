const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const { User, Message } = require('./models.js'); // Import User and Message models

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // Replace '*' with your frontend URL in production
    methods: ["GET", "POST"],
  },
});

app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

// User Registration (Sign Up with Username)
app.post("/signup", async (req, res) => {
  const { email, username } = req.body;

  // Check if email exists
  const existingUserByEmail = await User.findOne({ email });
  if (!existingUserByEmail) {
    return res.status(404).json({ error: 'Email not found. Please log in first.' });
  }

  // Check if username exists
  const existingUserByUsername = await User.findOne({ username });
  if (existingUserByUsername) {
    return res.status(400).json({ error: 'Username already taken' });
  }

  // Update the user's username
  existingUserByEmail.username = username;
  await existingUserByEmail.save();

  res.status(201).json({ message: 'User created successfully', user: existingUserByEmail });
});

// User Login (Login with Email)
app.post("/login/email", async (req, res) => {
  const { email } = req.body;

  // Check if the email exists in the database
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ error: 'Email not found. Please sign up first.' });
  }

  res.status(200).json({ message: 'Email verified successfully' });
});

// User Login (Login with Username)
app.post("/login", async (req, res) => {
  const { username } = req.body;

  // Find the user by username
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Send back the user data
  res.status(200).json({ user });
});

// Get All Users (For displaying in the frontend)
app.get("/users", async (req, res) => {
  const users = await User.find(); // Fetch all users from DB
  res.status(200).json(users);
});

// Send Message
app.post("/message", async (req, res) => {
  const { senderUsername, receiverUsername, message } = req.body;

  // Find sender and receiver from the database
  const sender = await User.findOne({ username: senderUsername });
  const receiver = await User.findOne({ username: receiverUsername });

  if (!sender || !receiver) {
    return res.status(404).json({ error: 'Sender or receiver not found' });
  }

  // Create a new message
  const newMessage = new Message({
    sender: sender._id,
    receiver: receiver._id,
    message,
  });

  await newMessage.save();

  res.status(201).json({ message: 'Message sent successfully' });
});

// Socket.IO Setup
io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("join", async (username) => {
    const user = await User.findOne({ username });
    if (!user) {
      socket.emit("error", { message: "User not found" });
      return;
    }
    socket.username = username;
    socket.userId = user._id;
    io.emit("users", await User.find()); // Emit updated user list to everyone
  });

  socket.on("message", async (msg) => {
    const sender = await User.findOne({ username: msg.sender });
    const receiver = await User.findOne({ username: msg.receiver });

    if (!sender || !receiver) {
      return;
    }

    // Save the message to the database
    const newMessage = new Message({
      sender: sender._id,
      receiver: receiver._id,
      message: msg.message,
    });

    await newMessage.save();

    // Emit the message to both users
    io.emit("message", msg);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected:", socket.id);
  });
});

// Basic API Route
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
