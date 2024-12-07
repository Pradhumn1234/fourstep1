
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const MobileSolutions = ({ activeSection, handleSectionClick }) => {
  const [isSolutionsVisible, setIsSolutionsVisible] = useState(false);

  const solutions = [
    {
      name: "Zoho Based Solutions",
      subcategories: [
        {
          name: "Zoho Travel Agency CRM",
          path: "/solutions/zoho-travel-agency-crm",
        },
        {
          name: "Zoho RealEstate Agency CRM",
          path: "/solutions/zoho-realestate-agency-crm",
        },
        {
          name: "Zoho RealEstate Developer CRM",
          path: "/solutions/zoho-realestate-developer-crm",
        },
        {
          name: "Zoho Finance Agency CRM",
          path: "/solutions/zoho-finance-agency-crm",
        },
        { name: "Zoho Healthcare CRM", path: "/solutions/zoho-healthcare-crm" },
      ],
    },
    {
      name: "Custom Solutions",
      subcategories: [
        {
          name: "Tour & Package Management System",
          path: "/solutions/tour-package-management",
        },
        {
          name: "Car Rental Booking System",
          path: "/solutions/car-rental-booking",
        },
        {
          name: "Hotel Booking Management System",
          path: "/solutions/hotel-booking-management",
        },
        {
          name: "Hospital/Clinics Management System",
          path: "/solutions/hospital-management",
        },
        {
          name: "Learning Management System",
          path: "/solutions/learning-management",
        },
        {
          name: "Finance Agency Management System (Upcoming Product)",
          path: "/solutions/finance-agency-management",
        },
      ],
    },
  ];

  const toggleSolutions = () => {
    setIsSolutionsVisible(!isSolutionsVisible);
  };

  const renderSolutions = () => {
    return solutions.map((solution) => (
      <div key={solution.name}>
        <h3 className="font-semibold text-gray-900">{solution.name}</h3>
        <ul className=" list-none">
          {solution.subcategories.map((subcategory) => (
            <li
              key={subcategory.name}
              onClick={() => handleSectionClick(subcategory.name)}
              className="cursor-pointer py-1"
            >
              <Link href={subcategory.path}>
                <p
                  className={`text-sm text-gray-600 inline-block hover:text-gray-800 transition ${
                    activeSection === subcategory.name
                      ? "border-b-2 border-blue-500"
                      : ""
                  }`}
                >
                  {subcategory.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ));
  };

  return (
    <div>
      <button
        className="w-full text-left text-gray-700 hover:text-black px-5 mt-5 text-md font-semibold flex items-center justify-between"
        onClick={toggleSolutions}
      >
        Solutions
        {isSolutionsVisible ? (
          <FontAwesomeIcon icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
      </button>

      {isSolutionsVisible && (
        <div className="mt-2 space-y-2 px-4 max-h-56 overflow-y-auto scrollbar-thick">
          {renderSolutions()}
        </div>
      )}
    </div>
  );
};

export default MobileSolutions;
