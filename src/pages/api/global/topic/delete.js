import dbConnect from "@/utils/db";
import Topic from "@/models/admin/global/topics";

export default async function handler(req, res) {
  const { id } = req.query;
  await dbConnect();

  if (req.method === "DELETE") {
    try {
      const deletedTopic = await Topic.findByIdAndDelete(id);
      if (!deletedTopic) {
        return res
          .status(404)
          .json({ success: false, message: "Topic not found" });
      }
      res.status(200).json({ success: true, data: deletedTopic });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  } else {
    res.setHeader("Allow", ["DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
