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
        ref:"CaseStudyPromo"
    }
},{timestamps:true})

const CaseStudySeoPromo=mongoose.models.CaseStudySeoPromo || mongoose.model("CaseStudySeoPromo",blogpromoSchema);
export default CaseStudySeoPromo;