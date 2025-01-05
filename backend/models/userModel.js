const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // Add other user fields (e.g., profile picture, status)
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);