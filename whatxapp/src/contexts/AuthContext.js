import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = async (email, password) => {
    const response = await authService.login(email, password);
    if (response.success) {
      setUser(response.user);
      navigate('/chat');
    } else {
      console.log(response.message);
    }
  };

  const signup = async (email, password) => {
    const response = await authService.signup(email, password);
    if (response.success) {
      setUser(response.user);
      navigate('/chat');
    } else {
      console.log(response.message);
    }
  };

  const logout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

