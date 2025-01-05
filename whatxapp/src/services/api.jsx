import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://your-api-url.com',
    timeout: 1000,
});

export const login = async (data) => {
    return apiClient.post('/login', data);
};

export const register = async (data) => {
    return apiClient.post('/register', data);
};

