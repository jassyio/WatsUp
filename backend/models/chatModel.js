const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Array of user IDs
    isGroupChat: { type: Boolean, default: false },
    chatName: { type: String },
    groupAdmin: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
},
{ timestamps: true });

module.exports = mongoose.model('Chat', chatSchema);