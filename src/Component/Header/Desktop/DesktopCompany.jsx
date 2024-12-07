// import Link from "next/link";
// import React, { useState } from "react";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Importing both icons

// const DesktopCompany = ({ activeLink, handleLinkClick }) => {
//   const [dropDown, setDorpdown] = useState(false);

//   const handleMouseEnter = () => {
//     setDorpdown(true);
//   };
//   const handleMouseLeave = () => {
//     setDorpdown(false);
//   };

//   return (
//     <div>
//       <div
//         className="relative inline-block"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         <Link href="/">
//           <div
//             onClick={() => handleLinkClick("/")}
//             className={`relative inline-block  text-base font-medium px-3 py-2 text-gray-800 hover:text-orange-500`}
//           >
//             Company
//             {dropDown ? (
//               <FaChevronUp
//                 className="ml-1 inline-block transition-transform duration-300"
//                 size={13}
//               />
//             ) : (
//               <FaChevronDown
//                 className="ml-1 inline-block transition-transform duration-300"
//                 size={13}
//               />
//             )}
//           </div>
//         </Link>

//         {/* dropdown section */}
//         {dropDown && (
//           <div className="absolute left-[-15px] text-[15px]  w-52 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
//             <ul className="">
//               <li>
//                 <Link
//                   href="/about"
//                   className="block px-5 py-1 text-gray-800 hover:bg-gray-100 hover:text-orange-500 rounded-lg transition-colors duration-300"
//                 >
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/client-testimonial"
//                   className="block px-5 py-1 text-gray-800 hover:bg-gray-100 hover:text-orange-500 rounded-lg transition-colors duration-300"
//                 >
//                   Client & Testimonial
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/case-studies"
//                   className="block px-5 py-1 text-gray-800 hover:bg-gray-100 hover:text-orange-500 rounded-lg transition-colors duration-300"
//                 >
//                   Case Studies
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/alliance"
//                   className="block px-5 py-1 text-gray-800 hover:bg-gray-100 hover:text-orange-500 rounded-lg transition-colors duration-300"
//                 >
//                   Alliances
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/Referral"
//                   className="block px-5 py-1 text-gray-800 hover:bg-gray-100 hover:text-orange-500 rounded-lg transition-colors duration-300"
//                 >
//                   Referral Partners
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/career"
//                   className="block px-5 py-1 text-gray-800 hover:bg-gray-100 hover:text-orange-500 rounded-lg transition-colors duration-300"
//                 >
//                   Career
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DesktopCompany;

import Link from "next/link";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"; // Importing FontAwesome icons

const DesktopCompany = ({ activeLink, handleLinkClick }) => {
  const [dropDown, setDorpdown] = useState(false);

  const handleMouseEnter = () => {
    setDorpdown(true);
  };
  const handleMouseLeave = () => {
    setDorpdown(false);
  };

  return (
    <div>
      <div
        className="relative inline-block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link href="/">
          <div
            onClick={() => handleLinkClick("/")}
            className={`relative inline-block text-base font-medium px-3 py-2 text-gray-800 hover:text-orange-500`}
          >
            Company
            {dropDown ? (
              <FontAwesomeIcon
                icon={faChevronUp}
                className="ml-1 inline-block transition-transform duration-300"
                size="sm"
              />
            ) : (
              <FontAwesomeIcon
                icon={faChevronDown}
                className="ml-1 inline-block transition-transform duration-300"
                size="sm"
              />
            )}
          </div>
        </Link>

        {/* dropdown section */}
        {dropDown && (
          <div className="absolute left-[-15px] text-[15px] w-52 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
            <ul className=" list-none">
              <li>
                <Link
                  href="/about"
                  className="block px-5 py-1 text-gray-800 hover:bg-gray-100 hover:text-orange-500 rounded-lg transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/client-testimonial"
                  className="block px-5 py-1 text-gray-800 hover:bg-gray-100 hover:text-orange-500 rounded-lg transition-colors duration-300"
                >
                  Client & Testimonial
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="block px-5 py-1 text-gray-800 hover:bg-gray-100 hover:text-orange-500 rounded-lg transition-colors duration-300"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/alliance"
                  className="block px-5 py-1 text-gray-800 hover:bg-gray-100 hover:text-orange-500 rounded-lg transition-colors duration-300"
                >
                  Alliances
                </Link>
              </li>
              <li>
                <Link
                  href="/Referral"
                  className="block px-5 py-1 text-gray-800 hover:bg-gray-100 hover:text-orange-500 rounded-lg transition-colors duration-300"
                >
                  Referral Partners
                </Link>
              </li>
              <li>
                <Link
                  href="/career"
                  className="block px-5 py-1 text-gray-800 hover:bg-gray-100 hover:text-orange-500 rounded-lg transition-colors duration-300"
                >
                  Career
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DesktopCompany;
