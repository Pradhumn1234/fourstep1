// src/pages/api/admin/webinar/webinartype/editwebinar.js
import dbConnect from "@/utils/db";
import WebsiteWebinar from "@/models/admin/webinar/webinartypes"

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "PUT") {
    try {
      const { id, name } = req.body;
      const updatedWebinarType = await WebsiteWebinar.findByIdAndUpdate(
        id,
        { name },
        { new: true } // Return the updated document
      );
      return res.status(200).json(updatedWebinarType);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
