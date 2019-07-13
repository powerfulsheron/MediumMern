const User = require("../models/user.js");

module.exports = {
  find: (req, res) => {
    User.find(req.query).then(data => res.json(data));
  },

  update: (req, res) => {
    User.findOneAndUpdate({ _id: req.body.id }, { $set: req.body })
      .then(updateduser => {
        res.status(200).json({
          success: true,
          message: "User updated"
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          success: false,
          message: "Error when trying to update User : " + err
        });
      });
  },

  remove: (req, res) => {
    if (req.user.id != req.query._id) {
      res.status(403).send({ message: "You are not authorized to do this." });
    } else {
      User.findOneAndDelete({ _id: req.query.id })
        .then(deletedUser => {
          if (deletedUser) {
            res.status(200).json({
              success: true,
              message: "User deleted.",
              deletedUser: deletedUser
            });
          } else {
            res.status(202).json({
              success: false,
              message: "No User match the query"
            });
          }
        })
        .catch(err =>
          res.status(500).json({
            success: false,
            message: err
          })
        );
    }
  }
};
