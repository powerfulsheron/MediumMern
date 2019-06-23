const mongoose = require('mongoose');

let TypeSchema = mongoose.Schema({
    name: String,
    description: String
});

const Type = mongoose.model('Type',TypeSchema);
module.exports = Type;