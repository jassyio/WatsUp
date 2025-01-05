const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors'); // Import cors
const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } }); // Enable CORS
const dbConnection = require('./utils/dbConnection');
const authRoutes = require('./routes/authRoutes');
const messageRoutes = require('./routes/messageRoutes');
// ... other routes
const { handleSocketConnection } = require('./utils/socketService'); // NEW
const errorMiddleware = require('./middlewares/errorMiddleware');

// Connect to MongoDB
dbConnection();

// Middleware
app.use(cors()); // Use CORS middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
// ... other routes

// Socket.IO setup
io.on('connection', (socket) => handleSocketConnection(io, socket)); // Use socketService

// Error handling middleware (should be after routes)
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));