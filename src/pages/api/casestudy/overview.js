import CaseStudy from "@/models/admin/casestudy/casestudy";
import CaseOverview from "@/models/admin/casestudy/Overview";
const overviewApi = async (req, res) => {
  const { aboutEditorHtml, casestudy } = req.body;
  if (req.method === "POST") {
    try {
      const data = await CaseOverview.findOneAndReplace(
        { casestudy },
        { description: aboutEditorHtml, casestudy },
        { upsert: true, new: true } 
      );

      if (!data) {
        return res.status(300).json({ message: "Something went wrong" });
      }

      await CaseStudy.findByIdAndUpdate(
        { _id: casestudy },
        { $set: { overview: data._id } }
      );

      return res.status(201).json({ message: "Saved data of overview", data });
    } catch (error) {
      console.error("Error saving overview:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  } else if (req.method === "GET") {
    const { casestudy } = req.query;
    try {
      const data = await CaseOverview.findOne({ casestudy });

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
