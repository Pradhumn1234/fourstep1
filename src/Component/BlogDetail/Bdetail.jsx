import React, { useEffect, useState } from "react";
import BlogHero from "./BlogHero";
import BlogDescription from "./BlogDescription";
import { Footer } from "../Footer/Footer";

const getBlogData = async (title) => {
  const response = await fetch(
    `/api/blog/getallblogs?title=${title?.split("-")?.join(" ")}`
  );
  return await response.json();
};
const getSuggestedBlogPackageData = async (industry, topics) => {
  const res = await fetch(
    `/api/blog/suggested?industry=${industry}&topics=${topics}`
  );
  return await res.json();
};

const Bdetail = ({ title }) => {
  const [blogPackageData, setBlogPackageData] = useState(null);
const [suggestedBlogData,setSuggestedBlogData]=useState([]);
const [filterSuggestedBlogData,setFilterSuggestedBlogData]=useState([]);
  useEffect(() => {
    if (title) {
      getBlogData(title).then((res) => {
      
        setBlogPackageData(res);
      });
    }
    
  }, [title]);

  useEffect(()=>{
    if(blogPackageData){
      getSuggestedBlogPackageData(blogPackageData?.selectIndustry,blogPackageData?.selectTopic).then(res=>{
        setSuggestedBlogData(res?.data||[]);
      })
    }
  },[blogPackageData])

  useEffect(()=>{
    if(suggestedBlogData?.length>0){
    const data=suggestedBlogData?.filter(item=>item?._id!==blogPackageData?._id);
    setFilterSuggestedBlogData(data||[])
    }
  },[suggestedBlogData,blogPackageData])

  return (
    <>
      <div>
        {/*  for the hero section */}
        <BlogHero blogPackageData={blogPackageData}/>
      </div>
      {/* for the blog post content or description  */}
      <div>
        <BlogDescription  blogPackageData={blogPackageData} filterSuggestedBlogData={filterSuggestedBlogData}/>
      </div>
      {/* for the footer section  */}
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Bdetail;
