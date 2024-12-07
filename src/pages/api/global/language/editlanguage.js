import dbConnect from "@/utils/db";
import Language from "@/models/admin/global/language";

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "PUT") {
    try {
      const { id, name } = req.body;
      const updatedLanguage = await Language.findByIdAndUpdate(id, { name }, { new: true });
      res.status(200).json({ success: true, data: updatedLanguage });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  }
}
