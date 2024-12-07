// src/admin/videouser.js
import mongoose from "mongoose";

const VideoUserSchema = new mongoose.Schema({
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

const VideoUser =
  mongoose.models.VideoUser || mongoose.model("VideoUser", VideoUserSchema);
export default VideoUser;
