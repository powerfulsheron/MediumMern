const Post = require('../models/post.js');
const User = require('../models/user.js');
const Type = require('../models/type.js');

module.exports = {

    findAll: (req, res) => {
        Post.find(req.query).then(data => res.json(data));
    },

    findByType: (req, res) => {
        Post.find(req.query, 'title date timetoread score user').then(data => res.json(data));
    },

    save: (req, res) => {
        Type.findOne({_id:req.body.type},'name').then((type)=>{
            var post = new Post(req.body);
            post.type = {
                _id : req.body.type,
                name : type.name
            }
            post.save().then((newPost) => {
                User.findOne({_id:req.user.id}, 'name surname profilepictureurl posts').then((user)=>{
                    newPost.user = {
                        _id : req.user.id,
                        name : user.name,
                        surname : user.surname,
                        profilepictureurl : user.profilepictureurl
                    }
                    newPost.save().then((finalPost) => {
                        user.posts.push(
                            {
                                _id : finalPost._id,
                                title : finalPost.title,
                                timetoread : finalPost.timetoread,
                                score : finalPost.score
                            }
                        );
                        user.save();
                        res.status(201).json({
                            success: true,
                            message: 'Post Saved',
                            post:finalPost
                        });
                    })
                    .catch((err) => {
                        res.status(500).json({
                            success: false,
                            message: 'Error when trying to Save Post' + err
                        });
                    });

                }).catch((err) => {
                    console.log('Error when trying to Find User' + err);
                });
            });
        }).catch((err) => {
            console.log('Error when trying to Find Type' + err);
        });
    },

    update: (req, res) => {
        Post.findOneAndUpdate({ _id:req.body._id }, { $set:req.body })
        .then((updatedpost) => {
            res.status(200).json({
                success: true,
                message: 'Post updated',
                updatedPost:updatedpost
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
        Post.findOneAndDelete({ _id:req.query._id })
          .then((deletedPost)=>{
            if(deletedPost) {
                res.status(200).json({
                    success: true,
                    message: 'Post deleted.'
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