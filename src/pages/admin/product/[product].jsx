import { useState, useEffect } from "react";
import AdminLayout from "@/Component/admin/AdminLayout";
import { useRouter } from "next/router";
import BasicInfoPro from "@/Component/admin/ProductCreate/BasicInfoPro";
import OverviewPro from "@/Component/admin/ProductCreate/OverviewPro";
import HightlightPro from "@/Component/admin/ProductCreate/HightlightPro";
import ScreenshotPro from "@/Component/admin/ProductCreate/ScreenshotPro";
import FaqsPro from "@/Component/admin/ProductCreate/FaqsPro";
import SeoPro from "@/Component/admin/ProductCreate/SeoPro";
import TechPro from "@/Component/admin/ProductCreate/TechPro";

const fetchIDProduct = async (product) => {
  const data = await fetch(`/api/product/${product}`);
  return await data.json();
};
export default function CreateProduct() {
  const router = useRouter();
  const { product } = router?.query;
  const [productData, setProductData] = useState(null);
  const [activeTab, setActiveTab] = useState("Tab1");

  useEffect(() => {
    if (product) {
      fetchIDProduct(product).then((res) => {
        // console.log("res of product data is here ----> ",res)
        setProductData(res?.data || null);
      });
    }
  }, [product, activeTab]);

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
   
    
  }, []);

  return (
    <AdminLayout>
      <div className="flex items-center gap-5 text-primary pb-3">
        <p className="md:text-[28px] text-2xl text-black">Create Product </p>
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
              Technology
            </button>
            <button
              onClick={() => setActiveTab("Tab5")}
              className={`${
                activeTab === "Tab5"
                  ? "border-b-2 scale-105 border-black text-black"
                  : "border-black text-slate-500"
              } px-3 py-1`}
            >
              FAQS
            </button>
            <button
              onClick={() => setActiveTab("Tab6")}
              className={`${
                activeTab === "Tab6"
                  ? "border-b-2 scale-105 border-black text-black"
                  : "border-black text-slate-500"
              } px-3 py-1`}
            >
              ScrreenShot
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
        <BasicInfoPro setActiveTab={setActiveTab} productData={productData} />
      </div>

      <>
        <div
          className={`tab-content ${activeTab === "Tab2" ? "block" : "hidden"}`}
        >
          <OverviewPro setActiveTab={setActiveTab} productData={productData} />
        </div>
        <div
          className={`tab-content ${activeTab === "Tab3" ? "block" : "hidden"}`}
        >
          <HightlightPro
            setActiveTab={setActiveTab}
            productData={productData}
          />
        </div>
        <div
          className={`tab-content ${activeTab === "Tab4" ? "block" : "hidden"}`}
        >
          <TechPro setActiveTab={setActiveTab} productData={productData} />
        </div>

        {/* for FAQS */}
        <div
          className={`tab-content ${activeTab === "Tab5" ? "block" : "hidden"}`}
        >
          <FaqsPro setActiveTab={setActiveTab} productData={productData} />
        </div>
        {/* for the ScreenShot  */}
        <div
          className={`tab-content ${activeTab === "Tab6" ? "block" : "hidden"}`}
        >
          <ScreenshotPro
            setActiveTab={setActiveTab}
            productData={productData}
          />
        </div>
        {/* for the seo section */}
        <div
          className={`tab-content ${activeTab === "Tab7" ? "block" : "hidden"}`}
        >
          <SeoPro setActiveTab={setActiveTab} productData={productData} />
        </div>
      </>
    </AdminLayout>
  );
}
