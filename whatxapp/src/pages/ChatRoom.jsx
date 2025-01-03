import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useChat } from '../hooks/useChat';
import ChatBox from '../components/Chat/ChatBox';
import MessageInput from '../components/Chat/MessageInput';

const ChatRoom = () => {
  const { roomId } = useParams();
  const { messages, getMessages } = useChat();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      await getMessages(roomId);
      setLoading(false);
    };
    fetchMessages();
  }, [roomId, getMessages]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="chat-room">
      <ChatBox messages={messages} />
      <MessageInput roomId={roomId} />
    </div>
  );
};

export default ChatRoom;

