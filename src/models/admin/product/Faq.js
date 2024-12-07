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
  product:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Product"

  }
},{
    timestamps:true
});

const ProductFaq=mongoose.models.ProductFaq || mongoose.model("ProductFaq",FaqWebinarSchema);

export default ProductFaq;