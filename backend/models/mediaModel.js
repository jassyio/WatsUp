const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
    url: { type: String, required: true },
    type: { type: String, enum: ['image', 'video', 'document'], required: true },
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    // Add other media fields (e.g., filename, size)
}, { timestamps: true });

module.exports = mongoose.model('Media', mediaSchema);