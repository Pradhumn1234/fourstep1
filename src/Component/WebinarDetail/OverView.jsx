import React from "react";

function OverView({ overviewdata }) {
  const overview = overviewdata?.overview || {};

  return (
    <div className=" conatiner">
      <div className="   md:border xl:flex flex-col w-full gap-4  p-3 relative bg-white shadow h-auto ">
        <div className=" px-2  ">
          <h2 className=" text-lg py-3 font-semibold">Key overview of Webinars:</h2>

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
}

export default OverView;
