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
  webinar:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Webinar"

  }
},{
    timestamps:true
});

const FaqWebinar=mongoose.models.FaqWebinar || mongoose.model("FaqWebinar",FaqWebinarSchema);

export default FaqWebinar;