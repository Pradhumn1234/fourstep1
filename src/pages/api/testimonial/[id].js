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
    const ext = path.extname(file.originalname);
    const fileName = `${file.fieldname}-${Date.now()}${ext}`;
    cb(null, fileName); // Save the original file name
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
        const files1 = await Testimonial.findOne({ _id: id });
        let file;
        if (files1) {
          fs.unlinkSync(path.join(uploadDirectory, files1.filename));
           file = await Testimonial.findOneAndReplace({ _id: id }, updateData);
          return res.status(200).json({ data: file });
        }
           // Update the testimonial in the database
        if (!files1) {
          return res.status(404).json({ error: "Testimonial not found" });
        } 
      } catch (error) {
        console.error("Error updating testimonial:", error);
        res.status(500).json({
          error: "Error updating testimonial",
          details: error.message,
        });
      }
    });
  }else if(method === "GET") {
    const { id } = req.query;

    try {

        const data=await Testimonial.findOne({_id:id});
        if(!data){
            return res.status(404).json({
                error: " testimonial data is not found",
              });
        }

        return res.status(200).json({
            error: "testimonial data is found successfully",
            data,
          });
        
    } catch (error) {
        return res.status(500).json({
            error: "Error updating testimonial",
            details: error.message,
          });
    }
  }
  else{
    res.status(405).json({ error: "Method not allowed" });
  }
}