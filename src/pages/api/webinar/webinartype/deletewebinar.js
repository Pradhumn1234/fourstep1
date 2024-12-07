// src/pages/api/admin/webinar/webinartype/deletewebinar.js
import dbConnect from "@/utils/db";
import WebsiteWebinar from "@/models/admin/webinar/webinartypes"
export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "DELETE") {
    try {
      const { id } = req.body;
      await WebsiteWebinar.findByIdAndDelete(id);
      return res.status(204).json({});
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
