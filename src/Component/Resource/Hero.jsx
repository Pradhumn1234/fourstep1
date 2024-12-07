import React, { useEffect, useState } from "react";
import Image from "next/image";
const fetchWebinarPromo=async ()=>{
  const res = await fetch(`/api/webinar`);
  return await res?.json();
}
const fetchProductPromo=async ()=>{
  const res = await fetch(`/api/product`);
  const data = await res.json();
  return data;
}
const fetchVideoPromo=async ()=>{
  const res = await fetch(`/api/videos/videopromo`);
  const data = await res.json();
  return data;
}
const fetchCaseStudyPromo=async ()=>{
  const res = await fetch(`/api/casestudy`);
  const data = await res.json();
  return data;
}
const fetchBlogPromo=async ()=>{
  const res = await fetch(`/api/blog`);
  const data = await res.json();
  return data;
}
const Hero = ({ Heading }) => {
const [promoData,setPromoData]=useState({})
  useEffect(()=>{
    // console.log("heading----------> ",Heading)
    if(Heading==="webinar"){
      fetchWebinarPromo().then(res=>{
        // console.log("webinar data   ",res)
        setPromoData(res?.data||{})
      })
    }
    if(Heading==="product"){
      fetchProductPromo().then(res=>{
        // console.log("product data   ",res)
        setPromoData(res?.data||{})
      })
    }
    if(Heading==="demo-videos"){
      fetchVideoPromo().then(res=>{
        // console.log("demo-videos data   ",res)
        setPromoData(res?.data||{})
      })
    }
    if(Heading==="case-studies"){
      fetchCaseStudyPromo().then(res=>{
        // console.log("case-studies data   ",res)
        setPromoData(res?.data||{})
      })
    }
    if(Heading==="blog"){
      fetchBlogPromo().then(res=>{
        // console.log("blog data   ",res)
        setPromoData(res?.data||{})
      })
    }

  },[Heading])

  return (
    <div className="container mx-auto mt-20 md:mt-0 px-4 sm:px-8 lg:px-16 py-12 sm:py-16 bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16">
        {/* Text Section */}
        <div className="text-center lg:text-left lg:max-w-xl space-y-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-orange-600 capitalize leading-tight">
            {promoData?.title||Heading}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-700 font-light tracking-wide">
            {promoData?.description||`I hated every minute of training, but I said, Dont quit. Suffer
            now and live the rest of your life as a champion.`}
          </p>
          <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-md shadow hover:bg-orange-600 focus:ring-2 focus:ring-orange-300 transition duration-300 ease-in-out">
            Explore Now
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center lg:justify-end">
          <Image
            aria-hidden="true"
            alt="Inspiring web design"
            src={promoData?.videoPath||"https://images.unsplash.com/photo-1621763540919-1a0477861102?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViaW5hcnxlbnwwfHwwfHx8MA%3D%3D"}
            width={400}
            height={500}
            className="rounded-lg shadow-lg object-cover transform hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
