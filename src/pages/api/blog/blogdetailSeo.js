import BlogDetail from "@/models/admin/blog copy/BlogDetail";
import BlogSeoDetail from "@/models/admin/blog copy/BlogSeoDetail";

const blogdetailSeoApi=async (req,res)=>{
    const {seoData,blog}=req.body;
    const {title,canonicalUrl,description,keyword}=seoData;
   if(req.method==="POST"){ try {
        let data1=await BlogSeoDetail.findOne({blog});
        let data;
        if(!data1){
            data=await BlogSeoDetail.create({title,canonicalUrl,description,keyword,blog});
            if(!data){
                return res.status(301).json({message:"something went wrong"})
            }
            await BlogDetail.findByIdAndUpdate({_id:blog},{$set:{blogSeo:data?._id}})
            return res.status(201).json({message:"data is successfully created",data:data})
        }
        data=await BlogSeoDetail.findOneAndUpdate({blog},{
            $set:{title,canonicalUrl,description,keyword,blog}
        })
        if(!data){
            return res.status(301).json({message:"something went wrong"})
        }
        await BlogDetail.findByIdAndUpdate({_id:blog},{$set:{blogSeo:data?._id}})
        return res.status(200).json({message:"data is successfully updated",data:data})
        
    } catch (error) {
        return res.status(501).json({message:"Internal Server Error"});
    }
}else{
    try {
        let data1=await BlogSeoDetail.find();

        if(!data1){
           return res.status(404).json({message:"no such product is found"});
        }
        return res.status(200).json({message:"data is found successfully",data:data1})
        
    } catch (error) {
        return res.status(501).json({message:"Internal Server Error"}); 
    }
  
}

}
export default blogdetailSeoApi;