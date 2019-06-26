const mongoose = require('mongoose');
const db = require('../lib/db');

let PostSchema = mongoose.Schema({
    title: String,
    description: String,
    content: String,
    date: Date,
    timetoread: Number,
    profilepictureurl: String,
    mainimage: String,
    score: Number,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    type: {type: mongoose.Schema.Types.ObjectId, ref: 'Type'},
    tags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag'
    }]
});

const Post = db.model('Post',PostSchema);
module.exports = Post;