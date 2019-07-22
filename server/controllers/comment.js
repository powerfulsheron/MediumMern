const Post = require("../models/post.js");
const User = require("../models/user.js");

module.exports = {
  save: (req, res) => {
    Post.findOne({ _id: req.body._idpost }, "comments")
      .then(post => {
        User.findOne({ _id: req.user.id }, "name surname profilepictureurl")
          .then(user => {
            post.comments.push({
              content: req.body.content,
              date: req.body.date,
              user: {
                _id: req.user.id,
                name: user.name,
                surname: user.surname,
                profilepictureurl: user.profilepictureurl
              }
            });
            post.save();
            res.status(201).json({
              success: true,
              message: "Comment Saved"
            });
          })
          .catch(err => {
            res.status(404).json({});
          });
      })
      .catch(err => {
        console.log("Error when trying to save Comment : " + err);
        res.status(400).json({
          error: err
        });
      });
  },

  update: (req, res) => {
    Post.findOne({ _id: req.body._idpost }, "comments")
      .then(post => {
        post.comments.find(
          comment => comment._id == req.body._idcomment
        ).content = req.body.content;
        post.save();
        res.status(200).json({
          success: true,
          message: "Comment Updated"
        });
      })
      .catch(err => {
        console.log("Error when trying to update comment" + err);
        res.status(400).json({
          error: err
        });
      });
  },

  remove: (req, res) => {
    Post.findOne({ _id: req.query._idpost }, "comments")
      .then(post => {
        post.comments = post.comments.filter(
          comment => comment._id != req.query._idcomment
        );
        post.save();
        res.status(204).send();
      })
      .catch(err => {
        console.log("Error when trying to delete comment" + err);
      });
  }
};
