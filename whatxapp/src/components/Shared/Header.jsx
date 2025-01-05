import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Example Icon

const Header = ({ title, onMenuClick }) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Box sx={{ display: { xs: 'block', md: 'none' } }}> {/* Show only on small screens */}
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={onMenuClick} // Handle menu click
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {title}
                </Typography>
                {/* Add other header actions here (e.g., search, settings) */}
            </Toolbar>
        </AppBar>
    );
};

export default Header;