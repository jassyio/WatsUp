const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
    {
        content: { type: String, required: true },
        sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // For direct messages
        chat: { type: mongoose.Schema.Types.ObjectId, ref: 'Chat', required: true }, // Add chat reference
        type: {type: String, default: 'text'}
    },
    { timestamps: true }
);

module.exports = mongoose.model('Message', messageSchema);