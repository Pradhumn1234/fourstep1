import dbConnect from "@/utils/db";
import multer from "multer";
import fs from "fs";
import path from "path";
import Videos from "@/models/admin/videos/videomain";
import VideoOverview from "@/models/admin/videos/Overview";
import VideoHighLights from "@/models/admin/videos/HighLights";
import VideoFaq from "@/models/admin/videos/Faq";
import VideoSeo from "@/models/admin/videos/Seo";

//  for the uploading  directories exits

const uploadDirectory = "./public/uploads/demovideo";
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
  const { video } = req.query;
  if (req.method === "PUT") {
    upload.single("image")(req, {}, async (err) => {
      if (err) {
        console.error("File upload error:", err);
        return res
          .status(500)
          .json({ success: false, message: "File upload failed" });
      }

      try {
        const {
          title,
          subtitle,
          description,
          user,
          industry,
          altText,
          videoLink,
          topics,
          tools,
          language,
        } = req.body;

        // Validate the required fields
        if (
          !title ||
          !subtitle ||
          !description ||
          !user ||
          !topics ||
          !tools ||
          !language ||
          !industry ||
          !videoLink ||
          !req.file
        ) {
          return res
            .status(400)
            .json({ success: false, message: "All fields are required" });
        }

        const data = await Videos.findById(video); // Find product by ID
        if (!data) {
          return res
            .status(400)
            .json({ success: false, message: "Video not found" });
        }

        // Remove old file if it exists
        if (data.filename) {
          fs.unlinkSync(path.join(uploadDirectory, data.filename));
        }

        // Update the product with new data and file path
        const updatedProduct = await Videos.findByIdAndUpdate(
          video,
          {
            $set: {
              title,
              subtitle,
              description,
              videoLink,
              user,
              industry,
              path: `/uploads/demovideo/${req.file.filename}`,
              filename: req.file.filename,
              altText,
              topics,
              tools,
              language,
            },
          },
          { new: true } // Return the updated product
        );

        res.status(200).json({
          success: true,
          message: "Video updated successfully",
          newProduct: updatedProduct,
        });
      } catch (error) {
        console.error("Error updating video:", error);
        res
          .status(500)
          .json({ success: false, message: "Internal server error", error });
      }
    });
  } else if (req.method === "DELETE") {
    try {
      if (!video) {
        return res
          .status(400)
          .json({ success: false, message: "Video ID is required" });
      }

      const data = await Videos.findOne({ _id: video }); // Find product by ID
      if (!data) {
        return res
          .status(404)
          .json({ success: false, message: "Video not found" });
      }

      if (data?.filename) {
        fs.unlinkSync(path.join(uploadDirectory, data.filename));
      }

      if (data?.overview) {
        const overviewData = await VideoOverview.findOneAndDelete({
          _id: data?.overview,
        });
        if (!overviewData) {
          return res.status(500).json({
            success: false,
            message: "Failed to delete video overview",
          });
        }
      }

      if (data?.highlight) {
        const highlightData = await VideoHighLights.findOneAndDelete({
          _id: data?.highlight,
        });
        if (!highlightData) {
          return res.status(500).json({
            success: false,
            message: "Failed to delete video highlight",
          });
        }
      }

      if (data?.faq) {
        const faqData = await VideoFaq.findOneAndDelete({ _id: data?.faq });
        if (!faqData) {
          return res
            .status(500)
            .json({ success: false, message: "Failed to delete video FAQ" });
        }
      }

      if (data?.seo) {
        const seoData = await VideoSeo.findOneAndDelete({ _id: data?.seo });
        if (!seoData) {
          return res.status(500).json({
            success: false,
            message: "Failed to delete video SEO data",
          });
        }
      }
      // Finally, delete the product itself
      await Videos.deleteOne({ _id: video });

      res.status(200).json({
        success: true,
        message: "Video and related data deleted successfully",
      });
    } catch (error) {
      console.error("Error deleting product:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error", error });
    }
  } else {
    try {
      const videos = await Videos.findOne({ _id: video }).populate(
        "overview faq user seo highlight"
      );

      if (!videos) {
        return res.status(404).json({
          success: false,
          message: "No videos found found",
        });
      }

      res.status(200).json({ success: true, data: videos });
    } catch (error) {
      console.error("Error fetching videos:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }
}

export default handler;
export const config = {
  api: { bodyParser: false }, // Disable Next.js default body parsing
};
