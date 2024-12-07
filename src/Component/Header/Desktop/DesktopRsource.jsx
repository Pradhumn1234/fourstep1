import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faBlog,
  faVideo,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { faYoutubeSquare } from "@fortawesome/free-brands-svg-icons"; // Importing the YouTube icon

const DesktopResource = ({ resourceopen, setResourceopen }) => {
  const handleMouseEnter = () => setResourceopen(true);
  const handleMouseLeave = () => setResourceopen(false);

  return (
    <div
      className="relative inline-block text-base font-medium px-3 py-2 text-gray-800"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="focus:outline-none hover:text-orange-500 flex items-center relative">
        <p>Resources</p>
        {resourceopen ? (
          <FontAwesomeIcon
            icon={faChevronUp}
            className="ml-1  mt-[2px] inline-block transition-transform duration-300"
            size="sm"
          />
        ) : (
          <FontAwesomeIcon
            icon={faChevronDown}
            className="ml-1  mt-[2px] inline-block transition-transform duration-300"
            size="sm"
          />
        )}
        <span className="absolute left-0 bottom-0 h-0.5 w-full transition-all duration-300 transform scale-x-0 hover:scale-x-100" />
      </button>
      {resourceopen && (
        <div className="absolute left-0 mt-1 w-64 my-2 h-auto rounded-[17px] bg-white shadow-lg z-10">
          <ul className="h-full w-full    ">
            <li className="flex justify-between items-center    px-4 py-3  hover:bg-gray-200   border-b border-gray-200  cursor-pointer">
              <div className="flex gap-1   items-center">
                <FontAwesomeIcon icon={faBlog} className=" text-gray-600" />
                <Link href="/resource/blog">Blog</Link>
              </div>
              <FontAwesomeIcon icon={faCaretRight} className=" text-gray-600" />
            </li>

            <li className="flex justify-between items-center px-4 py-3 border-b border-gray-200  hover:bg-gray-200 cursor-pointer">
              <div className="flex gap-1  items-center">
                <FontAwesomeIcon
                  icon={faYoutubeSquare}
                  className=" text-gray-600"
                />
                <Link href="/resource/demo-videos">Videos & Demos</Link>
              </div>
              <FontAwesomeIcon icon={faCaretRight} className=" text-gray-600" />
            </li>
            <li className="flex justify-between items-center  hover:bg-gray-200  px-4 py-3  cursor-pointer">
              <div className="flex gap-1  items-center">
                <FontAwesomeIcon icon={faVideo} className=" text-gray-600" />
                <Link href="/resource/webinar">Webinar</Link>
              </div>
              <FontAwesomeIcon icon={faCaretRight} className=" text-gray-600" />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DesktopResource;
