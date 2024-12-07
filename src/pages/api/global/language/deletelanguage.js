import dbConnect from "@/utils/db";
import Language from "@/models/admin/global/language";
export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "DELETE") {
    try {
      const { id } = req.body;
      await Language.findByIdAndDelete(id);
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  }
}
