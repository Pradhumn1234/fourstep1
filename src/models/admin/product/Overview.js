const { default: mongoose } = require("mongoose");


const overviewSchema=new mongoose.Schema({
    description:{
        type:String
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    }

},{timestamps:true});

const ProductOverview=mongoose.models.ProductOverview||mongoose.model("ProductOverview",overviewSchema);
export default ProductOverview;