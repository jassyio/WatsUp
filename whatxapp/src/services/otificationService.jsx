let notificationHandler = null;

/**
 * Sets the handler for sending notifications.
 * @param {function} handler - A function to handle adding notifications.
 */
export const setNotificationHandler = (handler) => {
    notificationHandler = handler;
};

/**
 * Adds a notification.
 * @param {string} message - The notification message.
 * @param {string} type - The type of notification (e.g., "success", "error", "info").
 */
export const notify = (message, type = "info") => {
    if (notificationHandler) {
        notificationHandler(message, type);
    } else {
        console.warn("Notification handler is not set. Call 'setNotificationHandler' first.");
    }
};
