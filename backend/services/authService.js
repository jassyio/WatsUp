// src/services/authService.js
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";

export const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    return {
      id: user.id,
      email: user.email,
      token: generateToken(user.id),
    };
  } else {
    throw new Error("Invalid credentials");
  }
};
