import dbConnect from "@/utils/db";
import Industry from "@/models/admin/global/industries";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "PUT") {
    try {
      const { id } = req.query; // Get the ID from the query string
      const { name } = req.body; // Get the updated name from the body

      // Update the industry
      const updatedIndustry = await Industry.findByIdAndUpdate(
        id,
        { name },
        { new: true, runValidators: true } // Return the updated document
      );

      if (!updatedIndustry) {
        return res
          .status(404)
          .json({ success: false, message: "Industry not found" });
      }

      res.status(200).json({ success: true, data: updatedIndustry });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}
