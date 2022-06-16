const mongoose = require("mongoose");
const { isEmail } = require("validator");

const userSchema = new mongoose.Schema(
  {
    pseudo: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 40,
      unique: true,
      trim: true,
    },
    email: { type: String, required: true, validate: [isEmail], trim: true },
    password: { type: String, required: true, max: 1024, minlength: 6 },
    bio: { type: String, max: 1024 },
    picture: {
      type: String,
      default: "./uploads/profil/random-user.png",
    },
    followers: { type: [String] },
    following: { type: [String] },
    likes: { type: [String] },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;
