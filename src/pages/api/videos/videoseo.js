import VideoSeo from "@/models/admin/videos/Seo";
import Videos from "@/models/admin/videos/videomain";

const blogdetailSeoApi = async (req, res) => {
  const { seoData, video } = req.body;
  const { tags, canonicalUrl, keyword } = seoData;

  // Handle POST request to create or update SEO data
  if (req.method === "POST") {
    try {
      // Find existing SEO data for the product
      let data1 = await VideoSeo.findOne({ video });
      let data;

      // If no SEO data exists, create new SEO entry
      if (!data1) {
        data = await VideoSeo.create({ tags, canonicalUrl, keyword, video });

        if (!data) {
          return res.status(400).json({ message: "Something went wrong while creating data" });
        }

        // Update the product with the SEO ID
        await Videos.findByIdAndUpdate({ _id: video }, { $set: { seo: data._id } });

        return res.status(201).json({ message: "Data successfully created", data });
      }

      // If SEO data exists, update the existing entry
      data = await VideoSeo.findOneAndUpdate(
        { video },
        {
          $set: { tags, canonicalUrl, keyword, video },
        },
        { new: true } // Ensure we get the updated data back
      );

      if (!data) {
        return res.status(400).json({ message: "Something went wrong while updating data" });
      }

      // Update the product with the updated SEO ID
      await Videos.findByIdAndUpdate({ _id: video }, { $set: { seo: data._id } });

      return res.status(200).json({ message: "Data successfully updated", data });
    } catch (error) {
      console.error("Error handling POST request:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  // Handle GET request to fetch SEO data for all products
  else if (req.method === "GET") {
    try {
      // Fetch all SEO data
      let data1 = await VideoSeo.find();

      if (!data1 || data1.length === 0) {
        return res.status(404).json({ message: "No SEO data found" });
      }

      return res.status(200).json({ message: "Data found successfully", data: data1 });
    } catch (error) {
      console.error("Error handling GET request:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  // Handle unsupported HTTP methods
  else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
};

export default blogdetailSeoApi;