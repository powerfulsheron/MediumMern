const mongoose = require('mongoose');

let TagSchema = mongoose.Schema({
    name: String,
    description: String
});

const Tag = mongoose.model('Tag',TagSchema);
module.exports = Tag;