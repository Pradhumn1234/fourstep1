import Videos from "@/models/admin/videos/videomain";
const suggestedApi = async (req, res) => {
    const { industry, topics } = req.query;
    let pipeline = [];

    if (industry&&topics) {
        pipeline.push({
            $match: {
                $or:[{industry: industry},{topics: topics}]
                
            }
        });
    }
   
    try {
        // Use exec() instead of toArray()
        const data = await Videos.aggregate(pipeline);
        
        if (!data || data?.length === 0) {
            return res.status(404).json({ message: "No products found" });
        }
        
        return res.status(200).json({ message: "Found successfully", data });
    } catch (error) {
        console.error(error); // Log the error for debugging
        return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}

export default suggestedApi;

//localhost:3000/api/videos/suggested?industry=xyz&topics=xyz
