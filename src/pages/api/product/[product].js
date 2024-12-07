import dbConnect from "@/utils/db";
import Product from "@/models/admin/product/product";
import multer from "multer";
import fs from "fs";
import path from "path";
import ProductOverview from "@/models/admin/product/Overview";
import ProductHighLights from "@/models/admin/product/Highlights";
import ProductFaq from "@/models/admin/product/Faq";
import ProductSeo from "@/models/admin/product/Seo";
import ProductScreenshot from "@/models/admin/product/Screenshot";
const uploadDirectory1 = "./public/uploads/product/screenshot";
// Ensure the upload directory exists
const uploadDirectory = "./public/uploads/product";
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
  const { product } = req.query; // Extracting product ID from query

  // Handle PUT request for updating product
  if (req.method === "PUT") {
    // Using Multer middleware with async handling
    upload.single("image")(req, {}, async (err) => {
      if (err) {
        console.error("File upload error:", err);
        return res
          .status(500)
          .json({ success: false, message: "File upload failed" });
      }

      try {
        const { title, subtitle, description, service, industry, altText,topics,tools } =
          req.body;

        // Validate the required fields
        if (
          !title ||
          !subtitle ||
          !description ||
          !service ||
          !industry ||
          !tools||
          !topics||
          !req.file
        ) {
          return res
            .status(400)
            .json({ success: false, message: "All fields are required" });
        }

        const data = await Product.findById(product); // Find product by ID
        if (!data) {
          return res
            .status(400)
            .json({ success: false, message: "Product not found" });
        }

        // Remove old file if it exists
        if (data.filename) {
          fs.unlinkSync(path.join(uploadDirectory, data.filename));
        }

        // Update the product with new data and file path
        const updatedProduct = await Product.findByIdAndUpdate(
          product,
          {
            $set: {
              title,
              subtitle,
              description,
              service,
              topics,tools,
              industry,
              path: `/uploads/product/${req.file.filename}`, // Updated image path
              filename: req.file.filename, // Updated filename
              altText,
            },
          },
          { new: true } // Return the updated product
        );

        res
          .status(200)
          .json({
            success: true,
            message: "Product updated successfully",
            newProduct: updatedProduct,
          });
      } catch (error) {
        console.error("Error updating product:", error);
        res
          .status(500)
          .json({ success: false, message: "Internal server error", error });
      }
    });
  }
  // Handle DELETE request for deleting product
  else if (req.method === "DELETE") {
    try {
      if (!product) {
        return res.status(400).json({ success: false, message: "Product ID is required" });
      }
  
      const data = await Product.findOne({ _id: product }); // Find product by ID
      if (!data) {
        return res.status(404).json({ success: false, message: "Product not found" });
      }
  
      if (data?.filename) {
        fs.unlinkSync(path.join(uploadDirectory, data.filename));
      }
  
      if (data?.overview) {
        const overviewData = await ProductOverview.findOneAndDelete({ _id: data?.overview });
        if (!overviewData) {
          return res.status(500).json({ success: false, message: "Failed to delete product overview" });
        }
      }
  
      if (data?.highlight) {
        const highlightData = await ProductHighLights.findOneAndDelete({ _id: data?.highlight });
        if (!highlightData) {
          return res.status(500).json({ success: false, message: "Failed to delete product highlight" });
        }
      }
  
      if (data?.faq) {
        const faqData = await ProductFaq.findOneAndDelete({ _id: data?.faq });
        if (!faqData) {
          return res.status(500).json({ success: false, message: "Failed to delete product FAQ" });
        }
      }
  
      if (data?.seo) {
        const seoData = await ProductSeo.findOneAndDelete({ _id: data?.seo });
        if (!seoData) {
          return res.status(500).json({ success: false, message: "Failed to delete product SEO data" });
        }
      }
  
      if (data?.screenshot) {

        for(const item of data?.screenshot ){
          const screenshotData = await ProductScreenshot.findOne({ _id: item });
          if (!screenshotData) {
            return res.status(500).json({ success: false, message: "Failed to found product screenshot" });
          }
          if (screenshotData?.filename) {
            fs.unlinkSync(path.join(uploadDirectory1, screenshotData?.filename));
          }

           await ProductScreenshot.findOneAndDelete({ _id: item });
        
        }
        console.log("Product screenshot deleted successfully",data?.screenshot);
      }
  
      // Finally, delete the product itself
      await Product.deleteOne({ _id: product });
  
      res.status(200).json({ success: true, message: "Product and related data deleted successfully" });
      
    } catch (error) {
      console.error("Error deleting product:", error);
      res.status(500).json({ success: false, message: "Internal server error", error });
    }
  }
  
  // Handle GET request for retrieving a product
  else if (req.method === "GET") {
    try {
      const products = await Product.find({ _id: product }).populate(
        "seo faq highlight overview screenshot technology"
      );
      if (!products || products.length === 0) {
        return res
          .status(404)
          .json({ success: false, message: "Product not found" });
      }

      res.status(200).json({ success: true, data: products });
    } catch (error) {
      console.error("Error fetching product:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error", error });
    }
  } else {
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}

export default handler;

export const config = {
  api: { bodyParser: false }, // Disable Next.js default body parsing for handling file uploads
};
