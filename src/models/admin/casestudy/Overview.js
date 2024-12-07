const { default: mongoose } = require("mongoose");


const overviewSchema=new mongoose.Schema({
    description:{
        type:String
    },
    casestudy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"CaseStudy"
    }

},{timestamps:true});

const CaseOverview=mongoose.models.CaseOverview||mongoose.model("CaseOverview",overviewSchema);
export default CaseOverview;