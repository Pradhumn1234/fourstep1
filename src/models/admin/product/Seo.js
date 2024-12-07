const { default: mongoose} = require("mongoose");


const ProductSeoSchema=new mongoose.Schema({
    canonicalUrl:{
        type:String
    },
    tags:{
        type:String,
    },
    keyword:{
        type:String
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    
      }
},{})

const ProductSeo=mongoose.models.ProductSeo || mongoose.model("ProductSeo",ProductSeoSchema);
export default ProductSeo;