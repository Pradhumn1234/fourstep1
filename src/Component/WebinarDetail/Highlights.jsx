import React from "react";

const Features = ({ hightlightdata }) => {
  const highlightsDescription = hightlightdata?.highlights?.description;

  return (
    <div className=" conatiner">
      <div className="   md:border xl:flex flex-col w-full gap-4  p-3 relative bg-white shadow h-auto ">
        <div className=" px-2  ">
          <h3 className=" text-lg py-3 font-semibold">
            Highlights of the Webinar:
          </h3>
          <div>
            {highlightsDescription && (
              <div
                className="rich-text-content"
                dangerouslySetInnerHTML={{ __html: highlightsDescription }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
