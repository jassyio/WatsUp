import { io } from 'socket.io-client';

let socket;

const socketService = {
  connect: (userId) => {
    socket = io(process.env.REACT_APP_API_URL);
    socket.emit('join', { userId });
  },

  disconnect: () => {
    if (socket) socket.disconnect();
  },

  sendMessage: (roomId, message) => {
    if (socket) {
      socket.emit('send_message', { roomId, message });
    }
  },

  onMessageReceived: (callback) => {
    if (socket) {
      socket.on('receive_message', callback);
    }
  },
};

export { socketService };
