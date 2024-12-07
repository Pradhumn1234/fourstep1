import React, { useState } from "react";
import Link from "next/link";

// The services data remains the same
const services = [
  {
    name: "Zoho Based Solution",
    content: {
      heading: "Zoho Based Solution",
      description:
        "Explore our Zoho-based solutions tailored for various industries.",
      links: [
        { name: "Zoho Travel Agency CRM", link: "/zoho-travel-agency-crm" },
        {
          name: "Zoho RealEstate Agency CRM",
          link: "/zoho-realestate-agency-crm",
        },
        {
          name: "Zoho RealEstate Developer CRM",
          link: "/zoho-realestate-developer-crm",
        },
        { name: "Zoho Finance Agency CRM", link: "/zoho-finance-agency-crm" },
        { name: "Zoho Healthcare CRM", link: "/zoho-healthcare-crm" },
      ],
    },
  },
  {
    name: "Our Custom Products",
    content: {
      heading: "Our Custom Products",
      description:
        "Discover our range of custom products designed to meet your needs.",
      links: [
        {
          name: "Tour & Package Management System",
          link: "/tour-package-management-system",
        },
        {
          name: "Car Rental Booking System",
          link: "/car-rental-booking-system",
        },
        {
          name: "Hotel Booking Management System",
          link: "/hotel-booking-management-system",
        },
        {
          name: "Hospital/Clinics Management System",
          link: "/hospital-clinics-management-system",
        },
        {
          name: "Learning Management System",
          link: "/learning-management-system",
        },
        {
          name: "Finance Agency Management System (Upcoming Product)",
          link: "/finance-agency-management-system-upcoming",
        },
      ],
    },
  },
];

const DesktopSolution = ({ activeLink, handleLinkClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeService, setActiveService] = useState(services[0]); // Set default to the first service

  return (
    <li
      className="relative inline-block "
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <Link
        href="#"
        onClick={() => handleLinkClick("/#")}
        className={`relative inline-block text-base font-medium px-3 py-2 ${
          activeLink === "/#" ? "text-orange-500" : "text-gray-800"
        } hover:text-orange-500`}
      >
        Solution
        <span
          className={`absolute left-0 bottom-0 h-0.5 w-full bg-orange-500 transition-all duration-300 transform ${
            activeLink === "/#" ? "scale-x-100" : "scale-x-0"
          }`}
        ></span>
      </Link>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute left-[-10vw]  w-[65vw] rounded-md bg-white  border p-4 ">
          <div className="flex max-w-7xl mx-auto">
            {/* Sidebar Menu */}
            <div className="w-1/4  border-r  pr-4">
              <h2 className="text-lg  border-b  font-semibold">Services</h2>

              {services.map((service) => (
                <div
                  key={service.name}
                  className="py-2 px-2 text-md rounded font-normal cursor-pointer hover:bg-gray-200 transition-colors"
                  onMouseEnter={() => setActiveService(service)}
                  onClick={() => setActiveService(service)}
                >
                  {service.name}
                </div>
              ))}
            </div>
            {/* Content Area */}

            <div className="flex-1  bg-white pl-10  ">
              <h2 className="text-xl font-semibold    transition duration-200">
                {activeService.content.heading}
              </h2>
              <p className=" mb-4 text-sm  border-b text-gray-600">
                {activeService.content.description}
              </p>
              <div className="space-y-2  ">
                {activeService.content.links.map((link) => (
                  <Link key={link.name} href={link.link}>
                    <p className=" text-gray-800 text-sm py-1 hover:text-orange-500 transition duration-200">
                      {link.name}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

export default DesktopSolution;
