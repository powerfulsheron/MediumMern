const mongoose = require("mongoose");
require("mongoose-type-email");
const db = require("../lib/db");

let UserSchema = mongoose.Schema({
  name: String,
  surname: String,
  birthdate: Date,
  email: { type: mongoose.SchemaTypes.Email, required: true },
  password: { type: String, bcrypt: true },
  description: String,
  profilepictureurl: String,
  inscriptiondate: Date,
  followers: [
    {
      _id: String,
      name: String,
      surname: String,
      profilepictureurl: String
    }
  ],
  favorites: [
    {
      _id: String,
      title: String,
      timetoread: Number,
      score: Number,
      user: {
        name: String,
        surname: String,
        profilepictureurl: String
      }
    }
  ],
  bookmarks: [
    {
      _id: String,
      title: String,
      timetoread: Number,
      score: Number,
      description: String,
      mainimage: String,
      date: Date,
      type: {
        type: Object,
        properties: {
          name: String
        }
      },
      tags: [String],
      user: {
        name: String,
        surname: String,
        profilepictureurl: String
      }
    }
  ],
  posts: [
    {
      _id: String,
      title: String,
      timetoread: Number,
      score: Number
    }
  ]
});

UserSchema.plugin(require("mongoose-bcrypt"));

UserSchema.methods.register = function() {
  return this.save();
};

UserSchema.statics.login = function(email, password) {
  return new Promise((resolve, reject) => {
    User.findOne({ email })
      .then(user => {
        if (!user) return reject("User not found");
        user
          .verifyPassword(password)
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
      })
      .catch(error => reject(error));
  });
};

const User = db.model("User", UserSchema);
module.exports = User;