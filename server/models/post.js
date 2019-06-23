const mongoose = require('mongoose');

let PostSchema = mongoose.Schema({
    title: String,
    description: String,
    content: String,
    Date: Date,
    timetoread: Number,
    profilepictureurl: String,
    inscriptiondate: Date,
    mainimage: String,
    score: Number,
    type: {type: mongoose.Schema.Types.ObjectId, ref: 'Type'},
    tags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag'
    }]
});

const Post = mongoose.model('Post',PostSchema);
module.exports = Post;