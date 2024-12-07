const { default: mongoose } = require("mongoose");
import "./SubQuestions";
const blogQuestionSchema=new mongoose.Schema({
  title:{
    type:String,
    required:true
},
information:{
    type:String
},
  blog:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"BlogDetail"

  },
  blogSubQuestion:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"SubQuestions"

  },
  filename:[String]

},{
    timestamps:true
});

const BlogQuestion=mongoose.models.BlogQuestion || mongoose.model("BlogQuestion",blogQuestionSchema);

export default BlogQuestion;