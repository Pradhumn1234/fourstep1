import dbConnect from "@/utils/db";
import multer from "multer";
import path from "path";
import fs from "fs";
import Webinar from "@/models/admin/webinar/Webinar";
import Overview from "@/models/admin/webinar/Overview";
import KeyAndHighLights from "@/models/admin/webinar/KeyAndHighLights";

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
    cb(null, Date.now() + path.extname(file.originalname)); // Save the original file name
  },
});

const upload = multer({ storage });

// Use multer middleware to handle file uploads
export default async function handler(req, res) {
  await dbConnect(); // Connect to the MongoDB database

  const { method } = req;
  const { webinar } = req.query;
  if (method === "GET") {
    try {
      const testimonials = await Webinar.find({ _id: webinar }).populate("overview highlights webinarFaq webinarSeo");
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
    upload.single("file")(req, res, async (err) => {
      if (err) {
        console.error("Multer Error:", err);
        return res
          .status(500)
          .json({ error: "Error uploading image", details: err.message });
      }
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
        language,
        date,time
      } = req.body;

      try {
        const updateData = {
          altText,
          title,
          date,time,
          link,
          subtitle,
          description,
          selectType,
          toolsAndSoftware,
          topic,
          speaker,
          department,
          industry,
          language,
        };

        // Check if a new image file is uploaded
        if (req.file) {
          const filename = req.file.filename;
          updateData.filename = filename;
          updateData.path = `/uploads/webinar/${filename}`; // Update the image path
        }

        // Update the testimonial in the database

        const data = await Webinar.findOne({ _id: webinar });
        if (data) {
          fs.unlinkSync(path.join(uploadDirectory, data?.filename));
        }

        const updatedTestimonial = await Webinar.findOneAndUpdate(
          { _id: webinar },
          {$set:{updateData}}
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
    try {
      const data = await Webinar.findOne({ _id: webinar });
      if (data) {
      await Overview.findByIdAndDelete({_id:data?.overview});
      await KeyAndHighLights.findByIdAndDelete({_id:data?.highlights})
      fs.unlinkSync(path.join(uploadDirectory, data?.filename));
      }
      const deletedTestimonial = await Webinar.findByIdAndDelete({_id:webinar});
      if (!deletedTestimonial) {
        return res.status(404).json({ error: "Testimonial not found" });
      }
      res.status(200).json({message:"deleted"}); // No content
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
export const config = {
  api: {
    bodyParser: false, // Disable default body parsing
  },
};
