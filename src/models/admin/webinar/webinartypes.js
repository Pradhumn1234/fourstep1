// src/models/admin/webinar/webinartypes.js
import mongoose from "mongoose";

const webinartypeSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

export default mongoose.models.websiteWebinar ||
  mongoose.model("websiteWebinar", webinartypeSchema);
