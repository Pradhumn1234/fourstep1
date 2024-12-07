const { default: mongoose } = require("mongoose");
const keyAndHighLightsSchema = new mongoose.Schema(
  {
    description: {
      type: String,
    },
    casestudy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CaseStudy",
    },
  },
  { timestamps: true }
);

const CaseChalenge =
  mongoose.models.CaseChalenge ||
  mongoose.model("CaseChalenge", keyAndHighLightsSchema);
export default CaseChalenge;
