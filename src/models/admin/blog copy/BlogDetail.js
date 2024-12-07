import mongoose from "mongoose";
import "./BlogQuestion";
import "./BlogSeoDetail";
import "./SubQuestions";
const BlogDetailSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim:true,
      unique:true
    },
    selectTopic:{
      type: String,
      required: true,
    },
    selectDepartment:{
      type: String,
      required: true,
    },
    selectIndustry:{
      type: String,
      required: true,
    },
    selectTools:{
      type: String,
      required: true,
    },
    subTitle:{
      type: String,
      required: true,
    },
    filename: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    contentsummary: {
      type: String,
    },
    videoPath: {
      type: String,
      required: true,
    },
    blogQuestions: [
      { type: mongoose.Schema.Types.ObjectId, ref: "BlogQuestion" },
    ],
    blogSeo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BlogSeoDetail",
    },
  },
  { timestamps: true }
);

const BlogDetail =
  mongoose.models.BlogDetail || mongoose.model("BlogDetail", BlogDetailSchema);

export default BlogDetail;
