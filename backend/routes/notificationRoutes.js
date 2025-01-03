// C:\Users\user\Desktop\watsUp\WatsUp\backend\routes\notificationRoutes.js

import express from "express";
import { sendNotification, getUserNotifications } from "../controllers/notificationController.js";

const router = express.Router();

router.post("/", sendNotification);
router.get("/:userId", getUserNotifications);

export default router;
