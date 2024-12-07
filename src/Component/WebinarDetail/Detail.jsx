import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link as ScrollLink } from "react-scroll";
import OverView from "@/Component/WebinarDetail/OverView";
import Highlights from "@/Component/WebinarDetail/Highlights";
import SideForm from "@/Component/WebinarDetail/SideForm";
import React, { useEffect, useState } from "react";
import WebinarHero from "@/Component/WebinarDetail/WebinarHero";
import SpeakerDetail from "@/Component/WebinarDetail/SpeakerDetail";
import WebinarFaqs from "@/Component/WebinarDetail/WebinarFaqs";
import { Footer } from "@/Component/Footer/Footer";
import SuggestWebinar from "./SuggestWebinar";
const getWebinarPackageData = async (title) => {
  const res = await fetch(`/api/webinar/getwebinar?title=${title}`);
  return await res.json();
};
const getSuggestedWebinarPackageData = async (industry, department) => {
  const res = await fetch(
    `/api/webinar/suggested?industry=${industry}&department=${department}`
  );
  return await res.json();
};
const Detail = ({ title }) => {
  const [webinarPackageData, setWebinarPackageData] = useState({});
  const [suggestedPackage, setSuggestedPackage] = useState([]);
  const [filterSuggestedPackage, setFilterSuggestedPackage] = useState([]);
  useEffect(() => {
    if (webinarPackageData) {
      getSuggestedWebinarPackageData(
        webinarPackageData?.industry,
        webinarPackageData?.department
      ).then((res) => setSuggestedPackage(res?.data || []));
    }
  }, [webinarPackageData]);

  useEffect(() => {
    if (suggestedPackage?.length > 0) {
      const data = suggestedPackage?.filter(
        (item) => item?._id !== webinarPackageData?._id
      );
      setFilterSuggestedPackage(data || []);
    }
  }, [suggestedPackage, webinarPackageData]);

  useEffect(() => {
    if (title) {
      getWebinarPackageData(title).then((res) => {
        // console.log("webinar package data ------> ", res);
        setWebinarPackageData(res);
      });
    }
  }, [title]);



  return (
    <>
      {/* hero section */}
      <div>
        <WebinarHero Herodata={webinarPackageData} />
      </div>

      <div className=" bg-[#F1F5F9] ">
        <div
          id="OverviewSection"
          className=" shadow-lg py-1 bg-white sticky top-0 z-30 hidden md:block "
        >
          <div className="container-wrapper gap-3 md:gap-10 xs:pb-5 md:pb-0 hide-scrollbar flex justify-start overflow-x-auto ">
            <div>
              <ScrollLink
                to="OverviewContent" // Updated to point to the correct id
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <p className=" text-para cursor-pointer hover:border-b-2 border-amber-600 py-2 hover:text-orange-800">
                  Overview
                </p>
              </ScrollLink>
            </div>
            <div>
              <ScrollLink
                to="agenda"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <p className="text-center w-[120px] text-para cursor-pointer hover:border-b-2  border-amber-600 py-2 hover:text-orange-800">
                  Key & Highlights
                </p>
              </ScrollLink>
            </div>
            <div>
              <ScrollLink
                to="speakerSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <p className="text-center w-[120px] text-para cursor-pointer hover:border-b-2  border-amber-600 py-2 hover:text-orange-800">
                  Speaker
                </p>
              </ScrollLink>
            </div>
          </div>
        </div>
        <div className="px-5  grid grid-cols-1 xl:grid-cols-[2fr,1fr]">
          <div>
            {/* Overview section */}
            <div
              id="OverviewContent" // Changed id here to be unique
              className="flex  justify-between mt-5 mb-3"
            >
              <div className="md:px-10 ">
                <div className=" font-semibold py-2 text-xl">Overview</div>
                <OverView overviewdata={webinarPackageData} />
              </div>
            </div>
            {/* key and highlight section */}
            <div id="agenda" className="flex  justify-between mt-5 mb-3">
              <div className="md:px-10">
                <div className=" font-semibold py-2 text-xl  ">
                  Key & highlights
                </div>
                <Highlights hightlightdata={webinarPackageData} />
              </div>
            </div>
            {/* speaker  section */}
            <div
              id="speakerSection"
              className="flex  justify-between mt-5 mb-3"
            >
              <div className="md:px-10">
                <div className=" font-semibold py-2 text-xl">Speaker</div>
                <SpeakerDetail speakerdata={webinarPackageData} />
              </div>
            </div>
          </div>
          <div className=" mt-10">
            <div className="sticky top-[50px] z-10">
              <div className="flex gap-1 justify-center items-center"></div>
              {/* side registration form */}
              <div className=" md:px-5">
                <SideForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Suggest webinar  */}
      <div className=" ">
        <SuggestWebinar filterSuggestedPackage={filterSuggestedPackage} />
      </div>
      {/* webinar detail page FAQ SECTION */}
      <div className=" ">
        <WebinarFaqs faqData={webinarPackageData} />
      </div>
      {/* Footer section here */}
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Detail;
