const Tag = require('../models/tag.js');

module.exports = {

    find: (req, res) => {
        Tag.find(req.query).then(data => res.json(data));
    }

};