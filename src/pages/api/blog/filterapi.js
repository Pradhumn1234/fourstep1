import BlogDetail from "@/models/admin/blog copy/BlogDetail";


const filterapi = async (req, res) => {
    const { industry, tools,topics,department } = req.query;
    
    let pipeline = [];
    const addMatchCondition = (field, valueArray) => {
        if (valueArray?.length > 0 && valueArray?.[0]!=='') {
            pipeline.push({
                $match: {
                    [field]: { $in: valueArray }
                }
            });
        }
    };

    const industry1 = industry?.split(",")||[];
    const language1 = department?.split(",")||[];
    const tools1 = tools?.split(",")||[];
    const topics1 = topics?.split(",")||[];
    addMatchCondition("selectIndustry", industry1);
    addMatchCondition("selectDepartment", language1);
    addMatchCondition("selectTools", tools1);
    addMatchCondition("selectTopic", topics1);

    try {
        // Use exec() instead of toArray()
        const data = await BlogDetail.aggregate(pipeline);
        
        if (!data || data?.length === 0) {
            return res.status(404).json({ message: "No products found" });
        }
        
        return res.status(200).json({ message: "Found successfully", data });
    } catch (error) {
        console.error(error); // Log the error for debugging
        return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}

export default filterapi;

//localhost:3000/api/blog/filterapi?industry=xyz&tools=xyz&topics=xyz&department=xyz
