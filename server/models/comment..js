const mongoose = require('mongoose');

let CommentSchema = mongoose.Schema({
    content: String,
    Date: Date,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    post: {type: mongoose.Schema.Types.ObjectId, ref: 'Post'}
});

const Comment = mongoose.model('Comment',CommentSchema);
module.exports = Comment;