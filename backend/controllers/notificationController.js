// C:\Users\user\Desktop\watsUp\WatsUp\backend\controllers\notificationController.js

import NotificationService from "../services/notificationService.js";

export const sendNotification = async (req, res) => {
  try {
    const { userId, message } = req.body;
    const notification = await NotificationService.createNotification(userId, message);
    res.status(201).json(notification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserNotifications = async (req, res) => {
  try {
    const { userId } = req.params;
    const notifications = await NotificationService.getUserNotifications(userId);
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
