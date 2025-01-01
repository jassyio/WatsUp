// src/components/ContactList.jsx

import React from "react";
import { Link } from "react-router-dom";

const ContactList = ({ contacts }) => {
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <Link to={`/chat/${contact.id}`} key={contact.id} className="contact-item">
          <div className="contact-avatar">
            {/* Display user's avatar or initial */}
          </div>
          <div className="contact-info">
            <h3>{contact.name}</h3>
            <p>{contact.lastMessage}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ContactList;
