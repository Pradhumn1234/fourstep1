import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ChooseUs = () => {
  return (
    <>
      {/* ====================================== */}
      <div className="container ">
        <div className="md:flex md:px-10 py-5 px-5 md:mt-5">
          <div className="md:w-1/2 rounded-md md:pl-5 md:block">
            <img
              src="https://t4.ftcdn.net/jpg/01/41/52/31/360_F_141523101_8umyxdkpKIqFgVImRhcWNwH9Gg5TBu29.jpg"
              alt=""
              className="w-full h-auto rounded-md object-cover"
            />
          </div>
          <div className="md:w-1/2 w-full h-auto md:pl-5 md:p-0 py-5 md:mt-0 mt-5">
            <div className="md:px-10 mb-5">
              <h2 className="text-3xl font-semibold mb-3 capitalize">
                <span className="">Why choose us</span>?
              </h2>
              <p>
                Trying to win over your customers with result driven digital
                strategies, choose{" "}
                <span className="text-primary">Four Steps Digital</span>
              </p>
            </div>
            <div className="w-full  mx-auto md:px-10 px-0">
              <ul>
                <li className="mb-2 flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className=" mt-1 text-primary"
                  />
                  Customer-centric approach in business.
                </li>
                <li className="mb-2 flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className=" mt-1 text-primary"
                  />
                  Boost ROI and Brand Awareness.
                </li>
                <li className="mb-2 flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className=" mt-1 text-primary"
                  />
                  End-to-end support for services.
                </li>
                <li className="mb-2 flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className=" mt-1 text-primary"
                  />
                  Build and Improve Brand reputation.
                </li>
                <li className="mb-2 flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className=" mt-1 text-primary"
                  />
                  Track results through performance tracking.
                </li>
                <li className="mb-2 flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className=" mt-1 text-primary"
                  />
                  Technology-driven services.
                </li>
                <li className="mb-2 flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className=" mt-1 text-primary"
                  />
                  Affordable pricing.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
