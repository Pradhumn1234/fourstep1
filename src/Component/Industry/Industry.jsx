// import React, { useState, useEffect } from "react";

// const Industry = () => {
//   const businesses = [
//     {
//       img: "/image/1.png",
//       alt: "Abc",
//       name: "E-Commerce Industry",
//     },
//     {
//       img: "/image/2.png",
//       alt: "Abc",
//       name: "Real-Estate Industry",
//     },
//     {
//       img: "/image/3.png",
//       alt: "Abc",
//       name: "Education Industry",
//     },
//     {
//       img: "/image/4.png",
//       alt: "Abc",
//       name: "HealthCare Industry",
//     },
//     {
//       alt: "Abc",
//       img: "/image/5.png",
//       name: "Tour & Travel Industry",
//     },
//     {
//       img: "/image/6.png",
//       alt: "Abc",
//       name: "IT Industry",
//     },
//     {
//       img: "/image/7.png",
//       alt: "Abc",
//       name: "Sales & Marketing Industry",
//     },
//     {
//       img: "/image/8.png",
//       alt: "Abc",
//       name: "Distribution Industry",
//     },
//     {
//       img: "/image/9.png",
//       alt: "Abc",
//       name: "Manufacturing Industry",
//     },
//   ];

//   const [isSmallScreen, setIsSmallScreen] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsSmallScreen(window.innerWidth < 768);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const displayCount = isSmallScreen ? 9 : businesses.length;

//   return (
//     <div className="container md:p-10 p-5">
//       <div className="">
//         <h2 className="text-3xl font-bold  text-center">
//           Industries <span className="text-primary">We Serve</span>
//         </h2>
//         <p className="text-gray-600 mb-6 md:md-4 text-center">
//           Businesses trust us because we provide them with the highest quality
//           services
//         </p>
//         <div className="grid grid-cols-3  md:grid-cols-5 md:gap-6 gap-3 p-2 md:p-10">
//           {businesses.slice(0, displayCount).map((business, index) => (
//             <div
//               key={index}
//               className="grid place-items-center bg-white shadow-md rounded-lg md:p-5 p-2 border border-gray-100"
//             >
//               <img
//                 src={business.img}
//                 alt={business.alt}
//                 className="md:w-28 md:h-28 object-cover cursor-pointer rounded-lg hover-zoom"
//               />
//               <p className="text-center md:text-lg  my-2 md:my-0 text-xs font-semibold w-full h-1/3">
//                 {business.name}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Industry;

import React, { useState, useEffect } from "react";

const Industry = () => {
  const businesses = [
    { img: "/image/1.png", alt: "Abc", name: "E-Commerce Industry" },
    { img: "/image/2.png", alt: "Abc", name: "Real-Estate Industry" },
    { img: "/image/3.png", alt: "Abc", name: "Education Industry" },
    { img: "/image/4.png", alt: "Abc", name: "HealthCare Industry" },
    { img: "/image/5.png", alt: "Abc", name: "Tour & Travel Industry" },
    { img: "/image/6.png", alt: "Abc", name: "IT Industry" },
    { img: "/image/7.png", alt: "Abc", name: "Sales & Marketing Industry" },
    { img: "/image/8.png", alt: "Abc", name: "Distribution Industry" },
    { img: "/image/9.png", alt: "Abc", name: "Manufacturing Industry" },
  ];

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const displayCount = isSmallScreen ? 9 : businesses.length;

  return (
    <div className="container md:p-10  p-5">
      <div>
        <h2 className="text-3xl font-bold text-center">
          Industries <span className="text-primary">We Serve</span>
        </h2>
        <p className="text-gray-600 mb-6 text-center">
          Businesses trust us because we provide them with the highest quality
          services
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-2 md:p-10">
          {businesses.slice(0, displayCount).map((business, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 border border-gray-100"
            >
              <img
                src={business.img}
                alt={business.alt}
                className="w-24 h-24 md:w-28 md:h-28  object-cover cursor-pointer rounded-lg hover-zoom"
              />
              <p className="text-center md:text-lg my-2 text-xs font-semibold">
                {business.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industry;
