
import dbConnect from "@/utils/db";
import multer from "multer";
import path from "path";
import fs from "fs";
import Webinar from "@/models/admin/webinar/Webinar";

// Set up storage configuration for multer
const uploadDirectory = "./public/uploads/webinar";
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDirectory);
  },
  filename: (req, file, cb) => {
    cb(null,  Date.now() + path.extname(file.originalname)); // Save the original file name
  },
});

const upload = multer({ storage });


// Use multer middleware to handle file uploads
export default async function handler(req, res) {
  await dbConnect(); // Connect to the MongoDB database

  const { method } = req;

  if (method === "POST") {
    upload.single("file")(req, res, async (err) => {
      if (err) {
        console.error("Multer Error:", err);
        return res
          .status(500)
          .json({ error: "Error uploading image", details: err.message });
      }

      try {
        // Destructure the fields from req.body
        const {
           altText,
            title,
            link,
            subtitle,
            description,
            selectType,
            toolsAndSoftware,
            topic,
            speaker,
            department,
            industry,
            language ,time,date} = req?.body;
        if (!req.file) {
          return res.status(400).json({ error: "No file uploaded" });
        }

        const filename = req.file.filename; // Use the original filename

        // Create a new testimonial entry
        const newTestimonial = new Webinar({
            altText,
            title,
            link,
            subtitle,
            time,date,
            description,
            selectType,
            toolsAndSoftware,
            topic,
            speaker,
            department,
            industry,
            language,
          filename,
          path: `/uploads/webinar/${filename}`, // Save the image filename
        });

        // Save the testimonial to the database
        const savedTestimonial = await newTestimonial.save();

        res.status(201).json(savedTestimonial); // Return the saved testimonial
      } catch (error) {
        console.error("Error saving testimonial:", error);
        res
          .status(500)
          .json({ error: "Error saving testimonial", details: error.message });
      }
    });
  } else if (method === "GET") {
    try {
      const testimonials = await Webinar.find({}).populate("highlights overview speaker") ;
      res.status(200).json(testimonials);
    } catch (error) {
      console.error("Error fetching the testimonials:", error);
      res.status(500).json({
        error: "Error fetching the testimonials",
        details: error.message,
      });
    }
  }  else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
export const config = {
  api: {
    bodyParser: false, // Disable default body parsing
  },
};

