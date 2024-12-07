import dbConnect from "@/utils/db";
import Industry from "@/models/admin/global/industries";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "DELETE") {
    try {
      const { id } = req.query;

      if (!id) {
        return res
          .status(400)
          .json({ success: false, message: "ID is required" });
      }

      const deletedIndustry = await Industry.findByIdAndDelete(id);

      if (!deletedIndustry) {
        return res
          .status(404)
          .json({ success: false, message: "Industry not found" });
      }

      res
        .status(200)
        .json({ success: true, message: "Industry deleted successfully" });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}
