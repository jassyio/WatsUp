import React from "react";
import ReactDOM from "react-dom";
import "./styles/App.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ChatProvider } from "./contexts/ChatContext";

ReactDOM.render(
  <Router>
    <AuthProvider>
      <ChatProvider>
        <App />
      </ChatProvider>
    </AuthProvider>
  </Router>,
  document.getElementById("root")
);
