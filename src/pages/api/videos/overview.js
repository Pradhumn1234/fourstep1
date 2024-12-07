import VideoOverview from "@/models/admin/videos/Overview";
import Videos from "@/models/admin/videos/videomain";

const overviewApi = async (req, res) => {
  const { aboutEditorHtml, video } = req.body;

  // Log the incoming request method for debugging
  // console.log("Request Method:", req.method);
  if (req.method === "POST") {
    try {
      // Update or insert the Overview document for the webinar
      const data = await VideoOverview.findOneAndReplace(
        { video },
        { description: aboutEditorHtml, video },
        { upsert: true, new: true } // `new: true` returns the updated document
      );

      // Handle case where data might not be returned correctly
      if (!data) {
        return res.status(300).json({ message: "Something went wrong" });
      }

      // Update the related Webinar document with the overview's ID
      await Videos.findByIdAndUpdate(
        { _id: video },
        { $set: { overview: data._id } }
      );

      return res.status(201).json({ message: "Saved data of overview", data });
    } catch (error) {
      console.error("Error saving overview:", error);
      return res.status(500).json({ message: "Internal Server Error" ,error});
    }
  } else if (req.method === "GET") {
    const { video } = req.query;
    try {
      // Find the Overview document by webinar ID
      const data = await VideoOverview.findOne({ video });

      if (!data) {
        return res.status(404).json({ message: "Data not found" });
      }

      return res.status(200).json({ message: "Data found", data });
    } catch (error) {
      console.error("Error retrieving overview:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    // Handle unsupported methods
    return res.status(405).json({ message: "Method Not Allowed" });
  }
};

export default overviewApi;
