import dbConnect from "@/utils/db";
import Topic from "@/models/admin/global/topics";

export default async function handler(req, res) {
  const { id } = req.query;
  await dbConnect();

  if (req.method === 'PUT') {
    try {
      const { name } = req.body;
      const updatedTopic = await Topic.findByIdAndUpdate(id, { name }, { new: true });
      if (!updatedTopic) {
        return res.status(404).json({ success: false, message: "Topic not found" });
      }
      res.status(200).json({ success: true, data: updatedTopic });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  } else {
    res.setHeader("Allow", ["PUT"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
