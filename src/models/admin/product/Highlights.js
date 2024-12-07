const { default: mongoose } = require("mongoose");
const keyAndHighLightsSchema = new mongoose.Schema(
  {
    description: {
      type: String,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  },
  { timestamps: true }
);

const ProductHighLights =
  mongoose.models.ProductHighLights ||
  mongoose.model("ProductHighLights", keyAndHighLightsSchema);
export default ProductHighLights;
