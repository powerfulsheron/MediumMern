const mongoose = require('mongoose');
require('mongoose-type-email');
const db = require('../lib/db');

let UserSchema = mongoose.Schema({
    name: String,
    surname: String,
    birthdate: Date,
    email: {type: mongoose.SchemaTypes.Email, required: true},
    password:{type: String, bcrypt: true},
    description: String,
    profilepictureurl: String,
    inscriptiondate: Date,
    followers: [ this ],
    favorites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }],
    bookmarks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }],
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});+

UserSchema.plugin(require('mongoose-bcrypt'));

UserSchema.methods.register = function(){
    return this.save();
}

UserSchema.statics.login = function(email, password){
    return new Promise((resolve, reject )=>{
        User.findOne({email}).then(user=>{
            if(!user) return reject ('User not found');
            user.verifyPassword(password)
            .then(function(valid) {
              if (valid) {
                resolve(user);
              } else {
                reject("Wrong Password");           
            }
            })
            .catch(function(err) {
              console.log(err);
            });
        }).catch(error => reject(error));
    });
}

const User = db.model('User',UserSchema);
module.exports = User;