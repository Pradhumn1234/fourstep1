import BlogQuestion from "@/models/admin/blog copy/BlogQuestion";
const uploadDirectory = "./public/uploads/images";
import path from "path";
import fs from "fs";
import SubQuestions from "@/models/admin/blog copy/SubQuestions";

const blogquestionApi = async (req, res) => {
  const { quesId } = req.query;

  if (req.method === "DELETE") {
    try {
      // Fetch the BlogQuestion data by ID
      const data = await BlogQuestion.findById({ _id: quesId });

      if (!data) {
        return res.status(404).json({ message: "Question not found for the given ID!" });
      }

      // Delete files if 'filename' property exists
      if (data.hasOwnProperty("filename")) {
        const files = data.filename;
        if (files && Array.isArray(files)) {
          for (const file of files) {
            // Use fs.unlinkSync for synchronous file deletion or use fs.promises.unlink for async
            const filePath = path.join(uploadDirectory, file);
            if (fs.existsSync(filePath)) {
              fs.unlinkSync(filePath);
            }
          }
        }
      }

      console.log("Files deleted from:", data.filename);

      // Check if 'blogSubQuestion' exists and delete the related sub-question
      if (data.hasOwnProperty("blogSubQuestion") && data.blogSubQuestion) {
        await SubQuestions.findByIdAndDelete({ _id: data.blogSubQuestion });
        console.log("Sub-question deleted with ID:", data.blogSubQuestion);
      }

      // Delete the BlogQuestion itself
      await BlogQuestion.findByIdAndDelete({ _id: quesId });
      return res.status(200).json({ message: "Question deleted successfully" });

    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
};

export default blogquestionApi;
