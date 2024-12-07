import dbConnect from "@/utils/db";
import Product from "@/models/admin/product/product";
import multer from "multer";
import fs from "fs";
import path from "path";
import ProductScreenshot from "@/models/admin/product/Screenshot";

// Ensure the upload directory exists
const uploadDirectory = "./public/uploads/product/screenshot";
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
        const { title, description ,product} =
          req.body;

        // Validate the required fields
        if (
          !title ||
          !description ||
          !req.file||
          !product
        ) {
          return res
            .status(400)
            .json({ success: false, message: "All fields are required" });
        }

        const newProduct = await ProductScreenshot.create({
          title,
          product,
          description,
          path: `/uploads/product/screenshot/${req.file.filename}`,
          filename: req.file.filename,
        });
        if(!newProduct){
            return res
            .status(301)
            .json({ success: true, message: "something went wrong" });
        }
        await Product.findByIdAndUpdate({_id:product},{$push:{screenshot:newProduct?._id}})
        res
          .status(201)
          .json({ success: true, message: "Product created successfully" ,newProduct});
      } catch (error) {
        res
          .status(500)
          .json({ success: false, message: "Internal server error" ,error});
      }
    });
  }
  else if(req.method === "DELETE"){
    const {id}=req.query;
    try {
      const data=await ProductScreenshot.findOne({_id:id});
      if(!data){
        return res.status(404).json({message:"data not found"});
      }
      if (data.filename) {
        fs.unlinkSync(path.join(uploadDirectory, data.filename));
      }
      const productData=await Product.findOne({_id:data?.product});
      if(!productData){
        return res.status(404).json({message:"data not found"});
      }
      const screenshot1=productData?.screenshot;
      const newscreen=screenshot1.filter(item=>item!==data?._id);
      if(newscreen?.length>0){
      await Product.findOneAndUpdate({_id:data?.product},{$set:{screenshot:newscreen}})
      }

      const deletedItem=await ProductScreenshot.findOneAndDelete({_id:id});
      if(!deletedItem){
        return res.status(404).json({message:"data not deleted"});
      }
      return res.status(200).json({message:"data  deleted successfully"});

      
    } catch (error) {
      res
          .status(500)
          .json({ success: false, message: "Internal server error" ,error});
    }

  }
  else if (req.method === "GET") {
    const {id}=req.query;
    try {
      const products = await ProductScreenshot.find({product:id}).sort({ createdAt: -1 });

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
  api: { bodyParser: false }, // Disable Next.js default body parsing
};
