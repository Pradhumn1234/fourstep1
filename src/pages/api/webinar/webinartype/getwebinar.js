// src/pages/api/admin/webinar/webinartype/getwebinar.js
import dbConnect from "@/utils/db";
import WebsiteWebinar from "@/models/admin/webinar/webinartypes"

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const webinarTypes = await WebsiteWebinar.find({});
      return res.status(200).json(webinarTypes);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
