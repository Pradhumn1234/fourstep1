import mongoose from "mongoose";
import  "./VideoSeoPromo";
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
        ref:"VideoSeoPromo"
    }
},{timestamps:true})

const VideoPromo=mongoose.models.VideoPromo||mongoose.model("VideoPromo",bannerSchema);

export default VideoPromo;