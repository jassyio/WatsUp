import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { NotificationProvider } from "./contexts/NotificationContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ChatRoom from "./pages/ChatRoom";
import Profile from "./pages/Profile"; // Profile page import

const App = () => {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <AuthProvider>
          <Router>
            <div className="app-container">
              <Navbar />
              <main className="main-content">
                <Routes>
                  <Route path="/" element={<Navigate to="/login" replace />} /> {/* Redirect to login */}
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/home" element={<Home />} /> {/* Home route */}
                  <Route path="/profile" element={<Profile />} /> {/* Profile route */}
                  <Route path="/chatroom" element={<ChatRoom />} /> {/* Chatroom route */}
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </AuthProvider>
      </NotificationProvider>
    </ThemeProvider>
  );
};

export default App;
