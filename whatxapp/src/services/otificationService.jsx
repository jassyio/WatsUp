import { createContext, useState, useContext } from "react";
import { setNotificationHandler } from "../services/notificationService";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);

    const addNotification = (message, type = "info") => {
        setNotifications((prev) => [...prev, { message, type, id: Date.now() }]);
    };

    const removeNotification = (id) => {
        setNotifications((prev) => prev.filter((notification) => notification.id !== id));
    };

    // Set the notification handler
    setNotificationHandler(addNotification);

    return (
        <NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>
            {children}
        </NotificationContext.Provider>
    );
};

export const useNotification = () => useContext(NotificationContext);
