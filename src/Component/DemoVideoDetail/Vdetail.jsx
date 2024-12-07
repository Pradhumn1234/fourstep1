import { Link as ScrollLink } from "react-scroll";
import React, { useState, useEffect } from "react";
import { Footer } from "../Footer/Footer";
import DemoHero from "./DemoHero";
import DemoOverview from "./DemoOverview";
import DemoHightlight from "./DemoHightlight";
import DemoPrentater from "./DemoPrentater";
import DemoSide from "./DemoSide";
import Link from "next/link";
import DemoFaqs from "./DemoFaqs";
import DemoSuggest from "./DemoSuggest";

const videoData = async (title) => {
  const response = await fetch(
    `/api/videos/getallvideo?title=${title.split("-")?.join(" ")}`
  );

  return await response.json();
};
const getSuggestedVideoPackageData = async (industry, topics) => {
  const res = await fetch(
    `/api/videos/suggested?industry=${industry}&topics=${topics}`
  );
  return await res.json();
};

const Vdetail = ({ title }) => {
  const [videoPackageData, setvideoPackageData] = useState(null);
  const [suggestedVideoPackage,setSuggestedVideoPackage]=useState([]);
  const [filterSuggestedVideoPackage,setFilterSuggestedVideoPackage]=useState([]);

  useEffect(() => {
    if (title) {
      videoData(title).then((res) => {
        setvideoPackageData(res);
      });
    }
  }, [title]);
  useEffect(()=>{
    if(videoPackageData){
      getSuggestedVideoPackageData(videoPackageData?.industry,videoPackageData?.topics).then(res=>{
        setSuggestedVideoPackage(res?.data||[])
      })
    }
   
  },[videoPackageData])
  useEffect(()=>{
    if(suggestedVideoPackage?.length>0){
      const data=suggestedVideoPackage?.filter(item=>item?._id!==videoPackageData?._id);
      setFilterSuggestedVideoPackage(data||[]);
    }

  },[suggestedVideoPackage,videoPackageData])

  return (
    <>
      {/* hero section */}
      <div>
        <DemoHero videoPackageData={videoPackageData} />
      </div>

      <div className="bg-[#F1F5F9]">
        <div
          id="OverviewSection"
          className="shadow-lg py-1 bg-white sticky top-0 z-30 hidden md:block"
        >
          <div className="container-wrapper gap-3 md:gap-10 xs:pb-5 md:pb-0 hide-scrollbar flex justify-start overflow-x-auto">
            <div>
              <ScrollLink
                to="productOverviewSection" // Updated to match unique ID
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <p className="text-para cursor-pointer hover:border-b-2 border-amber-600 py-2 hover:text-orange-800">
                  Overview
                </p>
              </ScrollLink>
            </div>
            <div>
              <ScrollLink
                to="productHighlightSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <p className="text-center w-[120px] text-para cursor-pointer hover:border-b-2 border-amber-600 py-2 hover:text-orange-800">
                  Key & Highlights
                </p>
              </ScrollLink>
            </div>
            <div>
              <ScrollLink
                to="productTechnologySection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <p className="text-center w-[120px] text-para cursor-pointer hover:border-b-2 border-amber-600 py-2 hover:text-orange-800">
                  video presntator
                </p>
              </ScrollLink>
            </div>
          </div>
        </div>
        <div className="px-5 grid grid-cols-1 xl:grid-cols-[2fr,1fr]">
          <div>
            {/* Overview section */}
            <div
              id="productOverviewSection"
              className="flex justify-between mt-5 mb-3"
            >
              <div className="md:px-10">
                <div className="font-semibold py-2 text-xl">Overview</div>

                <DemoOverview videoPackageData={videoPackageData} />
              </div>
            </div>
            {/* key and highlight section */}
            <div
              id="productHighlightSection"
              className="flex justify-between mt-5 mb-3"
            >
              <div className="md:px-10">
                <div className="font-semibold py-2 text-xl">
                  Key & Highlights
                </div>

                <DemoHightlight videoPackageData={videoPackageData} />
              </div>
            </div>
            {/* technology section */}
            <div
              id="productTechnologySection"
              className="flex justify-between mt-5 mb-3"
            >
              <div className="md:px-10">
                <div className="font-semibold py-2 text-xl">
                  Video Presentator
                </div>

                <DemoPrentater videoPackageData={videoPackageData} />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="sticky top-[50px] z-10">
              <div className="flex gap-1 justify-center items-center"></div>
              {/* side registration form */}
              <div className="md:px-5">
                <DemoSide />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* suggested  */}
      <div>
        <DemoSuggest filterSuggestedVideoPackage={filterSuggestedVideoPackage} />
      </div>
      {/* FAQ section here */}
      <div>
        <DemoFaqs videoPackageData={videoPackageData} />
      </div>
      {/* Footer section here */}
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Vdetail;
