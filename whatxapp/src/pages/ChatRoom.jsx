import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMoreVertical, FiMenu } from 'react-icons/fi';
import { MdChat } from 'react-icons/md';

const Chatroom = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const username = localStorage.getItem('username');

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const contacts = ["John Doe", "Jane Smith", "Alice Johnson"];
  const recentChats = ["John Doe", "Jane Smith"];

  return (
    <motion.div
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      exit={{ x: '100vw' }}
      className="h-screen bg-gray-100 flex flex-col"
    >
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-green-500 text-white">
        <div className="flex items-center space-x-4">
          <FiMenu
            size={24}
            className="cursor-pointer lg:hidden"
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
          />
          <h1 className="text-xl font-bold">{username}'s Chatroom</h1>
        </div>
        <FiMoreVertical
          size={24}
          onClick={toggleMenu}
          className="cursor-pointer"
          aria-label="Toggle Menu"
        />
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-12 right-4 bg-white shadow-lg rounded p-4 z-10"
          >
            <p className="cursor-pointer hover:text-green-500">Settings</p>
            <p className="cursor-pointer hover:text-red-500 mt-2">Logout</p>
          </motion.div>
        )}
      </header>

      <div className="flex flex-grow overflow-hidden">
        {/* Sidebar */}
        <motion.aside
          initial={{ x: '-100%' }}
          animate={{ x: sidebarOpen ? 0 : '-100%' }}
          transition={{ type: 'spring', stiffness: 80 }}
          className="fixed lg:static top-0 left-0 h-full w-64 bg-gray-200 z-20 lg:block"
        >
          <h2 className="text-lg font-bold p-4">Contacts</h2>
          <ul>
            {contacts.map((contact, index) => (
              <li
                key={index}
                className="p-4 hover:bg-gray-300 cursor-pointer"
              >
                {contact}
              </li>
            ))}
          </ul>
        </motion.aside>

        {/* Overlay for mobile sidebar */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
            onClick={toggleSidebar}
          />
        )}

        {/* Main Content */}
        <main className="flex-grow p-4 overflow-y-auto">
          <h2 className="text-lg font-bold mb-4">Recent Chats</h2>
          <ul>
            {recentChats.map((chat, index) => (
              <li
                key={index}
                className="flex items-center justify-between p-4 border-b hover:bg-gray-200"
              >
                <span>{chat}</span>
                <MdChat size={20} className="text-gray-500" />
              </li>
            ))}
          </ul>
        </main>
      </div>
    </motion.div>
  );
};

export default Chatroom;
