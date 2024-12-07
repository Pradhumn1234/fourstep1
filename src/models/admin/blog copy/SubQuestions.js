const { default: mongoose } = require("mongoose");
const miniquestionSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    information:{
        type:String,
        required:true
    }
})

const SubQuestionsSchema=new mongoose.Schema({
  questions:[ miniquestionSchema ],
  blogQuestion:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"BlogQuestion"

  }
},{
    timestamps:true
});

const SubQuestions=mongoose.models.SubQuestions || mongoose.model("SubQuestions",SubQuestionsSchema);

export default SubQuestions;