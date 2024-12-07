import dbConnect from "@/utils/db";
import Videos from "@/models/admin/videos/videomain";

export default async function handler(req, res) {
  await dbConnect();
  const { title } = req.query;
  try {
    const testimonials = await Videos.findOne({ title: title }).populate(
      "overview  user faq seo highlight"
    );
    if (!testimonials) {
      res.status(400).json({
        error: "not found",
      });
    }
    res.status(200).json(testimonials);
  } catch (error) {
    console.error("Error fetching the testimonials:", error);
    res.status(500).json({
      error: "Error fetching the testimonials",
      details: error.message,
    });
  }
}
export const config = {
  api: {
    bodyParser: false,
  },
};
