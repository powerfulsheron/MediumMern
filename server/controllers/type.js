const Type = require("../models/type.js");

module.exports = {
  find: (req, res) => {
    Type.find(req.query)
      .then(data => {
        if (data.length > 0) res.json(data);
        else res.status(404).json([]);
      })
      .catch(err => {
        console.error(err);
        res.status(400).json({ error: err });
      });
  }
};
