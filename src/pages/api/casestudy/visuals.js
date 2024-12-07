import dbConnect from "@/utils/db";
import multer from "multer";
import fs from "fs";
import path from "path";
import CaseVisual from "@/models/admin/casestudy/Visuals";
import CaseStudy from "@/models/admin/casestudy/casestudy";
// Ensure the upload directory exists
const uploadDirectory = "./public/uploads/casestudy/visuals";
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory, { recursive: true });
}

// Configure Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDirectory);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Generate unique filename
  },
});

const upload = multer({ storage });

async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    upload.single("file")(req, {}, async (err) => {
      if (err) {
        console.error("File upload error:", err);
        return res
          .status(500)
          .json({ success: false, message: "File upload failed" });
      }

      try {
        const { title, description, casestudy } = req.body;

        // Validate the required fields
        if (!title || !description || !req.file || !casestudy) {
          return res
            .status(400)
            .json({ success: false, message: "All fields are required" });
        }

        const newProduct = await CaseVisual.create({
          title,
          casestudy,
          description,
          path: `/uploads/casestudy/visuals/${req.file.filename}`,
          filename: req.file.filename,
        });
        if (!newProduct) {
          return res
            .status(301)
            .json({ success: true, message: "something went wrong" });
        }
        await CaseStudy.findByIdAndUpdate(
          { _id: casestudy },
          { $push: { visuals: newProduct?._id } }
        );
        res
          .status(201)
          .json({
            success: true,
            message: "Product created successfully",
            newProduct,
          });
      } catch (error) {
        res
          .status(500)
          .json({ success: false, message: "Internal server error", error });
      }
    });
  } else if (req.method === "DELETE") {
    const { id } = req.query;
    try {
      const data = await CaseVisual.findOne({ _id: id });
      if (!data) {
        return res.status(404).json({ message: "data not found" });
      }
      if (data.filename) {
        fs.unlinkSync(path.join(uploadDirectory, data.filename));
      }
      const productData = await CaseStudy.findOne({ _id: data?.casestudy });
      if (!productData) {
        return res.status(404).json({ message: "data not found" });
      }
      const screenshot1 = productData?.visuals;
      const newscreen = screenshot1.filter((item) => item !== data?._id);
      if (newscreen?.length > 0) {
        await CaseStudy.findOneAndUpdate(
          { _id: data?.casestudy },
          { $set: { visuals: newscreen } }
        );
      }

      const deletedItem = await CaseVisual.findOneAndDelete({ _id: id });
      if (!deletedItem) {
        return res.status(404).json({ message: "data not deleted" });
      }
      return res.status(200).json({ message: "data  deleted successfully" });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: "Internal server error", error });
    }
  } else if (req.method === "GET") {
    const { id } = req.query;
    try {
      const products = await CaseVisual.find({ casestudy: id }).sort({
        createdAt: -1,
      });
      if (!products || products.length === 0) {
        return res.status(404).json({
          success: false,
          message: "No products found",
        });
      }
      res.status(200).json({ success: true, data: products });
    } catch (error) {
      console.error("Error fetching products:", error);
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
export const config = {
  api: { bodyParser: false },
};
