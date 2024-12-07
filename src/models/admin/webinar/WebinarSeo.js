const { default: mongoose, Mongoose } = require("mongoose");


const WebinarSeoSchema=new mongoose.Schema({
    canonicalUrl:{
        type:String
    },
    tags:{
        type:String,
    },
    keyword:{
        type:String
    },
    webinar:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Webinar"
    
      }
},{})

const WebinarSeo=mongoose.models.WebinarSeo || mongoose.model("WebinarSeo",WebinarSeoSchema);
export default WebinarSeo;