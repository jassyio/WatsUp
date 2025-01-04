import React from "react";
import { MdOutlineMessage } from "react-icons/md";

const ChatItem = ({ chat }) => {
  const { name, lastMessage, time } = chat;

  return (
    <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg bg-white shadow-sm">
      <div className="flex items-start space-x-3">
        {/* Placeholder for profile picture */}
        <div className="w-12 h-12 rounded-full bg-gray-300"></div>
        <div>
          <h3 className="font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500 truncate">{lastMessage}</p>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-xs text-gray-400">{time}</span>
        <MdOutlineMessage size={20} className="text-green-500 mt-1" />
      </div>
    </div>
  );
};

export default ChatItem;
