const { default: mongoose } = require("mongoose");


const overviewSchema=new mongoose.Schema({
    description:{
        type:String
    },
    webinar:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Webinar"
    }

},{timestamps:true});

const Overview=mongoose.models.Overview||mongoose.model("Overview",overviewSchema);
export default Overview;