import mongoose from "mongoose";
import "./ProductSeoPromo";

const bannerSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true

    },
    filename:{
        type:String,
        required:true
    },
    description:{
         type:String,
         required:true
    },
    videoPath:{
        type:String,
        required:true
    }
    ,
    seo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ProductSeoPromo"
    }
},{timestamps:true})

const ProductPromo=mongoose.models.ProductPromo||mongoose.model("ProductPromo",bannerSchema);

export default ProductPromo;