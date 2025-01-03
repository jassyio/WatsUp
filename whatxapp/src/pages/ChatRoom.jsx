import React from "react";

const ChatRoom = ({ activeChat }) => {
  if (!activeChat) {
    return <div id="active-chat-container">Select a chat to start messaging.</div>;
  }

  return (
    <div id="active-chat-container">
      <header>
        <div className="active-chat-info">
          <div className="active-chat-icon"></div>
          <div className="active-chat-name">{activeChat.name}</div>
        </div>
        <div className="header-icons">
          <i className="fas fa-video"></i>
          <i className="fas fa-phone"></i>
          <i className="fas fa-ellipsis-v"></i>
        </div>
      </header>
      <main>
        {/* Add messages here */}
      </main>
      <div className="input-area">
        <i className="fas fa-paperclip"></i>
        <input type="text" placeholder="Type a message" />
        <i className="fas fa-smile"></i>
        <i className="fas fa-microphone"></i>
      </div>
    </div>
  );
};

export default ChatRoom;
