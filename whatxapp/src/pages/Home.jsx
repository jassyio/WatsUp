import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Login from '../components/Auth/Login';
import { UserContext } from '../context/UserContext';

const Home = () => {
    const { user } = useContext(UserContext);

    if (user) {
        return <Navigate to="/chats" />;
    }

    return (
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            <Login />
        </Box>
    );
};

export default Home;