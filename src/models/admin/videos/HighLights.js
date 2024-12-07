const { default: mongoose } = require("mongoose");
const keyAndHighLightsSchema = new mongoose.Schema(
  {
    description: {
      type: String,
    },
    video: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Videos",
    },
  },
  { timestamps: true }
);

const VideoHighLights =
  mongoose.models.VideoHighLights ||
  mongoose.model("VideoHighLights", keyAndHighLightsSchema);
export default VideoHighLights;
