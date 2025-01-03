import React from "react";
import { useChat } from "../hooks/useChat";

const ChatRoom = () => {
    const { messages, addMessage } = useChat();

    const handleSend = (e) => {
        e.preventDefault();
        addMessage({ text: e.target.message.value });
        e.target.reset();
    };

    return (
        <div>
            <div>
                {messages.map((msg, idx) => (
                    <p key={idx}>{msg.text}</p>
                ))}
            </div>
            <form onSubmit={handleSend}>
                <input type="text" name="message" placeholder="Type a message" />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ChatRoom;
