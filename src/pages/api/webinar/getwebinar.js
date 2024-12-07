import dbConnect from "@/utils/db";
import Webinar from "@/models/admin/webinar/Webinar";

export default async function handler(req, res) {
  await dbConnect();
  const { title } = req.query;
  try {
    const testimonials = await Webinar.findOne({ title: title }).populate(
      "overview highlights webinarFaq webinarSeo speaker"
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
