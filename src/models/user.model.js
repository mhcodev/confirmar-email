const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    code: { type: String, required: true },
    status: { type: String, required: true, default: 'UNVERIFIED' }
});

module.exports = mongoose.model('User', UserSchema);