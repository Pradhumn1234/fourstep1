// import AdminLayout from "@/Component/admin/AdminLayout";
// import BasicInfo from "@/Component/admin/ProductCreate/BasicInfoPro";
// import React from "react";

// const CreateProduct = () => {
//   return (
//     <AdminLayout>
//       <div>
//         <h4>welcome to create product</h4>
//         <BasicInfo />
//       </div>
//     </AdminLayout>
//   );
// };

// export default CreateProduct;
import { useState } from "react";
import BasicInfo from "@/Component/admin/ProductCreate/BasicInfoPro";
import AdminLayout from "@/Component/admin/AdminLayout";

export default function CreateWebinar() {
  const [productData, setProductData] = useState(null);
  const [activeTab, setActiveTab] = useState("Tab1");
  return (
    <AdminLayout>
      <div className="flex items-center gap-5 text-primary pb-3">
        <p className="md:text-[28px] text-2xl text-black">Create Product</p>
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
        </div>
      </div>

      {/* Render each tab's content conditionally */}
      <div
        className={`tab-content ${activeTab === "Tab1" ? "block" : "hidden"}`}
      >
        <BasicInfo setActiveTab={setActiveTab} productData={productData} />
      </div>
    </AdminLayout>
  );
}
