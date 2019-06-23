const Comment = require('../models/comment.js');

module.exports = {

    update: (req, res) => {
        Comment.findOneAndUpdate({ _id:req.body.id }, { $set:req.body })
        .then((updatedcomment) => {
        res.status(200).json({
            success: true,
            message: 'Comment updated'
        });
        })
        .catch((err) => {
        res.status(500).json({
            success: false,
            message: 'Error when trying to Update Comment'
        });
        });
    },
 
    remove: (req, res) => {
        Comment.findOneAndDelete({ _id:req.body.id })
          .then((deletedComment)=>{
            if(deletedComment) {
                res.status(200).json({
                    success: true,
                    message: 'Comment deleted.',
                    deletedComment:deletedComment
                });
              } else {
                res.status(202).json({
                    success: false,
                    message: 'No Comment match the query'
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