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

const ResultMatrix =
  mongoose.models.ResultMatrix ||
  mongoose.model("ResultMatrix", keyAndHighLightsSchema);
export default ResultMatrix;
