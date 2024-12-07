import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Nav from "@/Component/Header/Nav";
import Hero from "@/Component/Resource/Hero";
import Switch from "@/Component/Resource/Switch";
import Filter from "@/Component/Resource/Filter";
import MainData from "@/Component/Resource/MainData";
import { useAppContext } from "@/Component/Context/context";

const Routes = () => {
  const router = useRouter();
  const Heading = router.query.pages;
  const { filterGlobalData } = useAppContext();
  return (
    <div className="container bg-[#F1F5F9]">
      <div>
        <Nav />
      </div>
      <div className="">
        <Hero Heading={Heading} />
      </div>
      <div className="pt-10 pb-0 md:pb-5">
        <Switch />
      </div>
      {/* <div className="flex flex-col lg:flex-row">   #F1F5F9 */}
      <div className=" conatiner">
        {Heading === "webinar" && (
          <div className=" px-7 md:px-10 grid grid-cols-1 xl:grid-cols-[300px,2fr] bg-[#F1F5F9] gap-3  md:gap-10 relative">
            <div className="">
              <Filter Heading={Heading} filterGlobalData={filterGlobalData} />
            </div>
            <div>
              <MainData Heading={Heading}/>
            </div>
          </div>
        )}
        {/* for the product */}
        {Heading === "product" && (
          <div className=" px-7 md:px-10 grid grid-cols-1 xl:grid-cols-[300px,2fr] bg-[#F1F5F9] gap-3  md:gap-10 relative">
            <div className="">
              <Filter Heading={Heading} filterGlobalData={filterGlobalData} />
            </div>
            <div>
              <MainData Heading={Heading} />
            </div>
          </div>
        )}
        {/* for case studies  */}
        {Heading === "case-studies" && (
          <div className=" px-7 md:px-10 grid grid-cols-1 xl:grid-cols-[300px,2fr] bg-[#F1F5F9] gap-3  md:gap-10 relative">
            <div className="">
              <Filter Heading={Heading} filterGlobalData={filterGlobalData} />
            </div>
            <div>
              <MainData Heading={Heading} />
            </div>
          </div>
        )}

        {/*  for the video section section   */}
        {Heading === "demo-videos" && (
          <div className=" px-7 md:px-10 grid grid-cols-1 xl:grid-cols-[300px,2fr] bg-[#F1F5F9] gap-3  md:gap-10 relative">
            <div className="">
              <Filter Heading={Heading} filterGlobalData={filterGlobalData} />
            </div>
            <div>
              <MainData Heading={Heading} />
            </div>
          </div>
        )}
        {/*  for the Blog section   */}
        {Heading === "blog" && (
          <div className=" px-7 md:px-10 grid grid-cols-1 xl:grid-cols-[300px,2fr] bg-[#F1F5F9] gap-3  md:gap-10 relative">
            <div className="">
              <Filter Heading={Heading} filterGlobalData={filterGlobalData} />
            </div>
            <div>
              <MainData Heading={Heading} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Routes;
