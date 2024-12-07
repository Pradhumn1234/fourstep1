// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faPen,
//   faComputer,
//   faHandshake,
// } from "@fortawesome/free-solid-svg-icons";
//<FontAwesomeIcon icon={faComputer} className="font" />

// import Link from "next/link";

// const AboutSection = () => {
//   return (
//     <>
//       <div className="container md:p-10 p-0">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
//           <div className=" px-4 py-4 hidden md:block justify-center">
//             <img
//               src="/image/ab.webp"
//               alt="Tablet Mockup"
//               className="w-full h-auto rounded-lg shadow-lg"
//             />
//           </div>

//           <div>
//             <div className="text-left mb-6">
//               <span className="text-[#BC4242] bg-[#FFF4FA] rounded-md px-3 py-1 text-xs">
//                 4steps Digital
//               </span>
//             </div>
//             <h2 className="text-3xl font-bold mb-4">
//               About <span className="text-gradient">4Steps Digital</span>
//             </h2>
//             <p className="mb-4 text-sm">
//               Four Steps Digital Consulting(OPC) Pvt Ltd is a digital consulting
//               agency in India. We are dedicated to honesty, hard work, and
//               results we serve small-medium size businesses. Our primary focus
//               is to Transform Businesses Into Digitally-Driven Organizations.
//             </p>
//             <p className="mb-4 text-sm">
//               We have high-performing teams that help small businesses to
//               achieve business objectives like optimization of digital presence,
//               increase operational efficiency, guide to choose the right
//               technology, etc..
//             </p>
//             <div className=" px-4 py-4 md:hidden block justify-center">
//             <img
//               src="/image/ab.webp"
//               alt="Tablet Mockup"
//               className="w-full h-auto rounded-lg shadow-lg"
//             />
//           </div>
//             <div className="space-y-4 mb-8">
//               <div className="flex items-center mb-2 space-x-2">
//                 <div className="w-7 h-7 flex items-center justify-center bg-gray-200 rounded-full">
//                   <FontAwesomeIcon icon={faPen} className="font" />
//                 </div>
//                 <p className="text-xs text-gray-700">Digital Consulting</p>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <div className="w-7 h-7 flex items-center justify-center bg-gray-200 rounded-full">
//                   <FontAwesomeIcon icon={faComputer} className="font" />
//                 </div>
//                 <p className="text-xs text-gray-700">
//                   Expertise across the Spectrum
//                 </p>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <div className="w-7 h-7 flex items-center justify-center bg-gray-200 rounded-full">
//                   <FontAwesomeIcon icon={faHandshake} className="font" />
//                 </div>
//                 <p className="text-xs text-gray-700">
//                   Proven Results and Partnership
//                 </p>
//               </div>
//             </div>
//             <Link href="/about/about">
//               <button className="bg-red-600 cursor-pointer  border-none rounded-full text-sm text-white px-4 py-2">
//                 Know More
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AboutSection;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faComputer,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <div className="container p-4  md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image for larger screens */}
        <div className="hidden md:flex  justify-center">
          <Image
            src="/image/about.jpg"
            alt="Tablet Mockup"
            // className="w-full h-auto rounded-lg shadow-lg"
            // width={800}
            // height={800}
            width={40}
            height={100}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }} // optional
          />
        </div>

        <div className="flex flex-col  justify-center">
          <div className="text-left mb-6">
            <span className="text-[#BC4242] bg-[#FFF4FA] rounded-md px-3 py-1 text-xs">
              About us 4steps Digital
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            About <span className="text-gradient"> 4Steps Digital </span>
          </h2>
          <p className="mb-4 text-sm md:text-base">
            Four Steps Digital Consulting(OPC) Pvt Ltd is a digital consulting
            agency in India. We are dedicated to honesty, hard work, and
            results, serving small to medium-sized businesses. Our primary focus
            is to transform businesses into digitally-driven organizations.
          </p>
          <p className="mb-4 text-sm md:text-base">
            We have high-performing teams that help small businesses achieve
            objectives like a optimizing digital presence and increasing
            operational efficiency
          </p>

          {/* Image for mobile screens */}
          <div className="md:hidden flex justify-center mb-4">
            <img
              src="/image/ab.webp"
              alt="Tablet Mockup"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center mb-2 space-x-2">
              <div className="w-7 h-7 flex items-center justify-center bg-gray-200 rounded-full">
                <FontAwesomeIcon icon={faPen} className="font" />
              </div>
              <p className="text-xs text-gray-700">Digital Consulting</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 flex items-center justify-center bg-gray-200 rounded-full">
                <FontAwesomeIcon icon={faComputer} className="font" />
              </div>
              <p className="text-xs text-gray-700">
                Expertise across the Spectrum
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 flex items-center justify-center bg-gray-200 rounded-full">
                <FontAwesomeIcon icon={faHandshake} className="font" />
              </div>
              <p className="text-xs text-gray-700">
                Proven Results and Partnership
              </p>
            </div>
          </div>

          <Link href="/about">
            {/* <button className="bg-orange-600  cursor-pointer border-none rounded-full text-sm text-white px-4 py-2"> */}
            <button className=" border border-orange-500  hover:text-primary hover:bg-white  py-2 md:py-2 px-4 md:px-5 rounded-full bg-primary text-white">
              Know More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

// trial both code
