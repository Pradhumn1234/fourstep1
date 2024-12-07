import BlogQuestion from "@/models/admin/blog copy/BlogQuestion";
const blogquestionApi = async (req, res) => {
    const {blog}=req.query;
    try {
      const data1 = await BlogQuestion.find({blog}); 
      if (!data1) {
          return res.status(404).json({ message: "data not found" });
      }
      return res
        .status(200)
        .json({ message: "Question is successfully updated", data1 });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  
};

export default blogquestionApi;
