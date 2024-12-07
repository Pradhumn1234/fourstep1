import FaqWebinar from "@/models/admin/webinar/FaqWebinar";
import Webinar from "@/models/admin/webinar/Webinar";
const blogquestionApi = async (req, res) => {
  if (req.method === "POST") {
    const {questions,webinar}=req.body;
    // console.log("req---------req.body---------------->   ",questions)
    // console.log("blog---------req.body---------------->   ",blog)

    
    try {
      const data1 = await FaqWebinar.findOne({webinar});
      let data;
      
      if (!data1) {
        data = await FaqWebinar.create({questions,webinar});
        if (!data) {
          return res.status(300).json({ message: "somthing went wrong" });
        }
        await Webinar.findByIdAndUpdate({_id:webinar},{$set:{webinarFaq:data?._id}});
        return res
          .status(201)
          .json({ message: "Question is successfully created", data });
      }
      data = await FaqWebinar.findOneAndReplace({ webinar }, {questions,webinar});
      if (!data) {
        return res.status(300).json({ message: "somthing went wrong" });
      }
      await Webinar.findByIdAndUpdate({_id:webinar},{$set:{webinarFaq:data?._id}});
      // console.log("req---------req.body---------------->   ",data)
      
      return res
        .status(200)
        .json({ message: "Question is successfully updated", data });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  } else {
    try {
      const data = await FaqWebinar.find({});
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
