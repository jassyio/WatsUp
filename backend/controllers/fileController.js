// src/controllers/fileController.js
import File from "../models/fileModel.js";

export const uploadFile = async (req, res) => {
  try {
    const file = new File({
      name: req.file.originalname,
      path: req.file.path,
      size: req.file.size,
    });

    const savedFile = await file.save();
    res.status(201).json(savedFile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
