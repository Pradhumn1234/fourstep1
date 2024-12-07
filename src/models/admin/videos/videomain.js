import "./Faq";
import "./HighLights";
import "./Overview";
import "./Seo";
import  "./videouser";
const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    videoLink: {
      type: String,
    },
    subtitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "VideoUser",
    },
    topics: {
      type: String,
      required: true,
    },
    tools: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    industry: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    filename: {
      type: String,
      required: true,
    },
    altText: {
      type: String,
    },
    faq: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "VideoFaq",
    },
    seo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "VideoSeo",
    },
    overview: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "VideoOverview",
    },
    highlight: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "VideoHighLights",
    },
  },
  { timestamps: true }
);

const Videos = mongoose.models.Videos || mongoose.model("Videos", VideoSchema);
export default Videos;
