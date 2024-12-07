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
    casestudy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"CaseStudy"
    }
},{})

const CaseSeo=mongoose.models.CaseSeo || mongoose.model("CaseSeo",ProductSeoSchema);
export default CaseSeo;