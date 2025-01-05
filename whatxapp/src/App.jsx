import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { UserProvider, UserContext } from './context/UserContext';
import { ChatProvider } from './context/ChatContext';
import Home from './pages/Home';
import ChatPage from './pages/ChatPage';
import NotFound from './pages/NotFound';
import Header from './components/Shared/Header';
import Sidebar from './components/Navigation/Sidebar';
import { Box, useMediaQuery, CircularProgress } from '@mui/material';
import CallPage from './pages/CallPage';
import StatusPage from './pages/StatusPage';
import SettingsPage from './pages/SettingsPage';
import AppRouter from './router';
import './index.css';
import { useContext } from 'react';

const theme = createTheme();

function App() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const { user, setUser } = useContext(UserContext);
    const [loading, setLoading] = useState(true);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, [setUser]);

    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
    }, [user]);

    if (loading) {
        return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <CircularProgress />
        </Box>;
    }

    return (
        <Router>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AuthProvider>
                    <UserProvider>
                        <ChatProvider>
                            <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
                                <Header title="WhatsApp Clone" onMenuClick={handleDrawerToggle} />
                                <Box sx={{ display: 'flex', flexGrow: 1 }}>
                                    {isMobile ? (
                                        <Sidebar open={mobileOpen} onClose={handleDrawerToggle} variant="temporary" />
                                    ) : (
                                        <Sidebar open={true} onClose={() => { }} variant="persistent" />
                                    )}

                                    <Box component="main" sx={{ flexGrow: 1, p: 3, width: '100%' }}>
                                        {user ? <AppRouter /> : <Navigate to="/" />}
                                    </Box>
                                </Box>
                            </Box>
                        </ChatProvider>
                    </UserProvider>
                </AuthProvider>
            </ThemeProvider>
        </Router>
    );
}

export default App;