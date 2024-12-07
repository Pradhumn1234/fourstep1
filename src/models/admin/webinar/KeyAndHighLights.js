const { default: mongoose } = require("mongoose");
const keyAndHighLightsSchema = new mongoose.Schema(
  {
    description: {
      type: String,
    },
    webinar: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Webinar",
    },
  },
  { timestamps: true }
);

const KeyAndHighLights =
  mongoose.models.KeyAndHighLights ||
  mongoose.model("KeyAndHighLights", keyAndHighLightsSchema);
export default KeyAndHighLights;
