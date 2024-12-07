import dbConnect from "@/utils/db";
import Language from "@/models/admin/global/language";
export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "POST") {
    try {
      const { name } = req.body;
      const newLanguage = await Language.create({ name });
      res.status(201).json({ success: true, data: newLanguage });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  }
}
