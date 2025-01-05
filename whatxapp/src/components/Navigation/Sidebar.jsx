import React from 'react';
import { Navigate } from 'react-router-dom'; // Import Navigate

const Home = () => {
    // Check if the user is authenticated. If so, redirect to /chats
    const isAuthenticated = false; // Replace with your authentication logic

    if (isAuthenticated) {
        return <Navigate to="/chats" />;
    }

    return (
        <div>
            <h1>Welcome to WhatsApp Clone</h1>
            {/* Add login/signup components here */}
        </div>
    );
};

export default Home;