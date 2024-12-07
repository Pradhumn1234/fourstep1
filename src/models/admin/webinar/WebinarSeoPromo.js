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
        ref:"WebinarPromo"
    }
},{timestamps:true})

const WebinarSeoPromo=mongoose.models.WebinarSeoPromo || mongoose.model("WebinarSeoPromo",blogpromoSchema);
export default WebinarSeoPromo;