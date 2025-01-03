import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ rooms }) => {
  return (
    <div className="sidebar">
      <ul>
        {rooms.map((room, index) => (
          <li key={index}>
            <Link to={`/chat/${room.id}`}>{room.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
