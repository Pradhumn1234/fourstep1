

import React from "react";

const WebinarHero = ({ Herodata }) => {
  const speaker = Herodata?.speaker || {};
  const { description, link, title } = Herodata || {};

  return (
    <div className="container md:pt-0  pt-20 mx-auto">
      <div className="flex flex-col lg:flex-row h-auto items-center justify-between bg-gradient-to-r from-blue-100 to-teal-100 rounded-lg overflow-hidden shadow-lg py-8 lg:py-12 gap-8 lg:gap-5">
        {/* Left section - Course Info */}
        <div className="w-full lg:w-3/5 px-4 md:text-center lg:text-left">
          <h1 className="text-xl sm:text-2xl capitalize md:text-3xl lg:text-4xl font-bold md:mb-4 mb-1">
            {title}
          </h1>

          {description && (
            <p className="text-sm sm:text-base lg:text-base md:mb-6 mb-3 line-clamp-6 md:line-clamp-7 capitalize leading-relaxed">
              {description}
            </p>
          )}

          <div className="text-sm sm:text-base lg:text-lg">
            <span>Created by: </span>
            <span className="font-semibold  capitalize cursor-pointer">
              {speaker?.name}
            </span>
          </div>
        </div>
        {/* 
        {/* Right section - Video */}
        <div className="w-full lg:w-2/5 flex justify-center overflow-hidden items-center">
          <div className="w-full px-2 h-48 sm:h-64 md:h-80 lg:h-64 xl:h-80 2xl:h-96 rounded-lg md:overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
            {link && (
              <iframe
                className="w-full h-full rounded-lg"
                src={link}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarHero;
