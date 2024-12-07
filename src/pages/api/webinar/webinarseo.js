import Webinar from "@/models/admin/webinar/Webinar";
import WebinarSeo from "@/models/admin/webinar/WebinarSeo";
const blogdetailSeoApi=async (req,res)=>{
    const {seoData,webinar}=req.body;
    const {tags,canonicalUrl,keyword}=seoData;
   if(req.method==="POST"){ try {
        let data1=await WebinarSeo.findOne({webinar});
        let data;
        if(!data1){
            data=await WebinarSeo.create({tags,canonicalUrl,keyword,webinar});
            if(!data){
                return res.status(301).json({message:"something went wrong"})
            }
            await Webinar.findByIdAndUpdate({_id:webinar},{$set:{webinarSeo:data?._id}})
            return res.status(201).json({message:"data is successfully created",data:data})
        }
        data=await WebinarSeo.findOneAndUpdate({webinar},{
            $set:{tags,canonicalUrl,keyword,webinar}
        })
        if(!data){
            return res.status(301).json({message:"something went wrong"})
        }
        await Webinar.findByIdAndUpdate({_id:webinar},{$set:{webinarSeo:data?._id}})
        return res.status(200).json({message:"data is successfully updated",data:data})
        
    } catch (error) {
        return res.status(501).json({message:"Internal Server Error"});
    }
}else{
    try {
        let data1=await WebinarSeo.find();

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