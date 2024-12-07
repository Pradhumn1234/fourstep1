import CaseStudy from "@/models/admin/casestudy/casestudy";
import CaseSeo from "@/models/admin/casestudy/Seo";

const blogdetailSeoApi = async (req, res) => {
  const { seoData, casestudy } = req.body;
  const { tags, canonicalUrl, keyword } = seoData;

  // Handle POST request to create or update SEO data
  if (req.method === "POST") {
    try {
      // Find existing SEO data for the product
      let data1 = await CaseSeo.findOne({ casestudy });
      let data;

      // If no SEO data exists, create new SEO entry
      if (!data1) {
        data = await CaseSeo.create({ tags, canonicalUrl, keyword, casestudy });

        if (!data) {
          return res.status(400).json({ message: "Something went wrong while creating data" });
        }

        // Update the product with the SEO ID
        await CaseStudy.findByIdAndUpdate({ _id: casestudy }, { $set: { seo: data._id } });

        return res.status(201).json({ message: "Data successfully created", data });
      }

      // If SEO data exists, update the existing entry
      data = await CaseSeo.findOneAndUpdate(
        { casestudy },
        {
          $set: { tags, canonicalUrl, keyword, casestudy },
        },
        { new: true } // Ensure we get the updated data back
      );

      if (!data) {
        return res.status(400).json({ message: "Something went wrong while updating data" });
      }

      // Update the product with the updated SEO ID
      await CaseStudy.findByIdAndUpdate({ _id: casestudy }, { $set: { seo: data._id } });

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
      let data1 = await CaseSeo.find();

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
