const Type = require('../models/type.js');

module.exports = {

    find: (req, res) => {
        Type.find(req.query).then(data => res.json(data));
    }

};