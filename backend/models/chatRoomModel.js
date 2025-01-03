// C:\Users\user\Desktop\watsUp\WatsUp\backend\models\chatRoomModel.js

import mongoose from "mongoose";

const chatRoomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  isGroupChat: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

const ChatRoom = mongoose.model("ChatRoom", chatRoomSchema);

export default ChatRoom;
