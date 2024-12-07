
import BlogQuestion from "@/models/admin/blog copy/BlogQuestion";
const blogquestionApi = async (req, res) => {
  
  const {quesId}=req.query;
  if (!quesId) {
    return res.status(300).json({ message: "quesId is required !!!!!" });
  }
  if (req.method === "PUT") {
    const {questions,blog}=req.body;
  const {title,information}=questions;
  
    try {
      const data=await BlogQuestion.findByIdAndUpdate({_id:quesId},{$set:{title,information,blog}})
      if (!data) {
        return res.status(300).json({ message: "something went wrong" });
      }
      return res
      .status(200)
      .json({ message: "Question is successfully updated", data });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }else {
    try {
      const data = await BlogQuestion.findById({_id:quesId});
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
