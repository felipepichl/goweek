import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

import authConfig from '../../config/auth';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    avatar: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'File',
      default: null,
    },
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

/**
 * I didn't find another way to set a default avatar, so a did like this.
 * I think this should have stay in frontend, but i still don't how to do it.
 */

UserSchema.virtual('preview').get(function() {
  if (this.avatar) {
    return this.avatar.url;
  }
  return 'https://images.unsplash.com/photo-1509828945144-552b3b1a968d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZHVja3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
});

UserSchema.methods = {
  generationToken() {
    return jwt.sign({ id: this.id }, authConfig.secret, {
      expiresIn: authConfig.expiresIn,
    });
  },
};

export default mongoose.model('User', UserSchema);
