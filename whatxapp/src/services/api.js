import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const sendMessage = (message) => {
  return axios.post(`${API_URL}/messages`, { message });
};

export const fetchMessages = (chatId) => {
  return axios.get(`${API_URL}/messages/${chatId}`);
};
