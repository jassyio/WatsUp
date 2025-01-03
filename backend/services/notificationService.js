// C:\Users\user\Desktop\watsUp\WatsUp\backend\services\notificationService.js

import Notification from "../models/notificationModel.js";

const createNotification = async (userId, message) => {
  const notification = new Notification({ userId, message });
  return await notification.save();
};

const getUserNotifications = async (userId) => {
  return await Notification.find({ userId });
};

export default { createNotification, getUserNotifications };
