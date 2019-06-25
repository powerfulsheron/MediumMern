const mongoose = require('mongoose');
const db = require('../lib/db');

let CommentSchema = mongoose.Schema({
    content: String,
    date: Date,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    post: {type: mongoose.Schema.Types.ObjectId, ref: 'Post'}
});

const Comment = db.model('Comment', CommentSchema);
module.exports = Comment;