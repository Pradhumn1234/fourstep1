import mongoose from "mongoose";
import  "./WebinarSeoPromo";
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
        ref:"WebinarSeoPromo"
    }
},{timestamps:true})

const WebinarPromo=mongoose.models.WebinarPromo||mongoose.model("WebinarPromo",bannerSchema);

export default WebinarPromo;