import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="profile-page">
      <h1>Your Profile</h1>
      <div className="profile-info">
        <p>Name: John Doe</p>
        <p>Email: johndoe@example.com</p>
        <p>Status: Available</p>
      </div>
      <div className="navigation-links">
        <Link to="/chatroom">Go to Chat</Link>
        <Link to="/home">Back to Home</Link>
      </div>
    </div>
  );
};

export default Profile;
