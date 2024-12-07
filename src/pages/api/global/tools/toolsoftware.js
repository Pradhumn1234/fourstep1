import dbConnect from "@/utils/db";
import Tools from "@/models/admin/global/toolsoftware";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const { name } = req.body;
      if (!name) {
        return res
          .status(400)
          .json({ success: false, error: "Name is required" });
      }

      const newTool = await Tools.create({ name });
      res.status(201).json({ success: true, data: newTool });
    } catch (error) {
      console.error("Error creating tool:", error);
      res
        .status(500)
        .json({ success: false, error: "Server error: " + error.message });
    }
  } else if (req.method === "GET") {
    try {
      const tools = await Tools.find({});
      res.status(200).json({ success: true, data: tools });
    } catch (error) {
      console.error("Error fetching tools:", error);
      res
        .status(500)
        .json({ success: false, error: "Server error: " + error.message });
    }
  } else if (req.method === "PUT") {
    try {
      const { id, name } = req.body; // Accessing from the body
      if (!id || !name) {
        return res
          .status(400)
          .json({ success: false, error: "ID and Name are required" });
      }

      const updatedTool = await Tools.findByIdAndUpdate(
        id,
        { name },
        { new: true }
      );
      if (!updatedTool) {
        return res
          .status(404)
          .json({ success: false, error: "Tool not found" });
      }

      res.status(200).json({ success: true, data: updatedTool });
    } catch (error) {
      console.error("Error updating tool:", error);
      res
        .status(500)
        .json({ success: false, error: "Server error: " + error.message });
    }
  } else if (req.method === "DELETE") {
    try {
      const { id } = req.query;
      if (!id) {
        return res
          .status(400)
          .json({ success: false, error: "ID is required" });
      }

      const deletedTool = await Tools.findByIdAndDelete(id);
      if (!deletedTool) {
        return res
          .status(404)
          .json({ success: false, error: "Tool not found" });
      }

      res.status(200).json({ success: true, message: "Tool deleted" });
    } catch (error) {
      console.error("Error deleting tool:", error);
      res
        .status(500)
        .json({ success: false, error: "Server error: " + error.message });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}
