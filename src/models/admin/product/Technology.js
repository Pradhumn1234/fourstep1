const { default: mongoose } = require("mongoose");
const keyAndTechnologySchema = new mongoose.Schema(
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

const ProductTechnology =
  mongoose.models.ProductTechnology ||
  mongoose.model("ProductTechnology", keyAndTechnologySchema);
export default ProductTechnology;
