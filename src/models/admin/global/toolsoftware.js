import mongoose from "mongoose";

const ToolSoftwareSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
});

export default mongoose.models.Tools || mongoose.model("Tools", ToolSoftwareSchema);
