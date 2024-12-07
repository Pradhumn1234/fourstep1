import { useState, useEffect } from "react";
import AdminLayout from "@/Component/admin/AdminLayout";
import { useRouter } from "next/router";
import BasicInfoBlog from "@/Component/admin/Blog/BasicInfoBlog";
import BlogDetailing from "@/Component/admin/Blog/BlogDetailing";
import BlogSeo from "@/Component/admin/Blog/BlogSeo";

const fetchIDProduct = async (blog) => {
  const data = await fetch(`/api/blog/${blog}`);
  return await data.json();
};
export default function CreateProduct() {
  const router = useRouter();
  const { blog } = router?.query;
  console.log("...............", router);
  const [blogData, setBlogData] = useState(null);
  const [activeTab, setActiveTab] = useState("Tab1");

  useEffect(() => {
    if (blog) {
      fetchIDProduct(blog).then((res) => {
        // console.log("res of product data is here ----> ",res)
        setBlogData(res?.data || null);
      });
    }
  }, [blog, activeTab]);

  // Function to switch to the next tab
  useEffect(() => {
    if (activeTab === "Tab1") {
      setActiveTab("Tab2");
    } else if (activeTab === "Tab2") {
      setActiveTab("Tab3");
    } else if (activeTab === "Tab3") {
      setActiveTab("Tab1");
    }
  }, []);

  return (
    <AdminLayout>
      <div className="flex items-center gap-5 text-primary pb-3">
        <p className="md:text-[28px] text-2xl text-black">create a Blog</p>
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
              BlogDetailing
            </button>

            <button
              onClick={() => setActiveTab("Tab3")}
              className={`${
                activeTab === "Tab3"
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
        <BasicInfoBlog setActiveTab={setActiveTab} blogData={blogData} />
      </div>
      <>
        <div
          className={`tab-content ${activeTab === "Tab2" ? "block" : "hidden"}`}
        >
          <BlogDetailing setActiveTab={setActiveTab} blogData={blogData} />
        </div>
        {/* for the seo section */}
        <div
          className={`tab-content ${activeTab === "Tab3" ? "block" : "hidden"}`}
        >
          <BlogSeo setActiveTab={setActiveTab} blogData={blogData} />
        </div>
      </>
    </AdminLayout>
  );
}
