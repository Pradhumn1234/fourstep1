import { useState, useEffect } from "react";
import AdminLayout from "@/Component/admin/AdminLayout";
import { useRouter } from "next/router";
import OverviewCase from "@/Component/admin/CaseStudies/OverviewCase";
import BasicInfoCase from "@/Component/admin/CaseStudies/BasicInfoCase";
import HightlightCase from "@/Component/admin/CaseStudies/HightlightCase";
import FaqCase from "@/Component/admin/CaseStudies/FaqCase";
import Visuals from "@/Component/admin/CaseStudies/Visuals";
import SeoCase from "@/Component/admin/CaseStudies/SeoCase";
import ResultMatrix from "@/Component/admin/CaseStudies/ResultMatrix";

const fetchIDProduct = async (product) => {
  const data = await fetch(`/api/casestudy/${product}`);
  return await data.json();
};
export default function CreateProduct() {
  const router = useRouter();
  const { casestudy} = router?.query;
  const [casestudyData, setCasestudyData] = useState(null);
  const [activeTab, setActiveTab] = useState("Tab1");

  useEffect(() => {
    if (casestudy) {
      fetchIDProduct(casestudy).then((res) => {
        // console.log("res of product data is here ----> ",res)
        setCasestudyData(res?.data || null);
      });
    }
  }, [casestudy, activeTab]);

  // Function to switch to the next tab
  useEffect(() => {
    if (activeTab === "Tab1") {
      setActiveTab("Tab2");
    } else if (activeTab === "Tab2") {
      setActiveTab("Tab3");
    } else if (activeTab === "Tab3") {
      setActiveTab("Tab4");
    } else if (activeTab === "Tab4") {
      setActiveTab("Tab5");
    } else if (activeTab === "Tab5") {
      setActiveTab("Tab6");
    }
    else if (activeTab === "Tab6") {
      setActiveTab("Tab7");
    }
  }, []);

  return (
    <AdminLayout>
      <div className="flex items-center gap-5 text-primary pb-3">
        <p className="md:text-[28px] text-2xl text-black">
          Create Case Studies
        </p>
      </div>
      <div className="border-b border-slate-300 mb-5">
        <div className="flex gap-2 text-[14px] pt-3 pb-2 flex-wrap">
          <button
            onClick={() => setActiveTab("Tab1")}
            className={`${
              activeTab === "Tab1"
                ? "border-b-2 scale-105 border-black text-black"
                : "border-black text-slate-500"
            } px-3 py-1`}
          >
            Basic Information
          </button>

          <>
            <button
              onClick={() => setActiveTab("Tab2")}
              className={`${
                activeTab === "Tab2"
                  ? "border-b-2 scale-105 border-black text-black"
                  : "border-black text-slate-500"
              } px-3 py-1`}
            >
              Overviews
            </button>
            <button
              onClick={() => setActiveTab("Tab3")}
              className={`${
                activeTab === "Tab3"
                  ? "border-b-2 scale-105 border-black text-black"
                  : "border-black text-slate-500"
              } px-3 py-1`}
            >
              challenge & Solution
            </button>
            <button
              onClick={() => setActiveTab("Tab4")}
              className={`${
                activeTab === "Tab4"
                  ? "border-b-2 scale-105 border-black text-black"
                  : "border-black text-slate-500"
              } px-3 py-1`}
            >
              Rsults & Matrix
            </button>
            <button
              onClick={() => setActiveTab("Tab5")}
              className={`${
                activeTab === "Tab5"
                  ? "border-b-2 scale-105 border-black text-black"
                  : "border-black text-slate-500"
              } px-3 py-1`}
            >
              visuals
            </button>
            <button
              onClick={() => setActiveTab("Tab6")}
              className={`${
                activeTab === "Tab6"
                  ? "border-b-2 scale-105 border-black text-black"
                  : "border-black text-slate-500"
              } px-3 py-1`}
            >
              FaqCase
            </button>
            <button
              onClick={() => setActiveTab("Tab7")}
              className={`${
                activeTab === "Tab7"
                  ? "border-b-2 scale-105 border-black text-black"
                  : "border-black text-slate-500"
              } px-3 py-1`}
            >
              Seo Field
            </button>
          </>
        </div>
      </div>

      {/* Render each tab's content conditionally */}
      <div
        className={`tab-content ${activeTab === "Tab1" ? "block" : "hidden"}`}
      >
        <BasicInfoCase
          setActiveTab={setActiveTab}
          casestudyData={casestudyData}
        />
      </div>

      <>
        <div
          className={`tab-content ${activeTab === "Tab2" ? "block" : "hidden"}`}
        >
          <OverviewCase
            setActiveTab={setActiveTab}
            casestudyData={casestudyData}
          />
        </div>
        <div
          className={`tab-content ${activeTab === "Tab3" ? "block" : "hidden"}`}
        >
          <HightlightCase
            setActiveTab={setActiveTab}
            casestudyData={casestudyData}
          />
        </div>
        <div
          className={`tab-content ${activeTab === "Tab4" ? "block" : "hidden"}`}
        >
          <ResultMatrix
            setActiveTab={setActiveTab}
            casestudyData={casestudyData}
          />
        </div>
        {/* for FAQS */}

        <div
          className={`tab-content ${activeTab === "Tab5" ? "block" : "hidden"}`}
        >
          <Visuals setActiveTab={setActiveTab} casestudyData={casestudyData} />
        </div>

        {/* for the ScreenShot  */}
        <div
          className={`tab-content ${activeTab === "Tab6" ? "block" : "hidden"}`}
        >
          <FaqCase setActiveTab={setActiveTab} casestudyData={casestudyData} />
        </div>
        {/* for the seo section */}
        <div
          className={`tab-content ${activeTab === "Tab7" ? "block" : "hidden"}`}
        >
          <SeoCase setActiveTab={setActiveTab} casestudyData={casestudyData} />
        </div>
      </>
    </AdminLayout>
  );
}
