
import BlogDetail from "@/models/admin/blog copy/BlogDetail";
 const packagePublicSuggestedPackage= async (req, res) => {
    // console.log("req parasmdkjnkdjnkerbfhesbfs ejhbfehjbsd     ehfdbhejbfe  ejhrhf",req.params)
    try {
        const { packageId} = req.query;

        // console.log("req parasmdkjnkdjnkerbfhesbfs ejhbfehjbsd     ehfdbhejbfe  ejhrhf",req.params)
        // Fetch the current package details
        const currentPackage = await BlogDetail.findById(packageId).exec();

        // console.log("current Package @##@!2131333142343255254252 ; ;",currentPackage);

        if (!currentPackage) {
            return res.status(404).json({ message: "Package not found" });
        }

        // Fetch suggested packages based on categories or location
        const suggestedPackages = await Package.find({
            $or: [
                { category: { $in: currentPackage.category } }, // Suggested by categories
                { location: currentPackage.location } // Suggested by location
            ],
            _id: { $ne: packageId } // Exclude the current package
        })
        .limit(5)
        .exec();

        return res.status(200).json({message:"data found successfully" ,suggestedPackages });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
export default packagePublicSuggestedPackage
// use this method 
// GET http://localhost:3000/api/suggested-packages?packageId=668666631a7c8d116888209f
