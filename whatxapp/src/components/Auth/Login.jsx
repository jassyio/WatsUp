import React, { useState, useContext } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { UserContext } from '../context/UserContext';
import api from '../services/api'; // Ensure this matches the correct export in api.js

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(UserContext);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await api.post('/auth/login', { username, password });
            setUser(data.user); // Ensure your API response structure matches this.
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to login');
            console.error(err); // Log error details for debugging
        }
    };

    return (
        <Box 
            component="form" 
            onSubmit={handleSubmit} 
            sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 2, 
                width: '300px', 
                margin: 'auto', 
                marginTop: '50px' 
            }}
        >
            <Typography variant="h4" align="center">Login</Typography>
            {error && <Typography color="error">{error}</Typography>}
            <TextField 
                label="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required 
            />
            <TextField 
                label="Password" 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
            />
            <Button type="submit" variant="contained">Login</Button>
        </Box>
    );
};

export default Login;
