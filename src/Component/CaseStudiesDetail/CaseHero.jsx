import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";

const CaseHero = ({ caseHero }) => {
  const { title, altText, description, path } = caseHero || {};
  return (
    <>
      <div className="container mx-auto md:pt-0  pt-20">
        <div className="flex flex-col lg:flex-row h-auto items-center justify-between bg-gradient-to-r from-blue-100 to-teal-50 rounded-lg overflow-hidden shadow-lg py-8 lg:py-12 gap-8 lg:gap-5">
          {/* Left section - Course Info */}
          <div className="w-full lg:w-3/5 px-4 md:text-center lg:text-left">
            <h1 className="text-xl sm:text-2xl capitalize md:text-3xl lg:text-4xl font-bold md:mb-4 mb-1">
              {title}
            </h1>

            <p className="text-sm sm:text-base lg:text-base md:mb-6 mb-3 capitalize leading-relaxed">
              {description}
            </p>

            <div class="flex  gap-3 justify-center md:justify-start">
              <Link href="/">
                <button class="bg-orange-600 text-white text-xs  py-3 px-3  md:text-lg font-semibold md:py-3 md:px-6 rounded-full shadow-sm hover:bg-orange-500 transition duration-300 transform hover:scale-105 w-full md:w-auto">
                  Book A Discovery Meeting
                </button>
              </Link>
              <Link href="#">
                <button class="bg-orange-600 text-white text-xs  py-3 px-3  md:text-lg font-semibold md:py-3 md:px-6 rounded-full shadow-sm hover:bg-orange-500 transition duration-300 transform hover:scale-105 w-full md:w-auto">
                  Pdf Download
                </button>
              </Link>
            </div>
          </div>
          {/* 
        {/* Right section - Video */}
          <div className="w-full lg:w-2/5 flex justify-center overflow-hidden items-center">
            <div className="w-full px-2 h-48 sm:h-64 md:h-80 lg:h-64 xl:h-80 2xl:h-96 rounded-lg md:overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
              <Image src={path} width={500} height={500} alt={altText} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseHero;
