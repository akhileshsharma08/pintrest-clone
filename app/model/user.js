const mongoose = require('mongoose');
// const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  }
  ,
  dob: {
    type: String,
    required: false,
  }
  ,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],
  profileImage: {
    type: String,
  },
});


// const User = mongoose.model('User', userSchema);
const User = mongoose.models.User || mongoose.model('User', UserSchema);


export default User;
