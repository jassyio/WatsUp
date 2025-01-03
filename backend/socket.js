import { Server } from 'socket.io';

const socketHandler = (io) => {
    io.on("connection", (socket) => {
      console.log("A user connected:", socket.id);
  
      socket.on("joinRoom", ({ chatRoomId }) => {
        socket.join(chatRoomId);
        console.log(`User ${socket.id} joined room ${chatRoomId}`);
      });
  
      socket.on("sendMessage", ({ chatRoomId, message }) => {
        io.to(chatRoomId).emit("receiveMessage", message);
      });
  
      socket.on("disconnect", () => {
        console.log("A user disconnected:", socket.id);
      });
    });
  };
  
  export default socketHandler;
  