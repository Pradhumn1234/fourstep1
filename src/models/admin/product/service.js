import mongoose from "mongoose";

const productserviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

export default mongoose.models.productService ||
  mongoose.model("productService", productserviceSchema);
