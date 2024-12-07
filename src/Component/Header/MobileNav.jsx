// import React, { useState } from "react";
// import Link from "next/link";
// import MobileResource from "./MobileResource";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

// const MobileNav = ({ isMobileMenuOpen }) => {
//   const [isCategoriesVisible, setIsCategoriesVisible] = useState(false);
//   const [activeSection, setActiveSection] = useState(""); // Track active section

//   // Category structure with services
//   const categories = [
//     {
//       name: "Website Development",
//       subcategories: [
//         { name: "CMS", path: "/servicesDetail/website/cmsdetail" },
//         {
//           name: "Custom Web Development",
//           path: "/servicesDetail/website/customeweb",
//         },
//         { name: "E-Commerce", path: "/servicesDetail/website/e-commerce" },
//       ],
//     },
//     {
//       name: "Zoho services",
//       subcategories: [
//         {
//           name: "Zoho Setup and Implementation",
//           path: "/servicesDetail/zoho/zoho-setup/",
//         },
//         {
//           name: " Zoho Managed Services",
//           path: "/servicesDetail/zoho/zoho-manage/",
//         },
//         {
//           name: "Zoho Custom Development",
//           path: "/servicesDetail/zoho/zoho-custom/",
//         },
//         {
//           name: "Zoho Training and Consulting",
//           path: "/servicesDetail/zoho/zoho-training",
//         },
//       ],
//     },
//     {
//       // Zoho CRM For Real Estate

//       name: "Zoho Industry Solution",
//       subcategories: [
//         {
//           name: "Zoho CRM For Real Estate",
//           path: "/servicesDetail/zohoindustry/zoho-real-estate",
//         },
//         {
//           name: "Zoho CRM For Travel Agency",
//           path: "/servicesDetail/zohoindustry/zoho-travel-agency",
//         },
//       ],
//     },
//     {
//       name: "Hubspot Services ",
//       subcategories: [
//         {
//           name: "Hubsport Setup and Implementation",
//           path: "/servicesDetail/hubspot/setup",
//         },
//         {
//           name: "Hubsport Development",
//           path: "/servicesDetail/hubspot/development",
//         },
//         {
//           name: "Hubsport Managed Services",
//           path: "/servicesDetail/hubspot/manage",
//         },
//         {
//           name: "Hubsport Training and Consulting",
//           path: "/servicesDetail/hubspot/training",
//         },
//       ],
//     },
//     {
//       name: "Digital marketing ",
//       subcategories: [
//         {
//           name: "PPC Management",
//           path: "/servicesDetail/digitalmarketing/ppc-management",
//         },
//         {
//           name: "Search Engine Optimization",
//           path: "/servicesDetail/digitalmarketing/seo",
//         },
//         {
//           name: "Social Media Management",
//           path: "/servicesDetail/digitalmarketing/socialmedia-management",
//         },
//         {
//           name: "Content Marketing",
//           path: "/servicesDetail/digitalmarketing/content-marketing",
//         },
//       ],
//     },
//     {
//       name: "Other Crm Services",
//       subcategories: [
//         {
//           name: "Bitrix24 Services",
//           path: "/servicesDetail/zohoindustry/bitrix24",
//         },
//         {
//           name: "Salesforce Services",
//           path: "/servicesDetail/zohoindustry/salseforce",
//         },
//       ],
//     },
//   ];

//   // Handle section click and set the active section
//   const handleSectionClick = (sectionName) => {
//     setActiveSection(sectionName);
//   };

//   // Render categories and subcategories
//   const renderCategories = () => {
//     return categories.map((category) => (
//       <div key={category.name}>
//         <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
//         <ul>
//           {category.subcategories.map((subcategory) => (
//             <li
//               key={
//                 typeof subcategory === "string" ? subcategory : subcategory.name
//               }
//               onClick={() =>
//                 handleSectionClick(
//                   typeof subcategory === "string"
//                     ? subcategory
//                     : subcategory.name
//                 )
//               }
//               className={`cursor-pointer py-1`}
//             >
//               {typeof subcategory === "string" ? (
//                 <span
//                   className={`text-sm text-gray-600 inline-block ${
//                     activeSection === subcategory
//                       ? "border-b-2 border-blue-500"
//                       : ""
//                   }`}
//                 >
//                   {subcategory}
//                 </span>
//               ) : (
//                 <Link href={subcategory.path}>
//                   <p
//                     className={`text-sm text-gray-600 inline-block hover:text-gray-800 transition ${
//                       activeSection === subcategory.name
//                         ? "border-b-2 border-blue-500"
//                         : ""
//                     }`}
//                   >
//                     {subcategory.name}
//                   </p>
//                 </Link>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     ));
//   };

//   // Toggle categories visibility
//   const toggleCategories = () => {
//     setIsCategoriesVisible(!isCategoriesVisible);
//   };

//   return (
//     <div
//       className={`fixed md:hidden top-20 left-0 h-screen w-full bg-gray-100 shadow-lg ${
//         isMobileMenuOpen ? "menu-open" : "menu-close"
//       }`}
//     >
//       <Link href="/">
//         <p
//           className={`block text-gray-700  hover:text-black px-5 mt-5 text-md font-medium ${
//             activeSection === "Home"
//               ? "inline-block border-b-2  border-blue-500"
//               : ""
//           }`}
//           onClick={() => handleSectionClick("Home")}
//         >
//           Home
//         </p>
//       </Link>
//       <Link href="/about">
//         <p
//           className={`block text-gray-700 hover:text-black px-5  mt-5 text-md font-medium ${
//             activeSection === "About Us"
//               ? "inline-block border-b-2 border-blue-500"
//               : ""
//           }`}
//           onClick={() => handleSectionClick("About Us")}
//         >
//           About Us
//         </p>
//       </Link>
//       <button
//         className="w-full text-left text-gray-700 hover:text-black px-5 mt-5 text-md font-medium flex items-center justify-between"
//         onClick={toggleCategories}
//       >
//         Our Services
//         {/* <span>{isCategoriesVisible ? <FaChevronUp /> : <FaChevronDown />}</span> */}
//         {isCategoriesVisible ? (
//           <FontAwesomeIcon icon={faChevronUp} />
//         ) : (
//           <FontAwesomeIcon icon={faChevronDown} />
//         )}
//       </button>
//       {isCategoriesVisible && (
//         <div className="mt-2 space-y-2 px-4 max-h-56 overflow-y-auto scrollbar-thick  ">
//           {renderCategories()}
//         </div>
//       )}
//       <Link href="/Training">
//         <p
//           className={`block text-gray-700 hover:text-black px-5 mt-5 text-md font-medium cursor-pointer ${
//             activeSection === "Training"
//               ? "inline-block border-b-2 border-blue-500"
//               : ""
//           }`}
//           onClick={() => handleSectionClick("Training")}
//         >
//           Training
//         </p>
//       </Link>
//       <Link href="/">
//         <div className="">
//           <MobileResource />
//         </div>
//       </Link>
//       <Link href="/product">
//         <p
//           className={`block text-gray-700 hover:text-black px-5 mt-5 text-md font-medium cursor-pointer ${
//             activeSection === "product"
//               ? "inline-block border-b-2 border-blue-500"
//               : ""
//           }`}
//           onClick={() => handleSectionClick("product")}
//         >
//           Product
//         </p>
//       </Link>
//       <Link href="/contact">
//         <p
//           className={`block text-gray-700 hover:text-black px-5 mt-5 text-md font-medium cursor-pointer ${
//             activeSection === "Contact Us"
//               ? "inline-block border-b-2 border-blue-500"
//               : ""
//           }`}
//           onClick={() => handleSectionClick("Contact Us")}
//         >
//           Contact Us
//         </p>
//       </Link>
//     </div>
//   );
// };

// export default MobileNav;

// MobileNav.js
import React, { useState } from "react";
import Link from "next/link";
import MobileResource from "./Mobile/MobileResource";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import MobileCompany from "./Mobile/MobileCompany";
import MobileSolutions from "./Mobile/MobileSolutions";
import MobileIndustry from "./Mobile/MobileIndustry";

const MobileNav = ({ isMobileMenuOpen }) => {
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const categories = [
    {
      name: "Website Development",
      subcategories: [
        { name: "CMS", path: "/servicesDetail/website/cmsdetail" },
        {
          name: "Custom Web Development",
          path: "/servicesDetail/website/customeweb",
        },
        { name: "E-Commerce", path: "/servicesDetail/website/e-commerce" },
      ],
    },
    {
      name: "Zoho services",
      subcategories: [
        {
          name: "Zoho Setup and Implementation",
          path: "/servicesDetail/zoho/zoho-setup/",
        },
        {
          name: "Zoho Managed Services",
          path: "/servicesDetail/zoho/zoho-manage/",
        },
        {
          name: "Zoho Custom Development",
          path: "/servicesDetail/zoho/zoho-custom/",
        },
        {
          name: "Zoho Training and Consulting",
          path: "/servicesDetail/zoho/zoho-training",
        },
      ],
    },
    {
      name: "Zoho Industry Solution",
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
    {
      name: "Hubspot Services",
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
          name: "Hubspot Managed Services",
          path: "/servicesDetail/hubspot/manage",
        },
        {
          name: "Hubspot Training and Consulting",
          path: "/servicesDetail/hubspot/training",
        },
      ],
    },
    {
      name: "Digital Marketing",
      subcategories: [
        {
          name: "PPC Management",
          path: "/servicesDetail/digitalmarketing/ppc-management",
        },
        {
          name: "Search Engine Optimization",
          path: "/servicesDetail/digitalmarketing/seo",
        },
        {
          name: "Social Media Management",
          path: "/servicesDetail/digitalmarketing/socialmedia-management",
        },
        {
          name: "Content Marketing",
          path: "/servicesDetail/digitalmarketing/content-marketing",
        },
      ],
    },
    {
      name: "Other CRM Services",
      subcategories: [
        {
          name: "Bitrix24 Services",
          path: "/servicesDetail/zohoindustry/bitrix24",
        },
        {
          name: "Salesforce Services",
          path: "/servicesDetail/zohoindustry/salesforce",
        },
      ],
    },
  ];

  const handleSectionClick = (sectionName) => {
    setActiveSection(sectionName);
  };

  const renderCategories = () => {
    return categories.map((category) => (
      <div key={category.name}>
        <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
        <ul className=" list-none">
          {category.subcategories.map((subcategory) => (
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

  const toggleCategories = () => {
    setIsCategoriesVisible(!isCategoriesVisible);
  };

  return (
    <div
      className={`fixed md:hidden top-20 left-0 h-screen w-full bg-gray-100 shadow-lg ${
        isMobileMenuOpen ? "menu-open" : "menu-close"
      }`}
    >
      <MobileCompany
        activeSection={activeSection}
        handleSectionClick={handleSectionClick}
      />
      <MobileSolutions
        activeSection={activeSection}
        handleSectionClick={handleSectionClick}
      />

      <button
        className="w-full text-left  text-gray-700 hover:text-black px-5 mt-5 text-md font-semibold flex items-center justify-between"
        onClick={toggleCategories}
      >
        Our Services
        {isCategoriesVisible ? (
          <FontAwesomeIcon icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
      </button>

      {isCategoriesVisible && (
        <div className="mt-2 space-y-2 px-4 max-h-56 overflow-y-auto scrollbar-thick">
          {renderCategories()}
        </div>
      )}

      {/* Add MobileResource Component */}
      <MobileResource
        activeSection={activeSection}
        handleSectionClick={handleSectionClick}
      />
      {/* Add MobileIndustry Component */}
      <MobileIndustry
        activeSection={activeSection}
        handleSectionClick={handleSectionClick}
      />

      <Link href="/Training">
        <p
          className={`block text-gray-700 hover:text-black px-5 mt-5 text-md font-medium cursor-pointer ${
            activeSection === "Training"
              ? "inline-block border-b-2 border-blue-500"
              : ""
          }`}
          onClick={() => handleSectionClick("Training")}
        >
          Training
        </p>
      </Link>

      <Link href="/contact">
        <p
          className={`block text-gray-700 hover:text-black px-5 mt-5 text-md font-medium cursor-pointer ${
            activeSection === "Contact Us"
              ? "inline-block border-b-2 border-blue-500"
              : ""
          }`}
          onClick={() => handleSectionClick("Contact Us")}
        >
          Contact Us
        </p>
      </Link>
    </div>
  );
};

export default MobileNav;
