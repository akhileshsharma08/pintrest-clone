const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: { type: String, required: false }, 
  description: { type: String, required: false }, 
  tags: { type: String },
  board: { type: String },
  link: { type: String },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  imageURL: {
    type: String,
 
  },
  userId: {
    // type: mongoose.Schema.Types.ObjectId,
    type:String,
    ref: "User",
  
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);


module.exports = Post;
