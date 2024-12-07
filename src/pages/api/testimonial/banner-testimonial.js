import dbConnect from "@/utils/db"; // Ensure this is correctly importing your db connection
import multer from "multer";
import fs from "fs";
import TestimonialBanner from "@/models/admin/Testimonial/testimonialbanner";
// Import the model
// Set up storage configuration for multer
const uploadDirectory = "./public/uploads/Testimonialbanner";
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDirectory);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Save the original file name
  },
});

const upload = multer({ storage });

export const config = {
  api: {
    bodyParser: false, // Disable default body parsing
  },
};

// Use multer middleware to handle file uploads
export default async function handler(req, res) {
  await dbConnect(); // Connect to the MongoDB database

  const { method } = req;

  if (method === "POST") {
    // Handle file upload and saving
    upload.single("image")(req, res, async (err) => {
      if (err) {
        console.error("Multer Error:", err);
        return res
          .status(500)
          .json({ error: "Error uploading image", details: err.message });
      }

      try {
        if (!req.file) {
          return res.status(400).json({ error: "No file uploaded" });
        }

        const { alt } = req.body;
        const filename = req.file.filename;

        const newTestimonial = new TestimonialBanner({
          path: `/uploads/Testimonialbanner/${filename}`,
          filename,
          alt,
        });

        const savedTestimonial = await newTestimonial.save();

        res.status(201).json(savedTestimonial);
      } catch (error) {
        console.error("Error saving testimonial:", error);
        res
          .status(500)
          .json({ error: "Error saving testimonial", details: error.message });
      }
    });
  } else if (method === "GET") {
    // Fetch all testimonials
    try {
      const testimonials = await TestimonialBanner.find({});
      res.status(200).json(testimonials);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      res.status(500).json({ error: "Error fetching testimonials" });
    }
  } else if (method === "DELETE") {
    // Handle deletion
    const { id } = req.query;
    try {
      const testimonial = await TestimonialBanner.findById(id);
      if (!testimonial) {
        return res.status(404).json({ error: "Testimonial not found" });
      }

      // Delete the image file from the file system
      const filePath = `./public${testimonial.path}`;
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath); // Remove the image file
      }

      // Remove testimonial from the database
      await TestimonialBanner.findByIdAndDelete(id);

      res.status(200).json({ message: "Testimonial deleted successfully" });
    } catch (error) {
      console.error("Error deleting testimonial:", error);
      res.status(500).json({ error: "Error deleting testimonial" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
