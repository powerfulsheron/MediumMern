const User = require("../models/user.js");

module.exports = {
  find: (req, res) => {
    User.find(req.query)
      .then(data => {
        if (data.length >= 0) res.json(data);
        else res.status(404).json([]);
      })
      .catch(err => {
        console.error(err);
        res.status(400).json({ error: err });
      });
  },

  update: (req, res) => {
    User.findOneAndUpdate({ _id: req.body._id }, { $set: req.body })
      .then(updated_user => {
        if (updated_user) res.status(200).json(updated_user);
        else res.status(404).json({});
      })
      .catch(err => {
        console.error(err);
        res.status(400).json({ error: err });
      });
  },

  remove: (req, res) => {
    if (req.user.id != req.query._id) {
      res.status(403).send({ message: "You are not authorized to do this." });
    } else {
      User.findOneAndDelete({ _id: req.query.id })
        .then(deleted_user => {
          if (deleted_user) res.status(204).send();
          else res.status(404).json({});
        })
        .catch(err => {
          console.error(err);
          res.status(400).json({ error: err });
        });
    }
  }
};
