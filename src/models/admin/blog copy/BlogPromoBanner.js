import mongoose from "mongoose";
import "./BlogPromo"
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
        ref:"BlogPromo"
    }
},{timestamps:true})

const BlogPromoBanner=mongoose.models.BlogPromoBanner||mongoose.model("BlogPromoBanner",bannerSchema);

export default BlogPromoBanner;