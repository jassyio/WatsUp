import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Import MUI theme provider
import CssBaseline from '@mui/material/CssBaseline'; // Import CSS baseline

const theme = createTheme(); // Create a default MUI theme

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}> {/* Wrap with MUI theme provider */}
      <CssBaseline /> {/* Apply MUI CSS reset */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);