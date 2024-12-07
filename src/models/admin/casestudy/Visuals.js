const { default: mongoose } = require("mongoose");
const keyAndHighLightsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    filename: {
      type: String,
    },
    path: {
      type: String,
    },
    casestudy:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"CaseStudy"
  }
  },
  { timestamps: true }
);

const CaseVisual=
  mongoose.models.CaseVisual ||
  mongoose.model("CaseVisual", keyAndHighLightsSchema);
export default CaseVisual;
