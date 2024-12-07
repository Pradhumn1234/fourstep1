import Bloginfo from "@/models/admin/blog/basicinfo";

async function handler(req, res) {
  const { blog } = req.query;
  if (req.method === "PUT") {
  } else if (req.method === "DELETE") {
  } else {
    try {
      const blogs = await Bloginfo.find({ _id: blog });

      if (!blogs) {
        return res.status(404).json({
          success: false,
          message: "No blogs found",
        });
      }
      res.status(200).json({ success: true, data: blogs });
    } catch (error) {
      console.error("Error fetching blogs:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }
}

export default handler;
export const config = {
  api: { bodyParser: false }, // Disable Next.js default body parsing
};
