const { default: mongoose } = require("mongoose");
const miniquestionSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    information:{
        type:String
    }
})

const FaqWebinarSchema=new mongoose.Schema({
  questions:[ miniquestionSchema ],
  video:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Videos"

  }
},{
    timestamps:true
});

const VideoFaq=mongoose.models.VideoFaq || mongoose.model("VideoFaq",FaqWebinarSchema);

export default VideoFaq;