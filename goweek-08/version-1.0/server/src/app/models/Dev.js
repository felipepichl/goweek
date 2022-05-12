import { Schema, model } from 'mongoose';

const DevSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    user: {
      type: String,
      required: true,
    },
    bio: String,
    avatar: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Dev', DevSchema);