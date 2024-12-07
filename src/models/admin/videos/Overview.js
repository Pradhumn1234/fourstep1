const { default: mongoose } = require("mongoose");


const overviewSchema=new mongoose.Schema({
    description:{
        type:String
    },
    video:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Videos"
    }

},{timestamps:true});

const VideoOverview=mongoose.models.VideoOverview||mongoose.model("VideoOverview",overviewSchema);
export default VideoOverview;