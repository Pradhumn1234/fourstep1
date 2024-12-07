import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"; // Importing FontAwesome icons

import Link from "next/link";

const categoryData = [
  {
    title: "Zoho Services",
    content: {
      heading: "Zoho Services",
      description:
        "Explore our Zoho-based services tailored for various industries.",
      subcategories: [
        {
          name: "Zoho Setup and Implementation",
          path: "/servicesDetail/zoho/zoho-setup",
        },
        {
          name: "Zoho Managed Services",
          path: "/servicesDetail/zoho/zoho-manage",
        },
        {
          name: "Zoho Custom Development",
          path: "/servicesDetail/zoho/zoho-custom",
        },
        {
          name: "Zoho Training & Consulting",
          path: "/servicesDetail/zoho/zoho-training",
        },
        { name: "Zoho Travel Agency CRM", path: "/zoho-travel-agency-crm" },
        {
          name: "Zoho RealEstate Agency CRM",
          path: "/zoho-realestate-agency-crm",
        },
        {
          name: "Zoho RealEstate Developer CRM",
          path: "/zoho-realestate-developer-crm",
        },
        { name: "Zoho Finance Agency CRM", path: "/zoho-finance-agency-crm" },
        { name: "Zoho Healthcare CRM", path: "/zoho-healthcare-crm" },
      ],
    },
  },
  {
    title: "Custom Products",
    content: {
      heading: "Custom Products",
      description:
        "Discover our range of custom products designed to meet your needs.",
      subcategories: [
        {
          name: "Tour & Package Management System",
          path: "/tour-package-management-system",
        },
        {
          name: "Car Rental Booking System",
          path: "/car-rental-booking-system",
        },
        {
          name: "Hotel Booking Management System",
          path: "/hotel-booking-management-system",
        },
        {
          name: "Hospital/Clinics Management System",
          path: "/hospital-clinics-management-system",
        },
        {
          name: "Learning Management System",
          path: "/learning-management-system",
        },
        {
          name: "Finance Agency Management System (Upcoming)",
          path: "/finance-agency-management-system-upcoming",
        },
      ],
    },
  },
  {
    title: "HubSpot Services",
    content: {
      heading: "HubSpot Services",
      description: "Find the perfect HubSpot solution for your needs.",
      subcategories: [
        {
          name: "Hubspot Setup and Implementation",
          path: "/servicesDetail/hubspot/setup",
        },
        {
          name: "Hubspot Development",
          path: "/servicesDetail/hubspot/development",
        },
        {
          name: "Hubspot Training & Consulting",
          path: "/servicesDetail/hubspot/training",
        },
        {
          name: "Hubspot Managed Services",
          path: "/servicesDetail/hubspot/managed",
        },
      ],
    },
  },
  {
    title: "Website Development",
    content: {
      heading: "Website Development",
      description:
        "We offer top-notch website development services tailored to your needs.",
      subcategories: [
        { name: "CMS Development", path: "/servicesDetail/website/cmsdetail" },
        {
          name: "Custom Web Development",
          path: "/servicesDetail/website/customeweb",
        },
        {
          name: "E-commerce Store",
          path: "/servicesDetail/website/e-commerce",
        },
      ],
    },
  },
  {
    title: "Zoho Industry Solution",
    content: {
      heading: "Zoho Industry Solutions",
      description: "Customized CRM solutions for different industries.",
      subcategories: [
        {
          name: "Zoho CRM For Real Estate",
          path: "/servicesDetail/zohoindustry/zoho-real-estate",
        },
        {
          name: "Zoho CRM For Travel Agency",
          path: "/servicesDetail/zohoindustry/zoho-travel-agency",
        },
      ],
    },
  },
  {
    title: "Other CRM Services",
    content: {
      heading: "Other CRM Services",
      description:
        "We offer a wide range of CRM services including Bitrix24 and Salesforce.",
      subcategories: [
        {
          name: "Bitrix24 Services",
          path: "/servicesDetail/zohoindustry/bitrix24",
        },
        {
          name: "Salesforce Service",
          path: "/servicesDetail/zohoindustry/salseforce",
        },
      ],
    },
  },
  {
    title: "Digital Marketing",
    content: {
      heading: "Digital Marketing",
      description:
        "Our expert marketing team helps you grow your online presence.",
      subcategories: [
        { name: "SEO Services", path: "/servicesDetail/digitalmarketing/seo" },
        {
          name: "Social Media Marketing",
          path: "/servicesDetail/digitalmarketing/socialmedia-management",
        },
        {
          name: "Content Marketing",
          path: "/servicesDetail/digitalmarketing/content-marketing",
        },
        {
          name: "PPC Management",
          path: "/servicesDetail/digitalmarketing/ppc-management",
        },
      ],
    },
  },
];

const Categories = () => {
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(categoryData[0]);

  const handleMouseEnter = () => setIsServiceMenuOpen(true);
  const handleMouseLeave = () => setIsServiceMenuOpen(false);

  return (
    <div
      className="inline-block text-base font-medium px-3 py-2 text-gray-800"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="cursor-pointer hover:text-orange-500 flex items-center relative group">
        Our Services
        {isServiceMenuOpen ? (
          <FontAwesomeIcon
            icon={faChevronUp}
            className="ml-1  mt-[2px] inline-block transition-transform duration-300"
            size="sm"
          />
        ) : (
          <FontAwesomeIcon
            icon={faChevronDown}
            className="ml-1 mt-[2px] inline-block transition-transform duration-300"
            size="sm"
          />
        )}
        <span className="absolute left-0 bottom-[-6px] h-0.5 w-full bg-orange-500 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100" />
      </div>

      {isServiceMenuOpen && (
        <div className="absolute left-0 right-0 mt-2 bg-white px-4 py-5 shadow-lg border rounded-[17px] border-gray-100 z-50 md:mx-20 lg:mx-40">
          <div className="mx-auto p-4">
            <div className="flex flex-col md:flex-row">
              {/* Sidebar Menu */}
              <div className="md:w-1/3 md:border-r pr-4">
                <h2 className="text-lg px-2 border-b font-semibold">
                  Main Services
                </h2>
                {categoryData.map((category) => (
                  <div
                    key={category.title}
                    className="py-1  px-2  cursor-pointer font-normal hover:bg-gray-200 rounded transition-colors duration-200"
                    onMouseEnter={() => setActiveCategory(category)}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category.title}
                  </div>
                ))}
              </div>

              {/* Content Area */}
              <div className="flex-1 mt-4 md:mt-0 md:pl-10">
                <h2 className="text-xl md:text-xl font-semibold transition duration-200">
                  {activeCategory.content.heading}
                </h2>
                <p className="mb-3 text-sm border-b text-gray-600">
                  {activeCategory.content.description}
                </p>
                <div className="space-y-2">
                  {activeCategory.content.subcategories.map((subcategory) => (
                    <Link key={subcategory.name} href={subcategory.path}>
                      <p className="text-gray-800 text-sm py-1 hover:text-orange-500 transition duration-200">
                        {subcategory.name}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
