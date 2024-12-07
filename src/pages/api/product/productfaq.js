import ProductFaq from "@/models/admin/product/Faq";
import Product from "@/models/admin/product/product";
const blogquestionApi = async (req, res) => {
  if (req.method === "POST") {
    const {questions,product}=req.body; 
    try {
      const data1 = await ProductFaq.findOne({product});
      let data;
      
      if (!data1) {
        data = await ProductFaq.create({questions,product});
        if (!data) {
          return res.status(300).json({ message: "somthing went wrong" });
        }
        await Product.findByIdAndUpdate({_id:product},{$set:{faq:data?._id}});
        return res
          .status(201)
          .json({ message: "Question is successfully created", data });
      }
      data = await ProductFaq.findOneAndReplace({ product }, {questions,product});
      if (!data) {
        return res.status(300).json({ message: "somthing went wrong" });
      }
      await Product.findByIdAndUpdate({_id:product},{$set:{faq:data?._id}});
      // console.log("req---------req.body---------------->   ",data)
      
      return res
        .status(200)
        .json({ message: "Question is successfully updated", data });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  } else {
    try {
      const data = await ProductFaq.find({});
      if (!data) {
        return res.status(400).json({ message: "data is not found" });
      }
      return res
        .status(200)
        .json({ message: "Question is successfully found", data });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }
};

export default blogquestionApi;
