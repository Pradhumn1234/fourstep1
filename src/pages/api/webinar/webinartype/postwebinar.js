// src/pages/api/admin/webinar/webinartype/postwebinar.js
import dbConnect from "@/utils/db";

import WebsiteWebinar from "@/models/admin/webinar/webinartypes";
export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const newWebinarType = new WebsiteWebinar({ name: req.body.name });
      const savedWebinarType = await newWebinarType.save();
      return res.status(201).json(savedWebinarType);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
