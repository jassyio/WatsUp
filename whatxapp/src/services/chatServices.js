import { api } from './api';

const chatService = {
  getMessages: async (roomId) => {
    try {
      const response = await api.get(`/chat/rooms/${roomId}/messages`);
      return response.data;
    } catch (error) {
      console.error('Error fetching messages:', error);
      return { success: false, message: 'Unable to fetch messages' };
    }
  },

  sendMessage: async (roomId, message) => {
    try {
      const response = await api.post(`/chat/rooms/${roomId}/messages`, { message });
      return response.data;
    } catch (error) {
      console.error('Error sending message:', error);
      return { success: false, message: 'Unable to send message' };
    }
  },
};

export { chatService };
