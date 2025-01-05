const express = require("express");
const router = express.Router();
const {
    accessChat,
    fetchChats,
} = require("../controllers/chatController");
const authMiddleware = require("../middleware/authMiddleware");

router.route("/").post(authMiddleware, accessChat).get(authMiddleware, fetchChats);

module.exports = router;