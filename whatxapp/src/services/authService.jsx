import { api } from './api';

const authService = {
  login: async (email, password) => {
    try {
      const response = await api.post('/auth/login', { email, password });
      return response.data;
    } catch (error) {
      console.error('Error logging in:', error);
      return { success: false, message: 'Invalid credentials' };
    }
  },

  signup: async (email, password) => {
    try {
      const response = await api.post('/auth/signup', { email, password });
      return response.data;
    } catch (error) {
      console.error('Error signing up:', error);
      return { success: false, message: 'Signup failed' };
    }
  },

  logout: () => {
    // Any logout logic if needed (like clearing localStorage, etc.)
  },
};

export { authService };
