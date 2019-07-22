const Post = require("../models/post.js");
const User = require("../models/user.js");
const Type = require("../models/type.js");

module.exports = {
  findAll: (req, res) => {
    Post.find(req.query).then(data => res.json(data));
  },

  findByType: (req, res) => {
    Post.find(req.query, "title date timetoread score user type")
      .then(data => res.json(data))
      .catch(err => {
        console.error(err);
        res.status(400).json({
          error: "Error when trying to Save Post : " + err
        });
      });
  },

  save: (req, res) => {
    Type.findOne({ _id: req.body.type }, "name")
      .then(type => {
        User.findOne(
          { _id: req.user.id },
          "name surname profilepictureurl posts"
        ).then(user => {
          var post = new Post(req.body);
          post.date = new Date();
          post.type = {
            _id: req.body.type,
            name: type.name
          };
          post.user = {
            _id: req.user.id,
            name: user.name,
            surname: user.surname,
            profilepictureurl: user.profilepictureurl
          };
          post.save().then(savedPost => {
            // Middleware mongoose
            user.posts.push({
              _id: savedPost._id,
              title: savedPost.title,
              timetoread: savedPost.timetoread,
              score: savedPost.score
            });
            user.save();
            res.status(201).json({
              success: true,
              message: "Post Saved",
              post: savedPost
            });
          });
        });
      })
      .catch(err => {
        console.error(err);
        res.status(400).json({
          error: "Error when trying to Save Post : " + err
        });
      });
  },

  update: (req, res) => {
    Post.findOneAndUpdate({ _id: req.body._id }, { $set: req.body })
      .then(updatedpost => {
        if (updatedpost) res.status(200).json(updatedpost);
        else res.status(404).json({});
      })
      .catch(err => {
        console.err(err);
        res.status(400).json({
          error: "Error when trying to update Post" + err
        });
      });
  },

  remove: (req, res) => {
    Post.findOneAndDelete({ _id: req.query._id })
      .then(deletedPost => {
        if (deletedPost) res.status(204).send();
        else res.status(404).json({});
      })
      .catch(err => {
        console.error(err);
        res.status(400).json({ error: err });
      });
  },

  incrementScore: (req, res) => {
    Post.findOneAndUpdate({ _id: req.body._id }, { $inc: { score: 1 } })
      .then(post => {
        if (post)
          res.status(200).json({
            success: true,
            message: "Score incremented by 1"
          });
        else res.status(404).json({});
      })
      .catch(err => {
        console.error(err);
        res.status(400).json({ error: err });
      });
  },

  decrementScore: (req, res) => {
    Post.findOneAndUpdate({ _id: req.body._id }, { $inc: { score: -1 } })
      .then(post => {
        if (post)
          res.status(200).json({
            success: true,
            message: "Score decremented by 1"
          });
        else res.status(404).json({});
      })
      .catch(err => {
        console.error(err);
        res.status(400).json({
          error: err
        });
      });
  }
};
