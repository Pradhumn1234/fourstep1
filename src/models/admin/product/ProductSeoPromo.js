const { default: mongoose, } = require("mongoose");


const blogpromoSchema=new mongoose.Schema({
    title:{
        type:String,
    },
    canonicalUrl:{
        type:String
    },
    description:{
        type:String,
    },
    keyword:{
        type:String
    },
    promo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ProductPromo"
    }
},{timestamps:true})

const ProductSeoPromo=mongoose.models.ProductSeoPromo || mongoose.model("ProductSeoPromo",blogpromoSchema);
export default ProductSeoPromo;