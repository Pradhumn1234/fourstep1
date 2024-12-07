import multer from "multer";
import fs from "fs";
import path from "path";
import ProductScreenshot from "@/models/admin/product/Screenshot";

// Multer storage configuration
const uploadDirectory = "./public/uploads/product/screenshot";
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

const editApi = async (req, res) => {
  const { id } = req.query;
  if (!id) {
    return res.status(400).json({ success: false, message: "ID is required" });
  }

  if (req.method === "PUT") {
    // Use multer to handle the file upload
    upload.single("file")(req, res, async (err) => {
      if (err) {
        console.error("File upload error:", err);
        return res.status(400).json({ success: false, message: "File upload failed" });
      }

      try {
        const { title, description, product } = req.body;

        // Validate the required fields
        if (!title || !description || !req.file || !product) {
          return res.status(400).json({ success: false, message: "All fields are required" });
        }

        // Fetch the existing screenshot by ID
        const data = await ProductScreenshot.findById(id);
        if (!data) {
          return res.status(404).json({ success: false, message: "Data not found for the provided ID" });
        }

        // Delete the old screenshot file if it exists
        if (data.filename) {
          const filePath = path.join(uploadDirectory, data.filename);
          if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
          }
        }

        // Create a new screenshot record
        const newProductScreenshot = await ProductScreenshot.create({
          title,
          product,
          description,
          path: `/uploads/product/screenshot/${req.file.filename}`,
          filename: req.file.filename,
        });

        if (!newProductScreenshot) {
          return res.status(500).json({ success: false, message: "Failed to create new product screenshot" });
        }

        // Return success response with the new product data
        return res.status(201).json({
          success: true,
          message: "Product screenshot updated successfully",
          newProductScreenshot,
        });
      } catch (error) {
        console.error("Error processing request:", error);
        return res.status(500).json({ success: false, message: "Internal server error", error });
      }
    });
  } else {
    try {
      const product = await ProductScreenshot.findById(id);
      if (!product) {
        return res.status(404).json({
          success: false,
          message: "No product found for the provided ID",
        });
      }

      return res.status(200).json({ success: true, data: product });
    } catch (error) {
      console.error("Error fetching product:", error);
      return res.status(500).json({ success: false, message: "Internal server error" });
    }
  }
};

export default editApi;
