import React from "react";

const ProductHightlight = ({ Productdata }) => {
  const highlightsDescription = Productdata?.highlight?.description;

  return (
    <div className=" conatiner">
      <div className="   md:border xl:flex flex-col w-full gap-4  p-3 relative bg-white shadow h-auto ">
        <div className=" px-2  ">
          <h2 className=" text-lg py-3 font-bold">Key overview of Products</h2>

          {highlightsDescription && (
            <div
              className="rich-text-content"
              dangerouslySetInnerHTML={{ __html: highlightsDescription }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductHightlight;
