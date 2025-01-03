// src/config/pushNotification.js
import webpush from "web-push";

webpush.setVapidDetails(
  "mailto:your-email@example.com",
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
);

export const sendPushNotification = (subscription, payload) => {
  return webpush.sendNotification(subscription, JSON.stringify(payload));
};
