import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ChatPage from './pages/ChatPage';
import NotFound from './pages/NotFound';
import CallPage from './pages/CallPage';
import StatusPage from './pages/StatusPage';
import SettingsPage from './pages/SettingsPage';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chats" element={<ChatPage />} />
            <Route path="/calls" element={<CallPage />} />
            <Route path="/status" element={<StatusPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRouter;