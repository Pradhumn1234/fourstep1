// src/models/admin/webinar/departments.js
import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

export default mongoose.models?.webinardepartment ||
 mongoose.model("webinardepartment", departmentSchema);
