import React, { useRef, useEffect } from "react";

import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const carouselRef = useRef(null);

  const scrollNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        // Enable mouse scroll for small devices
        carouselRef.current.style.overflowX = "scroll";
      } else {
        // Disable mouse scroll for medium and larger devices
        carouselRef.current.style.overflowX = "hidden";
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className=" container md:grid md:grid-cols-[450px,auto] ">
      <div className=" max-w-[450px] px-5 items-center relative  md:mb-0 mb-5 md:pl-20  pt-5 md:pt-20">
        <h3 className="text-red-500 text-md font-medium mb-2">Recent Work</h3>
        <h2 className="text-3xl font-medium ">
          Creative
          <span className="text-gradient bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400  text-transparent bg-clip-text inline-block">
            Works
          </span>
        </h2>

        <h3 className="text-3xl font-medium mb-4 ">We Done</h3>
        <ul className=" cursor-pointer ">
          <li className=" mb-1">
            <Link href="/abc" className=" flex items-center  text-secondary ">
              <span className="mr-2 text-red-500">→</span>
              <span className="underline">Website Design</span>
            </Link>
          </li>
          <li className="group mb-1 flex items-center ">
            <span className="opacity-0 text-red-500 group-hover:opacity-100 transition-opacity duration-300 mr-2">
              →
            </span>
            <span className="hover:underline">Software</span>
          </li>
          <li className="group mb-1 flex items-center ">
            <span className="opacity-0 text-red-500 group-hover:opacity-100 transition-opacity duration-300 mr-2">
              →
            </span>
            <span className="hover:underline">Graphic Design</span>
          </li>
        </ul>
      </div>

      <div className="carousel-container relative ">
        <div className="carousel gap-5" ref={carouselRef}>
          {/* start is here code  */}

          {/* Testing */}
          <div className=" h-96 w-full shrink-0 relative max-w-[290px]  rounded-lg overflow-hidden">
            <Image
              className="relative object-cover"
              layout="fill"
              src="/image/ab.webp"
              alt=""
            />
            <div className="absolute bottom-0 px-5 py-2">
              <p className="text-xl text-white">Self Drive</p>
              <div className=" line-clamp-2 text-para text-white rounded-md">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Atque aperiam exercitationem aliquid!
                </p>
              </div>
            </div>
          </div>

          <div className=" h-96 w-full shrink-0 relative max-w-[290px]  rounded-lg overflow-hidden">
            <Image
              className="relative object-cover"
              layout="fill"
              src="/image/bg.jpg"
              alt=""
            />
            <div className="absolute bottom-0 px-5 py-2">
              <p className="text-xl text-white">Self Drive</p>
              <div className=" line-clamp-2 text-para text-white rounded-md">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Atque aperiam exercitationem aliquid!
                </p>
              </div>
            </div>
          </div>

          <div className=" h-96 w-full shrink-0 relative max-w-[290px]  rounded-lg overflow-hidden">
            <Image
              className="relative object-cover"
              layout="fill"
              src="/image/pic.jpeg"
              alt=""
            />
            <div className="absolute bottom-0 px-5 py-2">
              <p className="text-xl text-white">Self Drive</p>
              <div className=" line-clamp-2 text-para text-white rounded-md">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Atque aperiam exercitationem aliquid!
                </p>
              </div>
            </div>
          </div>

          <div className=" h-96 w-full shrink-0 relative max-w-[290px]  rounded-lg overflow-hidden">
            <Image
              className="relative object-cover"
              layout="fill"
              src="/image/pic.jpeg"
              alt=""
            />
            <div className="absolute bottom-0 px-5 py-2">
              <p className="text-xl text-white">Self Drive</p>
              <div className=" line-clamp-2 text-para text-white rounded-md">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Atque aperiam exercitationem aliquid!
                </p>
              </div>
            </div>
          </div>

          <div className=" bg-gradient-to-l from-white opacity-100 w-10 h-full right-0 absolute z-30  top-0"></div>

          {/* end is here code */}
        </div>

        <div className=" hidden md:block relative  -translate-y-[60px] justify-between w-full">
          <div className=" absolute left-[-350px] gap-3  flex pl-2 ">
            <button
              onClick={scrollPrev}
              className="rounded-full  bg-black/50 hover:bg-black p-2 text-white rotate-180"
            >
              <IoIosArrowForward size={20} />
            </button>
            <button
              onClick={scrollNext}
              className="rounded-full bg-black/50 hover:bg-black p-2 text-white"
            >
              <IoIosArrowForward size={20} />
            </button>
          </div>
        </div>
        {/* more project button start  */}

        <div className="flex items-center md:justify-start justify-center  my-10 ">
          <Link href="/project">
            <button className="bg-gray-800  text-white text-sm py-2 px-4 rounded-full inline-flex items-center">
              <span className="  p-1">More Projects</span>

              <div className="relative group">
                <svg
                className="h-6 w-6 rounded-full bg-white text-black transition-transform duration-300 transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </div>
            </button>
          </Link>
        </div>

        {/* more project button end  */}
      </div>
    </div>
  );
};
export default Page;

// import React, { useRef, useEffect, useState } from "react";
// import { IoIosArrowForward } from "react-icons/io";
// import Image from "next/image";
// import Link from "next/link";

// const Page = () => {
//   const carouselRef = useRef(null);
//   const [isSmallDevice, setIsSmallDevice] = useState(false);

//   const scrollNext = () => {
//     if (carouselRef.current) {
//       carouselRef.current.scrollBy({
//         left: carouselRef.current.clientWidth,
//         behavior: "smooth",
//       });
//     }
//   };

//   const scrollPrev = () => {
//     if (carouselRef.current) {
//       carouselRef.current.scrollBy({
//         left: -carouselRef.current.clientWidth,
//         behavior: "smooth",
//       });
//     }
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth <= 768) {
//         setIsSmallDevice(true);
//         carouselRef.current.style.overflowX = "scroll";
//       } else {
//         setIsSmallDevice(false);
//         carouselRef.current.style.overflowX = "hidden";
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize(); // Initialize on mount

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div className="md:grid md:grid-cols-[450px,auto]">
//       <div className="max-w-[450px] px-5 items-center relative md:mb-0 mb-5 md:pl-20 pt-5 md:pt-20">
//         <h3 className="text-red-500 text-md font-medium mb-2">Recent Work</h3>
//         <h2 className="text-3xl font-medium ">
//           Creative
//           <span className="text-gradient bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text inline-block">
//             Works
//           </span>
//         </h2>
//         <h3 className="text-3xl font-medium mb-4">We Done</h3>
//         <ul className="cursor-pointer">
//           <li className="mb-1">
//             <Link href="/abc" className="flex items-center text-secondary">
//               <span className="mr-2 text-red-500">→</span>
//               <span className="underline">Website Design</span>
//             </Link>
//           </li>
//           <li className="group mb-1 flex items-center">
//             <span className="opacity-0 text-red-500 group-hover:opacity-100 transition-opacity duration-300 mr-2">
//               →
//             </span>
//             <span className="hover:underline">Software</span>
//           </li>
//           <li className="group mb-1 flex items-center">
//             <span className="opacity-0 text-red-500 group-hover:opacity-100 transition-opacity duration-300 mr-2">
//               →
//             </span>
//             <span className="hover:underline">Graphic Design</span>
//           </li>
//         </ul>
//       </div>

//       <div className="carousel-container relative">
//         <div className="carousel gap-5" ref={carouselRef}>
//           {/* Carousel items */}
//           <div className="h-96 w-full shrink-0 relative max-w-[290px] rounded-lg overflow-hidden">
//             <Image
//               className="relative object-cover"
//               layout="fill"
//               src="/image/ab.webp"
//               alt="Sample Image 1"
//             />
//             <div className="absolute bottom-0 px-5 py-2">
//               <p className="text-xl text-white">Self Drive</p>
//               <div className="line-clamp-2 text-para text-white rounded-md">
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
//                   aperiam exercitationem aliquid!
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="h-96 w-full shrink-0 relative max-w-[290px] rounded-lg overflow-hidden">
//             <Image
//               className="relative object-cover"
//               layout="fill"
//               src="/image/bg.jpg"
//               alt="Sample Image 2"
//             />
//             <div className="absolute bottom-0 px-5 py-2">
//               <p className="text-xl text-white">Self Drive</p>
//               <div className="line-clamp-2 text-para text-white rounded-md">
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
//                   aperiam exercitationem aliquid!
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="h-96 w-full shrink-0 relative max-w-[290px] rounded-lg overflow-hidden">
//             <Image
//               className="relative object-cover"
//               layout="fill"
//               src="/image/pic.jpeg"
//               alt="Sample Image 3"
//             />
//             <div className="absolute bottom-0 px-5 py-2">
//               <p className="text-xl text-white">Self Drive</p>
//               <div className="line-clamp-2 text-para text-white rounded-md">
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
//                   aperiam exercitationem aliquid!
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Navigation buttons for small screens */}
//         {isSmallDevice && (
//           <div className="flex justify-between w-full mt-5">
//             <button
//               onClick={scrollPrev}
//               className="rounded-full bg-black/50 hover:bg-black p-2 text-white rotate-180"
//             >
//               <IoIosArrowForward size={20} />
//             </button>
//             <button
//               onClick={scrollNext}
//               className="rounded-full bg-black/50 hover:bg-black p-2 text-white"
//             >
//               <IoIosArrowForward size={20} />
//             </button>
//           </div>
//         )}

//         {/* Navigation buttons for medium and larger screens */}
//         <div className="hidden md:block relative -translate-y-[60px] justify-between w-full">
//           <div className="absolute left-[-350px] gap-3 flex pl-2">
//             <button
//               onClick={scrollPrev}
//               className="rounded-full bg-black/50 hover:bg-black p-2 text-white rotate-180"
//             >
//               <IoIosArrowForward size={20} />
//             </button>
//             <button
//               onClick={scrollNext}
//               className="rounded-full bg-black/50 hover:bg-black p-2 text-white"
//             >
//               <IoIosArrowForward size={20} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;
