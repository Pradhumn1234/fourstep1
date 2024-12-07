import dbConnect from "@/utils/db";
import VideoUser from "@/models/admin/videos/videouser";

const userHandler = async (req, res) => {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const users = await VideoUser.find({});
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ error: "Failed to fetch user(s)." });
    }
  } else {
    res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default userHandler;
