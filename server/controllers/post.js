const Post = require('../models/post.js');
const User = require('../models/user.js');

module.exports = {

    findAll: (req, res) => {
        Post.find(req.query).then(data => res.json(data));
    },

    findByType: (req, res) => {
        Post.find(req.query, 'title date timetoread score user').then(data => res.json(data));
    },

    save: (req, res) => {

        const post = new Post(req.body);
        User.findOne({_id:req.user.id}, '_id name surname profilepictureurl').then((user)=>{
            post.user._id = user._id,
            post.user.name = user.name,
            post.user.surname = user.surname,
            post.user.profilepictureurl = user.profilepictureurl
        }).catch((err) => {
            console.log('Error when trying to Find User' + err);
        });
        post.save().then((newPost) => {
            User.findOne({_id:newPost.user._id},'posts').then((user)=>{
                user.posts.push(
                    {
                        _id: newPost._id,
                        title: newPost.title,
                        timetoread: newPost.timetoread,
                        score: newPost.score
                    }
                );
                user.save();
                res.status(201).json({
                    success: true,
                    message: 'Post Saved',
                    post:newPost
                });
            });;
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
        Post.findOneAndDelete({ _id:req.params.id })
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