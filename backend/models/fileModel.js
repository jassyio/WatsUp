// C:\Users\user\Desktop\watsUp\WatsUp\backend\models\fileModel.js

import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  path: { type: String, required: true },
  size: { type: Number, required: true },
  uploadedAt: { type: Date, default: Date.now },
});

const File = mongoose.model("File", fileSchema);

export default File;
