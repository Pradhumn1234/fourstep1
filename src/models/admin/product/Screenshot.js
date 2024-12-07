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
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  },
  { timestamps: true }
);

const ProductScreenshot =
  mongoose.models.ProductScreenshot ||
  mongoose.model("ProductScreenshot", keyAndHighLightsSchema);
export default ProductScreenshot;
