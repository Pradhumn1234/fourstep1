import mongoose from "mongoose";

const productserviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
});


const productService= mongoose.models.productService ||
  mongoose.model("productService", productserviceSchema);
  export default productService;
