// src/pages/api/admin/webinar/departments/getdepartment.js
import webinardepartment from "@/models/admin/webinar/departments";
import dbConnect from "@/utils/db";


export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const departments = await webinardepartment.find({});
      return res.status(200).json(departments);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
