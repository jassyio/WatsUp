import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/whatsapp-clone", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String, // hashed
});

const MessageSchema = new mongoose.Schema({
  sender: String,
  content: String,
  timestamp: { type: Date, default: Date.now },
});

export const User = mongoose.model("User", UserSchema);
export const Message = mongoose.model("Message", MessageSchema);
