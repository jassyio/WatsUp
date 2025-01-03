import { useContext } from 'react';
import { ChatContext } from '../contexts/Chatcontext';

const useChat = () => {
  return useContext(ChatContext);
};

export default useChat;
