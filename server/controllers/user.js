const User = require('../models/user.js');

module.exports = {

    find: (req, res) => {
        User.find(req.query).then(data => res.json(data));
    },

    update: (req, res) => {
        User.findOneAndUpdate({ _id:req.body.id }, { $set:req.body })
        .then((updateduser) => {
        res.status(200).json({
            success: true,
            message: 'User updated'
        });
        })
        .catch((err) => {
        res.status(500).json({
            success: false,
            message: 'Error when trying to Update User'
        });
        });
    },
 
    remove: (req, res) => {
        User.findOneAndDelete({ _id:req.body.id })
          .then((deletedUser)=>{
            if(deletedUser) {
                res.status(200).json({
                    success: true,
                    message: 'User deleted.',
                    deletedUser:deletedUser
                });
              } else {
                res.status(202).json({
                    success: false,
                    message: 'No User match the query'
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