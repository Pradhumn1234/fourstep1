import VideoHighLights from "@/models/admin/videos/HighLights";
import Videos from "@/models/admin/videos/videomain";

const overviewApi = async (req, res) => {
    const { aboutEditorHtml, video} = req.body;
    // console.log("Request Method:", req.method);

    if (req.method === "POST") {
        try {
            const data = await VideoHighLights.findOneAndReplace(
                { video },
                { description: aboutEditorHtml, video },
                { upsert: true, new: true } 
            );
            if (!data) {
                return res.status(300).json({ message: "Something went wrong" });
            }
            await Videos.findByIdAndUpdate({_id:video}, { $set: { highlight: data?._id } });

            return res.status(201).json({ message: "Saved data of overview", data });
        } catch (error) {
            console.error("Error saving overview:", error);
            return res.status(500).json({ message: "Internal Server Error",error });
        }
    } else if (req.method === "GET") {
        const { video } = req.query;
        try {
            // Find the Overview document by webinar ID
            const data = await VideoHighLights.findOne({ video });

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
