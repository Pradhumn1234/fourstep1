import { useState, useEffect } from "react";
import AdminLayout from "@/Component/admin/AdminLayout";
import { useRouter } from "next/router";
import BasicInfoVideo from "@/Component/admin/VideoCreate/BasicInfoVideo";
import OverviewVideo from "@/Component/admin/VideoCreate/OverviewVideo";
import HightlightVideo from "@/Component/admin/VideoCreate/HightlightVideo";
import SeoVideo from "@/Component/admin/VideoCreate/SeoVideo";
import FaqVideo from "@/Component/admin/VideoCreate/FaqVideo";

const fetchIDProduct = async (video) => {
  const data = await fetch(`/api/videos/${video}`);
  return await data.json();
};
export default function CreateProduct() {
  const router = useRouter();
  const { demoes } = router?.query;
  const [videoData, setVideoData] = useState(null);
  const [activeTab, setActiveTab] = useState("Tab1");

  useEffect(() => {
    if (demoes) {
      fetchIDProduct(demoes).then((res) => {
        setVideoData(res?.data || null);
      });
    }
  }, [demoes, activeTab]);
  console.log("res of video product data is here ----> ",videoData)
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
    }
  }, []);

  return (
    <AdminLayout>
      <div className="flex items-center gap-5 text-primary pb-3">
        <p className="md:text-[28px] text-2xl text-black">create a videos</p>
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
              Highlights
            </button>
            <button
              onClick={() => setActiveTab("Tab4")}
              className={`${
                activeTab === "Tab4"
                  ? "border-b-2 scale-105 border-black text-black"
                  : "border-black text-slate-500"
              } px-3 py-1`}
            >
              Faqvideo
            </button>

            <button
              onClick={() => setActiveTab("Tab5")}
              className={`${
                activeTab === "Tab5"
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
        <BasicInfoVideo setActiveTab={setActiveTab} videoData={videoData} />
      </div>

      <>
        <div
          className={`tab-content ${activeTab === "Tab2" ? "block" : "hidden"}`}
        >
          <OverviewVideo setActiveTab={setActiveTab} videoData={videoData} />
        </div>
        <div
          className={`tab-content ${activeTab === "Tab3" ? "block" : "hidden"}`}
        >
          <HightlightVideo setActiveTab={setActiveTab} videoData={videoData} />
        </div>
        {/* for FAQS */}

        <div
          className={`tab-content ${activeTab === "Tab4" ? "block" : "hidden"}`}
        >
          <FaqVideo setActiveTab={setActiveTab} videoData={videoData} />
        </div>

        {/* for the seo section */}
        <div
          className={`tab-content ${activeTab === "Tab5" ? "block" : "hidden"}`}
        >
          <SeoVideo setActiveTab={setActiveTab} videoData={videoData} />
        </div>
      </>
    </AdminLayout>
  );
}
