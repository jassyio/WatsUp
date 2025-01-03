import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

import { ThemeProvider } from './contexts/Themecontext';
import { NotificationProvider } from './contexts/NotificationContext';  // Added for notifications
import { notificationService } from './services/notificationService';  // Added for notification handling

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Sidebar from './components/layout/Sidebar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ChatRoom from './pages/ChatRoom';

import './styles/App.css';
import './styles/themes.css';

const App = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    notificationService.requestPermission(); // Request notification permission on load
  }, []);

  return (
    <ThemeProvider>
      <AuthProvider>
        <ChatProvider>
          <NotificationProvider value={{ notifications, setNotifications }}>
            <Router>
              <div className="app">
                {/* Header */}
                <Navbar />

                {/* Sidebar */}
                <Sidebar />

                <main className="main-content">
                  {/* Routing */}
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/chat/:roomId" component={ChatRoom} />
                  </Switch>
                </main>

                {/* Footer */}
                <Footer />
              </div>
            </Router>
          </NotificationProvider>
        </ChatProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
