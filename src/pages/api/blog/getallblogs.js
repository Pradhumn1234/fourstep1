import dbConnect from "@/utils/db";
import BlogDetail from "@/models/admin/blog copy/BlogDetail";

export default async function handler(req, res) {
  await dbConnect();
  const { title } = req.query;

  try {
    console.log("Fetching BlogDetails for title:", title);

    const BlogDetails = await BlogDetail.findOne({ title: title }).populate({
      path: "blogQuestions",
      populate: {
        path: "blogSubQuestion",
      },
    });
    console.log("Fetched BlogDetails:", BlogDetails);

    if (!BlogDetails) {
      return res.status(404).json({ error: "BlogDetail not found" });
    }

    res.status(200).json(BlogDetails);
  } catch (error) {
    console.error("Error fetching the BlogDetails:", error);
    res.status(500).json({
      error: "Error fetching the BlogDetails",
      details: error.message || "Unknown error",
    });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
