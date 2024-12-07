import Link from "next/link";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"; // Importing FontAwesome icons

const DesktopIndustry = ({ activeLink, handleLinkClick }) => {
  const [dropDown, setDropdown] = useState(false);

  const handleMouseEnter = () => {
    setDropdown(true);
  };

  const handleMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <li
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href="/industry">
        <div
          onClick={() => handleLinkClick("/industry")}
          className={`relative inline-flex items-center text-base font-medium px-3 py-2 ${
            activeLink === "/industry" ? "text-orange-500" : "text-gray-800"
          } hover:text-orange-500 transition-colors duration-300`}
        >
          Industry
          {dropDown ? (
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
          <span
            className={`absolute left-0 bottom-0 h-0.5 w-full bg-orange-500 transition-all duration-300 transform ${
              activeLink === "/industry" ? "scale-x-100" : "scale-x-0"
            }`}
          ></span>
        </div>
      </Link>

      {/* Dropdown Section */}
      {dropDown && (
        <div className="absolute left-[-20px] text-[15px]    w-72 bg-white border rounded-lg border-gray-200 shadow-lg z-10">
          <ul className="py-2 space-y-1 list-none">
            <li>
              <Link
                href="/industry/travel-hospitality"
                className="block px-4 py-1 text-gray-800 hover:bg-gray-100 hover:text-orange-500 rounded-lg transition-colors duration-300"
              >
                Travel and Hospitality
              </Link>
            </li>
            <li>
              <Link
                href="/industry/construction-realestate"
                className="block px-4 py-1 text-gray-800 hover:bg-gray-100 hover:text-orange-500 rounded-lg transition-colors duration-300"
              >
                Construction & Real Estate
              </Link>
            </li>
            <li>
              <Link
                href="/industry/financial-management"
                className="block px-4 py-1 text-gray-800 hover:bg-gray-100 hover:text-orange-500 rounded-lg transition-colors duration-300"
              >
                Financial Management
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block px-4 py-1 text-gray-800 hover:bg-gray-100 hover:text-orange-500 rounded-lg transition-colors duration-300"
              >
                Education & eLearning
              </Link>
            </li>
            <li>
              <Link
                href="/#"
                className="block px-4 py-1 text-gray-800 hover:bg-gray-100 hover:text-orange-500 rounded-lg transition-colors duration-300"
              >
                Retail & Ecommerce
              </Link>
            </li>
            <li>
              <Link
                href="/#"
                className="block px-4 py-1 text-gray-800 hover:bg-gray-100 hover:text-orange-500 rounded-lg transition-colors duration-300"
              >
                Healthcare & Pharmaceuticals
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block px-4 py-1 text-gray-800 hover:bg-gray-100 hover:text-orange-500 rounded-lg transition-colors duration-300"
              >
                Software & Tech
              </Link>
            </li>
            <li>
              <Link
                href="/industry/manufacturing-engineering"
                className="block px-4 py-1 text-gray-800 hover:bg-gray-100 hover:text-orange-500 rounded-lg transition-colors duration-300"
              >
                Manufacturing & Engineering
              </Link>
            </li>
          </ul>
        </div>
      )}
    </li>
  );
};

export default DesktopIndustry;
