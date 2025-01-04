import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    socket.on("message", (msg) => setMessages((prev) => [...prev, msg]));
  }, []);

  const sendMessage = () => {
    socket.emit("message", input);
    setMessages((prev) => [...prev, { sender: "You", content: input }]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 mb-2 rounded ${
              msg.sender === "You" ? "bg-blue-200" : "bg-gray-200"
            }`}
          >
            <strong>{msg.sender}: </strong>
            {msg.content}
          </div>
        ))}
      </div>
      <div className="flex p-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border p-2 rounded-l"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded-r"
        >
          Send
        </button>
      </div>
    </div>
  );
}
