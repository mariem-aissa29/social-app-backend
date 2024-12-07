const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    content: { type: String, required: true },
    likes: { type: Number, default: 0 },
    comments: [{ content: String, date: { type: Date, default: Date.now } }],
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', postSchema);