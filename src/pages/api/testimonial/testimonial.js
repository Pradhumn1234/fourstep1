

import Testimonial from "@/models/admin/Testimonial/Testimonialmodel";
import dbConnect from "@/utils/db";
import multer from "multer";
import path from "path";
import fs from "fs";

// Set up storage configuration for multer
const uploadDirectory = "./public/uploads/Testimonial";
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
    upload.single("image")(req, res, async (err) => {
      if (err) {
        console.error("Multer Error:", err);
        return res
          .status(500)
          .json({ error: "Error uploading image", details: err.message });
      }

      try {
        // Destructure the fields from req.body
        const { name, alt, designation, description } = req.body;

        // Check if req.file exists
        if (!req.file) {
          return res.status(400).json({ error: "No file uploaded" });
        }

        const filename = req.file.filename; // Use the original filename

        // Create a new testimonial entry
        const newTestimonial = new Testimonial({
          name,
          alt,
          designation,
          description,
          filename,
          path: `/uploads/Testimonial/${filename}`, // Save the image filename
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
      const testimonials = await Testimonial.find({});
      res.status(200).json(testimonials);
    } catch (error) {
      console.error("Error fetching the testimonials:", error);
      res.status(500).json({
        error: "Error fetching the testimonials",
        details: error.message,
      });
    }
  } else if (method === "PUT") {
    // Handle update (edit) requests
    upload.single("image")(req, res, async (err) => {
      if (err) {
        console.error("Multer Error:", err);
        return res
          .status(500)
          .json({ error: "Error uploading image", details: err.message });
      }

      const { id } = req.query; // Get testimonial ID from the query
      const { name, alt, designation, description } = req.body;

      try {
        const updateData = {
          name,
          alt,
          designation,
          description,
        };

        // Check if a new image file is uploaded
        if (req.file) {
          const filename = req.file.filename;
          updateData.filename = filename;
          updateData.path = `/uploads/Testimonial/${filename}`; // Update the image path
        }

        // Update the testimonial in the database
        const updatedTestimonial = await Testimonial.findByIdAndUpdate(
          id,
          updateData,
          { new: true }
        );

        if (!updatedTestimonial) {
          return res.status(404).json({ error: "Testimonial not found" });
        }

        res.status(200).json(updatedTestimonial); // Return the updated testimonial
      } catch (error) {
        console.error("Error updating testimonial:", error);
        res.status(500).json({
          error: "Error updating testimonial",
          details: error.message,
        });
      }
    });
  } else if (method === "DELETE") {
    // Handle delete requests
    const { id } = req.query; // Get testimonial ID from the query

    try {
      const deletedTestimonial = await Testimonial.findByIdAndDelete(id);
      if (!deletedTestimonial) {
        return res.status(404).json({ error: "Testimonial not found" });
      }
      res.status(204).send(); // No content
    } catch (error) {
      console.error("Error deleting testimonial:", error);
      res.status(500).json({
        error: "Error deleting testimonial",
        details: error.message,
      });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
