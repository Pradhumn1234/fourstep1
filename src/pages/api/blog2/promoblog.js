import dbConnect from "@/utils/db";
import path from "path";
import fs from "fs";
import multer from "multer";
import Bloginfo from "@/models/admin/blog/basicinfo";

// Ensure the upload directory exists
const uploadDirectory = "./public/uploads/blogimage";
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDirectory);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Generate unique filename
  },
});

const upload = multer({ storage });

export const config = {
  api: { bodyParser: false }, // Disable Next.js default body parsing
};

async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    // Wrap Multer in a Promise for error handling
    const multerUpload = () =>
      new Promise((resolve, reject) => {
        upload.single("image")(req, {}, (err) => {
          if (err) reject(err);
          else resolve();
        });
      });

    try {
      await multerUpload();

      const { title, subtitle, description, altText } = req.body;

      // Validate required fields
      if (!title || !subtitle || !description || !req.file) {
        return res
          .status(400)
          .json({ success: false, message: "All fields are required" });
      }

      const newBlog = await Bloginfo.create({
        title,
        subtitle,
        description,
        path: `/uploads/blogimage/${req.file.filename}`,
        filename: req.file.filename,
        altText,
      });

      res.status(201).json({
        success: true,
        message: "Blog created successfully",
        data: newBlog,
      });
    } catch (error) {
      console.error("Error during blog creation:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error", error });
    }
  } else if (req.method === "GET") {
    try {
      const blogs = await Bloginfo.find().sort({ createdAt: -1 });

      if (!blogs || blogs.length === 0) {
        return res.status(404).json({
          success: false,
          message: "No blogs found",
        });
      }

      res.status(200).json({ success: true, data: blogs });
    } catch (error) {
      console.error("Error fetching blogs:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}

export default handler;

