import React from "react";

function ProductTechnology({ technologydata }) {
  const technologyDescription = technologydata?.description;

  return (
    <div className=" conatiner">
      <div className="   md:border xl:flex flex-col w-full gap-4  p-3 relative bg-white shadow h-auto ">
        <div className=" px-2  ">
          <h2 className=" text-lg py-3 font-bold">
            Key overview of Technology
          </h2>

          {technologyDescription && (
            <div
              className="rich-text-content"
              dangerouslySetInnerHTML={{ __html: technologyDescription }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductTechnology;
