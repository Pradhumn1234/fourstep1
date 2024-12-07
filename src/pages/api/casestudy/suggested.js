import CaseStudy from "@/models/admin/casestudy/casestudy";
const suggestedApi = async (req, res) => {
    const { industry, service } = req.query;
    let pipeline = [];

    if (industry&&service) {
        pipeline.push({
            $match: {
                $or:[{ industry: industry},{ service: service}]  
            }
        });
    }
    try {
        // Use exec() instead of toArray()
        const data = await CaseStudy.aggregate(pipeline);
        
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

//localhost:3000/api/casestudy/suggested?industry=xyz&service=xyz
