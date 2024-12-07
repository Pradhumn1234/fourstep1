const { default: mongoose, Mongoose } = require("mongoose");


const BlogSeoDetailSchema=new mongoose.Schema({
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
    blog:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"BlogDetail"
    
      }
},{})

const BlogSeoDetail=mongoose.models.BlogSeoDetail || mongoose.model("BlogSeoDetail",BlogSeoDetailSchema);
export default BlogSeoDetail;