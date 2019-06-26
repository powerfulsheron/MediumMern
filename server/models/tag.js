const mongoose = require('mongoose');
const db = require('../lib/db');

let TagSchema = mongoose.Schema({
    name: String
});

const Tag = db.model('Tag',TagSchema);
module.exports = Tag;