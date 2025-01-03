import React, { useEffect, useState } from "react";

const UserList = ({ loggedInUser, onSelectUser, onLogout }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the backend
    fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="user-list-container">
      <h2>Welcome, {loggedInUser}</h2>
      <button className="logout-button" onClick={onLogout}>
        Log Out
      </button>
      <ul className="user-list">
        {users
          .filter((user) => user.username !== loggedInUser)
          .map((user) => (
            <li
              key={user._id}
              onClick={() => onSelectUser(user.username)}
              className="user-item"
            >
              {user.username}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default UserList;
