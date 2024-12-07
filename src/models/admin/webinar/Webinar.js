import "../user";
import "./FaqWebinar";
import "./KeyAndHighLights";
import "./Overview";
import "./WebinarSeo";
const { default: mongoose } = require("mongoose");
const webinarSchema = new mongoose.Schema(
  {
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    filename: {
      type: String,
    },
    altText: {
      type: String,
    },
    title: {
      type: String,
      required: true,
      unique: true,
      trim:true,
    },
    link: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    selectType: {
      type: String,
      required: true,
    },
    toolsAndSoftware: {
      type: String,
      required: true,
    },
    topic: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    industry: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    speaker: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    overview: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Overview",
    },
    highlights: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "KeyAndHighLights",
    },
    webinarFaq: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FaqWebinar",
    },
    webinarSeo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "WebinarSeo",
    },
  },
  { timestamps: true }
);

const Webinar =
  mongoose.models.Webinar || mongoose.model("Webinar", webinarSchema);
export default Webinar;
