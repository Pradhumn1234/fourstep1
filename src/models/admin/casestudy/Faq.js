const { default: mongoose } = require("mongoose");
const miniquestionSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    information:{
        type:String
    }
})

const FaqWebinarSchema=new mongoose.Schema({
  questions:[ miniquestionSchema ],
  casestudy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"CaseStudy"

  }
},{
    timestamps:true
});

const CaseFaq=mongoose.models.CaseFaq || mongoose.model("CaseFaq",FaqWebinarSchema);

export default CaseFaq;