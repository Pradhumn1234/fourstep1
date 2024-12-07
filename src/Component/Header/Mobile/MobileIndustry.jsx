// src/components/MobileIndustry.js
import React, { useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const MobileIndustry = ({ activeSection, handleSectionClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const industries = [
    { title: "Travel and Hospitality", path: "/industries/travel" },
    { title: "Construction & Real Estate", path: "/industries/construction" },
    { title: "Financial Management", path: "/industries/finance" },
    { title: "Education & eLearning", path: "/industries/education" },
    { title: "Retail & Ecommerce", path: "/industries/retail" },
    { title: "Healthcare & Pharmaceuticals", path: "/industries/healthcare" },
    { title: "Software & Tech", path: "/industries/software" },
    { title: "Manufacturing & Engineering", path: "/industries/manufacturing" },

  ];

  const toggleIndustries = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container mx-auto px-5 mt-5 ">
      <button
        onClick={toggleIndustries}
        className="text-gray-700 hover:text-black text-md font-semibold cursor-pointer flex items-center justify-between w-full"
      >
        Industries
        <span>
          {isOpen ? (
            <FaChevronUp className="text-emerald-800" />
          ) : (
            <FaChevronDown />
          )}
        </span>
      </button>
      {isOpen && (
        <div className="mt-4 max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          <ul className="space-y-4 ">
            {industries.map((industry) => (
              <li key={industry.title}>
                <Link href={industry.path}>
                  <p
                    className={`text-sm text-gray-700 hover:text-black cursor-pointer ${
                      activeSection === industry.title
                        ? "border-b-2 border-blue-500"
                        : ""
                    }`}
                    onClick={() => handleSectionClick(industry.title)} // Handle click
                  >
                    {industry.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileIndustry;
