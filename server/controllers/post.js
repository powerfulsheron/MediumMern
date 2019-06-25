const Post = require('../models/post.js');

module.exports = {

    find: (req, res) => {
        Post.find(req.query).then(data => res.json(data));
    },

    save: (req, res) => {
        console.log(req.user);
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