import dbConnect from "@/utils/db";
import multer from "multer";
import path from "path";
import fs from "fs";
import VideoUser from "@/models/admin/videos/videouser";
// Create the uploads directory if it doesn't exist
const uploadsDir = "./public/uploads/VideoUserImages"; // Updated directory name
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure multer for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

export const config = {
  api: {
    bodyParser: false, // Disable body parsing, as multer will handle it
  },
};

const handler = upload.single("image"); // Expecting a single image field named 'image'

const userHandler = async (req, res) => {
  await dbConnect();

  if (req.method === "POST") {
    handler(req, res, async (err) => {
      if (err) {
        return res.status(500).json({ error: "Image upload failed." });
      }

      const { name, email, phone, description, role, jobProfile, alt } =
        req.body;

      // Create a new VideoUser instance
      const newVideoUser = new VideoUser({
        name,
        email,
        phone,
        description,
        role,
        jobProfile,
        image: {
          filename: req.file.filename,
          path: `/uploads/VideoUserImages/${req.file.filename}`, // Updated path
        },
        alt,
      });

      try {
        await newVideoUser.save();
        return res
          .status(201)
          .json({ message: "VideoUser created successfully!" });
      } catch (error) {
        return res
          .status(500)
          .json({ error: "Failed to save VideoUser data." });
      }
    });
  } else if (req.method === "GET") {
    const { id } = req.query;

    try {
      if (!id) {
        return res
          .status(300)
          .json({ error: "Missing required parameter: id" });
      }
      const user = await VideoUser.findById({ _id: id });

      if (!user) {
        return res.status(404).json({ error: "VideoUser not found." });
      }

      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ error: "Failed to fetch user(s)." });
    }
  } else if (req.method === "PUT") {
    handler(req, res, async (err) => {
      if (err) {
        return res.status(500).json({ error: "Image upload failed." });
      }
      const { name, email, phone, description, role, jobProfile, alt } =
        req.body;
      const { id } = req.query;

      const data = await VideoUser.findOne({ _id: id });
      if (data) {
        fs.unlinkSync(path.join(uploadsDir, data?.image?.filename));
      }

      try {
        const updatedUser = await VideoUser.findOneAndReplace(
          { _id: id },
          {
            name,
            email,
            phone,
            description,
            role,
            jobProfile,
            image: {
              filename: req.file.filename,
              path: `/uploads/VideoUserImages/${req.file.filename}`, // Updated path
            },
            alt,
          },
          { new: true }
        );

        if (!updatedUser) {
          return res.status(404).json({ error: "VideoUser not found." });
        }
        return res.status(200).json({
          message: "VideoUser updated successfully!",
          user: updatedUser,
        });
      } catch (error) {
        return res
          .status(500)
          .json({ error: "Failed to update VideoUser data." });
      }
    });
  } else if (req.method === "DELETE") {
    const { userId } = req.query;
    const data = await VideoUser.findOne({ _id: userId });
    if (data) {
      fs.unlinkSync(path.join(uploadsDir, data?.image?.filename));
    }

    try {
      const deletedUser = await VideoUser.findByIdAndDelete({ _id: userId });

      if (!deletedUser) {
        return res.status(404).json({ error: "VideoUser not found." });
      }
      return res
        .status(200)
        .json({ message: "VideoUser deleted successfully!" });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Failed to delete VideoUser.", error });
    }
  } else {
    res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default userHandler;
