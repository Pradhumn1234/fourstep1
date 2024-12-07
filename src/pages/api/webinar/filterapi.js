import Webinar from "@/models/admin/webinar/Webinar";
const filterapi = async (req, res) => {
    const { industry, department, tools, topics, languages, webinarType } = req.query;
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
    const department1 = department?.split(",")||[];
    const tools1 = tools?.split(",")||[];
    const topics1 = topics?.split(",")||[];
    const languages1 = languages?.split(",")||[];
    const webinarType1 = webinarType?.split(",")||[];
    addMatchCondition("industry", industry1);
    addMatchCondition("department", department1);
    addMatchCondition("toolsAndSoftware", tools1);
    addMatchCondition("topic", topics1);
    addMatchCondition("language", languages1);
    addMatchCondition("selectType", webinarType1);
    try {
         const data = await Webinar.aggregate(pipeline).exec();
        if (!data || data.length === 0) {
            return res.status(404).json({ message: "No webinars found" });
        }
        return res.status(200).json({ message: "Found successfully", data });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

export default filterapi;
