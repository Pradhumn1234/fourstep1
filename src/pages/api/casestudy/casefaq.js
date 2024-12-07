import CaseStudy from "@/models/admin/casestudy/casestudy";
import CaseFaq from "@/models/admin/casestudy/Faq";
const blogquestionApi = async (req, res) => {
  if (req.method === "POST") {
    const {questions,casestudy}=req.body; 
    try {
      const data1 = await CaseFaq.findOne({casestudy});
      let data;
      
      if (!data1) {
        data = await CaseFaq.create({questions,casestudy});
        if (!data) {
          return res.status(300).json({ message: "somthing went wrong" });
        }
        await CaseStudy.findByIdAndUpdate({_id:casestudy},{$set:{faq:data?._id}});
        return res
          .status(201)
          .json({ message: "Question is successfully created", data });
      }
      data = await CaseFaq.findOneAndReplace({ casestudy }, {questions,casestudy});
      if (!data) {
        return res.status(300).json({ message: "somthing went wrong" });
      }
      await CaseStudy.findByIdAndUpdate({_id:casestudy},{$set:{faq:data?._id}});
      // console.log("req---------req.body---------------->   ",data)
      
      return res
        .status(200)
        .json({ message: "Question is successfully updated", data });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  } else {
    try {
      const data = await CaseFaq.find({});
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
