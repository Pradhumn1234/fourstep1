import dbConnect from "@/utils/db";
import Topic from "@/models/admin/global/topics";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const { name } = req.body;
      const newTopic = await Topic.create({ name });
      res.status(201).json({ success: true, data: newTopic });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
