import React from "react";

const DemoOverview = ({ videoPackageData }) => {
  const overview = videoPackageData?.overview || {};

  return (
    <div className=" conatiner">
      <div className="   md:border xl:flex flex-col w-full gap-4  p-3 relative bg-white shadow h-auto ">
        <div className=" px-2  ">
          <h2 className=" text-lg py-3 font-bold">Key overview of Products</h2>

          <div className="rich-text-content">
            <p
              className=""
              dangerouslySetInnerHTML={{
                __html: overview?.description || "No description available",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoOverview;
