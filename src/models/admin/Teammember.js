import mongoose from "mongoose";

const teamMemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  filename:{
    type: String,
    required: true,
  },
  path:{
    type: String,
    required: true,
  },
  link1: {
    type: String,
    required: true,
  },
  link2: {
    type: String,
    required: true,
  },
  altText:{
    type:String,
    required:true
  }
});

const Teammember =
  mongoose.models.Teammember || mongoose.model("Teammember", teamMemberSchema);

export default Teammember;
