import dbConnect from "@/utils/db";
import Language from "@/models/admin/global/language";

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "GET") {
    try {
      const languages = await Language.find();
      res.status(200).json({ success: true, data: languages });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  }
}
