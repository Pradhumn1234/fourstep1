// import React, { useState } from "react";
// import Link from "next/link";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// const MobileResource = ({ activeSection, handleSectionClick }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const resources = [
//     { title: "Blog", path: "#" },
//     { title: "YouTube Video & Demo", path: "/resources/resource3" },
//     { title: "Webinar", path: "/resources/resource4" },
//   ];

//   const toggleResources = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="container mx-auto px-5 mt-5 ">
//       <button
//         onClick={toggleResources}
//         className="text-gray-700 hover:text-black text-md  font-semibold cursor-pointer flex items-center justify-between w-full"
//       >
//         <Link href="/resource">Resources</Link>

//         <span>
//           {isOpen ? (
//             <FaChevronUp className="text-emerald-800" />
//           ) : (
//             <FaChevronDown />
//           )}
//         </span>
//       </button>
//       {isOpen && (
//         <ul className="space-y-4 mt-4 list-none">
//           {resources.map((resource) => (
//             <li key={resource.title}>
//               <Link href={resource.path}>
//                 <p
//                   className={`text-sm text-gray-700 hover:text-black cursor-pointer ${
//                     activeSection === resource.title
//                       ? "border-b-2 border-blue-500"
//                       : ""
//                   }`}
//                   onClick={() => handleSectionClick(resource.title)} // Handle click
//                 >
//                   {resource.title}
//                 </p>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default MobileResource;

import React, { useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const MobileResource = ({ activeSection, handleSectionClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const resources = [
    { title: "Blog", path: "/resource/blog" },
    { title: "YouTube Video & Demo", path: "/resource/demo-videos" },
    { title: "Webinar", path: "/resource/webinar" },
  ];

  const toggleResources = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container mx-auto px-5 mt-5">
      <button
        onClick={toggleResources}
        className="text-gray-700 hover:text-black text-md font-semibold cursor-pointer flex items-center justify-between w-full"
      >
        <p>Resources</p>
        <span>
          {isOpen ? (
            <FaChevronUp className="text-emerald-800" />
          ) : (
            <FaChevronDown />
          )}
        </span>
      </button>
      {isOpen && (
        <ul className="space-y-4 mt-4 list-none">
          {resources.map((resource) => (
            <li key={resource.title}>
              <Link href={resource.path}>
                <span
                  className={`relative inline-block text-sm text-gray-700 hover:text-black cursor-pointer ${
                    activeSection === resource.title
                      ? "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-primary after:w-full"
                      : ""
                  }`}
                  onClick={() => handleSectionClick(resource.title)}
                >
                  {resource.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MobileResource;
