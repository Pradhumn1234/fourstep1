import mongoose from "mongoose";
import "./CaseStudySeoPromo";
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
        ref:"CaseStudySeoPromo"
    }
},{timestamps:true})

const CaseStudyPromo=mongoose.models.CaseStudyPromo||mongoose.model("CaseStudyPromo",bannerSchema);

export default CaseStudyPromo;