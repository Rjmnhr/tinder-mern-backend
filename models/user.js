import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    age: {
      type: Number,
      required: true,
    },
    img_URL: {
      type: String,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("Users", UserSchema);
