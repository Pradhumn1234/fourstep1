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
        ref:"BlogPromoBanner"
    }
},{timestamps:true})

const BlogPromo=mongoose.models.BlogPromo || mongoose.model("BlogPromo",blogpromoSchema);
export default BlogPromo;