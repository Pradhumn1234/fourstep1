import React from "react";

const ProductOverview = ({ ProductOverview }) => {
  const overview = ProductOverview?.overview || {};

  return (
    <div className=" conatiner">
      <div className="   md:border xl:flex flex-col w-full gap-4  p-3 relative bg-white shadow h-auto ">
        <div className=" px-2  ">
          <h2 className=" text-lg py-3 font-bold">Key overview of Products</h2>
          {/* <ul className="  text-sm list-decimal md:px-5">
            <li>
              Format:: Products typically include presentations, discussions,
              and interactive sessions, often utilizing slides, videos, or
              demonstrations.
            </li>
            Interactivity: Participants can engage with presenters through Q&A
            sessions, polls, and chat features, enhancing the learning
            experience.
            <li>
              Accessibility: Products can be accessed from anywhere with an
              internet connection, making them convenient for both presenters
              and attendees.
            </li>
            <li>
              Recording: Many webinar platforms allow for sessions to be
              recorded and shared later, enabling attendees to review content or
              catch up if they missed the live event.
            </li>
            <li>
              Cost-Effective: Products eliminate travel and venue costs
              associated with in-person events, making them a cost-effective
              solution for organizations.
            </li>
            <li>
              Audience Reach: They enable organizations to reach a global
              audience without the limitations of physical space.
            </li>
          </ul> */}
          {/* <div className=" font-semibold py-3">Benefits of Products</div>

          <ul className="  text-sm list-disc md:px-5">
            <li>
              Cost-Effective: Products eliminate travel and venue costs
              associated with in-person events, making them a cost-effective
              solution for organizations.
            </li>
            <li>
              Audience Reach: They enable organizations to reach a global
              audience without the limitations of physical space.
            </li>
            <li>
              Audience Reach: They enable organizations to reach a global
              audience without the limitations of physical space.
            </li>
            <li>
              Audience Reach: They enable organizations to reach a global
              audience without the limitations of physical space.
            </li>
            <li>
              Audience Reach: They enable organizations to reach a global
              audience without the limitations of physical space.
            </li>
          </ul> */}
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

export default ProductOverview;
