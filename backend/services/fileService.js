// src/services/fileService.js
import File from "../models/fileModel.js";

export const getFileById = async (id) => {
  const file = await File.findById(id);
  if (!file) {
    throw new Error("File not found");
  }
  return file;
};
