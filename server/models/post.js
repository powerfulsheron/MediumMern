const mongoose = require("mongoose");
const db = require("../lib/db");

let PostSchema = mongoose.Schema({
  title: String,
  description: String,
  content: String,
  date: Date,
  timetoread: Number,
  mainimage: String,
  score: { type: Number, default: 0 },
  user: {
    _id: { type: String },
    name: { type: String },
    surname: { type: String },
    profilepictureurl: { type: String }
  },
  type: {
    _id: { type: String },
    name: { type: String }
  },
  tags: [String],
  comments: [
    {
      id: mongoose.Schema.Types.ObjectId,
      content: String,
      date: Date,
      user: {
        _id: String,
        name: String,
        surname: String,
        profilepictureurl: String
      }
    }
  ]
});

const Post = db.model("Post", PostSchema);
module.exports = Post;
