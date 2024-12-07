import Product from "@/models/admin/product/product";
import ProductTechnology from "@/models/admin/product/Technology";
const overviewApi = async (req, res) => {
  const { aboutEditorHtml, product } = req.body;
  // console.log("Request Method:", req.method);

  if (req.method === "POST") {
    try {
      const data = await ProductTechnology.findOneAndReplace(
        { product },
        { description: aboutEditorHtml, product },
        { upsert: true, new: true }
      );
      if (!data) {
        return res.status(300).json({ message: "Something went wrong" });
      }
      await Product.findByIdAndUpdate(
        { _id: product },
        { $set: { technology: data?._id } }
      );

      return res.status(201).json({ message: "Saved data of overview", data });
    } catch (error) {
      console.error("Error saving overview:", error);
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  } else if (req.method === "GET") {
    const { product } = req.query;
    try {
      // Find the Overview document by webinar ID
      const data = await ProductTechnology.findOne({ product });

      if (!data) {
        return res.status(404).json({ message: "Data not found" });
      }

      return res.status(200).json({ message: "Data found", data });
    } catch (error) {
      console.error("Error retrieving overview:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
};

export default overviewApi;
