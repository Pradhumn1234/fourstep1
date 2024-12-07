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
        ref:"VideoPromo"
    }
},{timestamps:true})

const VideoSeoPromo=mongoose.models.VideoSeoPromo || mongoose.model("VideoSeoPromo",blogpromoSchema);
export default VideoSeoPromo;