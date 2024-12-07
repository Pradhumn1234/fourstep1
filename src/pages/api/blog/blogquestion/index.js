import BlogQuestion from "@/models/admin/blog copy/BlogQuestion";
import SubQuestions from "@/models/admin/blog copy/SubQuestions";
const blogquestionApi = async (req, res) => {
  if (req.method === "POST") {
    const { questions, blog } = req.body;
    try {
        const data1=await BlogQuestion.findById({_id:blog});
        const data2=data1?.blogSubQuestion;
        if(data2){
            const data = await SubQuestions.findOneAndUpdate({blogQuestion:blog},{$set:{ questions,blogQuestion: blog }});
            if(!data){
                return res.status(301).json({message:"something went wrong"});
            }
            await BlogQuestion.findOneAndUpdate({_id:blog},{$set:{blogSubQuestion:data?._id}})
            return res
        .status(200)
        .json({ message: "Question is successfully updated", data });
        }
        const data3 = await SubQuestions.create({ questions,blogQuestion: blog });
        if(!data3){
            return res.status(301).json({message:"something went wrong"});
        }
        await BlogQuestion.findOneAndUpdate({_id:blog},{$set:{blogSubQuestion:data3?._id}})
      
      
      return res
        .status(201)
        .json({ message: "Question is successfully created", data3 });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }
  else{
    const {blog}=req.query;
    try {
        const data1=await BlogQuestion.findById({_id:blog}).populate("blogSubQuestion");
        if(!data1){
            return res.status(401).json({message:"data not found"});
        }
        return res
        .status(201)
        .json({ message: "Question is successfully found", data1 });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error });
    }
  }
};

export default blogquestionApi;
