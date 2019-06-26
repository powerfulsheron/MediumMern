const Post = require('../models/post.js');
const User = require('../models/user.js');

module.exports = {

    find: (req, res) => {
        Post.find(req.query).then(data => res.json(data));
    },

    save: (req, res) => {
        req.body.user=req.user.id;
        const post = new Post(req.body);
        post.save().then((newPost) => {
            User.findOne({_id:newPost.user}).then((user)=>{
                user.posts.push(newPost);
                user.save();
            }).catch((err) => {
                console.log('Error when trying to Find User' + err);
            });;
            res.status(201).json({
                success: true,
                message: 'Post Saved',
                post:newPost
            });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: 'Error when trying to Save Post' + err
            });
        });
    },

    update: (req, res) => {
        Post.findOneAndUpdate({ _id:req.body.id }, { $set:req.body })
        .then((updatedpost) => {
        res.status(200).json({
            success: true,
            message: 'Post updated'
        });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: 'Error when trying to Update Post'
            });
        });
    },
 
    remove: (req, res) => {
        Post.findOneAndDelete({ _id:req.body.id })
          .then((deletedPost)=>{
            if(deletedPost) {
                res.status(200).json({
                    success: true,
                    message: 'Post deleted.',
                    deletedPost:deletedPost
                });
              } else {
                res.status(202).json({
                    success: false,
                    message: 'No Post match the query'
                });
              }          
            }
          )
          .catch((err) => res.status(500).json({
            success: false,
            message: err
          }));
      }

};