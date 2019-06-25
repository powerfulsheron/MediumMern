const mongoose = require('mongoose');
const db = require('../lib/db');

let TypeSchema = mongoose.Schema({
    name: String,
    description: String
});

const Type = db.model('Type',TypeSchema);
module.exports = Type;