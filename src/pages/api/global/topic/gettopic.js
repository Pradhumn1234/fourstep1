import dbConnect from "@/utils/db";
import Topic from "@/models/admin/global/topics";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const topics = await Topic.find({});
      res.status(200).json({ success: true, result: topics });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
