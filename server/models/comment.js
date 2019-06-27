const mongoose = require('mongoose');
const db = require('../lib/db');

let CommentSchema = mongoose.Schema({
    content: String,
    date: Date,
    user: {
        _id: String,
        name: String,
        surname: String,
        profilepictureurl: String
    },
    post: String
});

const Comment = db.model('Comment', CommentSchema);
module.exports = Comment;