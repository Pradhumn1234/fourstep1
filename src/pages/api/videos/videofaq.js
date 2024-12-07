import VideoFaq from "@/models/admin/videos/Faq";
import Videos from "@/models/admin/videos/videomain";

const blogquestionApi = async (req, res) => {
  if (req.method === "POST") {
    const {questions,video}=req.body; 
    try {
      const data1 = await VideoFaq.findOne({video});
      let data;
      
      if (!data1) {
        data = await VideoFaq.create({questions,video});
        if (!data) {
          return res.status(300).json({ message: "somthing went wrong" });
        }
        await Videos.findByIdAndUpdate({_id:video},{$set:{faq:data?._id}});
        return res
          .status(201)
          .json({ message: "Question is successfully created", data });
      }
      data = await VideoFaq.findOneAndReplace({ video }, {questions,video});
      if (!data) {
        return res.status(300).json({ message: "somthing went wrong" });
      }
      await Videos.findByIdAndUpdate({_id:video},{$set:{faq:data?._id}});
      // console.log("req---------req.body---------------->   ",data)
      
      return res
        .status(200)
        .json({ message: "Question is successfully updated", data });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  } else {
    try {
      const data = await VideoFaq.find({});
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
