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
    video:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Videos"
    }
},{})

const VideoSeo=mongoose.models.VideoSeo || mongoose.model("VideoSeo",ProductSeoSchema);
export default VideoSeo;