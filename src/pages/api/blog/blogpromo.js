import BlogPromo from "@/models/admin/blog copy/BlogPromo";
import BlogPromoBanner from "@/models/admin/blog copy/BlogPromoBanner";

const bogpromoApi=async (req,res)=>{
   
   if(req.method==="POST"){ 
    const {title,canonicalUrl,description,keyword,promoId}=req.body;
    try {
        let data1=await BlogPromo.findOne({promo:promoId});
        let data;
        if(!data1){
            data=await BlogPromo.create({title,canonicalUrl,description,keyword,promo:promoId});
            await BlogPromoBanner.findOneAndUpdate({_id:promoId},{$set:{seo:data?._id}})
            return res.status(201).json({message:"data is successfully created",data:data})
        }
        data=await BlogPromo.findByIdAndUpdate({_id:data1?._id},{
            $set:{title,canonicalUrl,description,keyword,promo:promoId}
        })
        await BlogPromoBanner.findOneAndUpdate({_id:promoId},{$set:{seo:data?._id}})
        return res.status(200).json({message:"data is successfully updated",data:data})
        
    } catch (error) {
        return res.status(501).json({message:"Internal Server Error"});
    }
}else{
    const {promo}=req.query;
    try {
        let data1=await BlogPromo.findOne({promo});

        if(!data1){
           return res.status(404).json({message:"no such product is found"});
        }
        return res.status(200).json({message:"data is found successfully",data:data1})
        
    } catch (error) {
        return res.status(501).json({message:"Internal Server Error"}); 
    }
  
}

}
export default bogpromoApi;