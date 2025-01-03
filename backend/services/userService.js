// C:\Users\user\Desktop\watsUp\WatsUp\backend\services\userService.js

import User from "../models/userModel.js";

const getUserById = async (id) => {
  return await User.findById(id);
};

const updateUserProfile = async (id, updateData) => {
  return await User.findByIdAndUpdate(id, updateData, { new: true });
};

export default { getUserById, updateUserProfile };
