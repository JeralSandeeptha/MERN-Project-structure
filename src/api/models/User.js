const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    goodleId: { type: String, required: true },
    gmail: { type: String, required: true },
    displayName: { type: String, required: true },
    image: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);