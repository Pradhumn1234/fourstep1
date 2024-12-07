// src/admin/user.js
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  description: { type: String, required: true },
  role: { type: String, required: true },
  jobProfile: { type: String, required: true },
  image: {
    filename: { type: String, required: true },
    path: { type: String, required: true },
  },
  alt: { type: String, required: true },
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);
export default User;
