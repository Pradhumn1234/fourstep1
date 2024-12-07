import mongoose from "mongoose";

const ToolSoftwareSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
});

const Tools= mongoose.models.Tools || mongoose.model("Tools", ToolSoftwareSchema);
export default Tools
