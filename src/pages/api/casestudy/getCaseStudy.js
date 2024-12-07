import dbConnect from "@/utils/db";
import CaseStudy from "@/models/admin/casestudy/casestudy";
export default async function handler(req, res) {
  await dbConnect();
  const { title } = req.query;
  try {
    const testimonials = await CaseStudy.findOne({ title: title }).populate(
      "overview faq seo chalenges result visuals"
    );
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
