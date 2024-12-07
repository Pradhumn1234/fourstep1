import Product from "@/models/admin/product/product";
import dbConnect from "@/utils/db";

export default async function handler(req, res) {
  await dbConnect();
  const { title } = req.query;

  try {
    // Log incoming title and check if title exists
    console.log("Fetching products for title:", title);

    // Find the product by title and populate the fields
    const products = await Product.findOne({ title: title }).populate(
      "overview highlight screenshot seo faq technology"
    );

    // Log the products data to verify
    console.log("Fetched products:", products);

    if (!products) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(products);
  } catch (error) {
    // Log the error for debugging
    console.error("Error fetching the products:", error);
    res.status(500).json({
      error: "Error fetching the products",
      details: error.message || "Unknown error",
    });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
