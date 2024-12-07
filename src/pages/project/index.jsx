// import React, { useState, useEffect } from "react";
// import Loading from "@/Component/ProjectPage/Loading";
// // Static Data for Filters
// const filterData = [
//   { title: "All" },
//   { title: "Website Development" },
//   { title: "Software Development" },
//   { title: "Zoho Development" },
//   { title: "Lifestyle" },
// ];

// // Updated Static Course Data
// const staticCourses = {
//   "Website Development": [
//     {
//       name: "project1",
//       title: "Web Development Bootcamp",
//       description:
//         "Learn full-stack web development.manufacturers of LED lighting products, consumer electrical, and electronic products.",
//       image: { url: "/image/bg.jpg" },
//       language: "JavaScript, HTML, CSS",
//     },
//     {
//       name: "project1",
//       title: "React.js Essentials",
//       description: "Master React.js and build dynamic web applications.",
//       image: { url: "/image/bg.jpg" },
//       language: "JavaScript, React",
//     },
//   ],
//   "Software Development": [
//     {
//       name: "project1",
//       title: "Advanced Software Engineering",
//       description: "Dive deep into software engineering practices.",
//       image: { url: "/image/bg.jpg" },
//       language: "C++, Python",
//     },
//   ],
//   "Zoho Development": [
//     {
//       name: "project1",
//       title: "Zoho CRM Development",
//       description: "Learn to build and customize Zoho CRM solutions.",
//       image: { url: "/image/bg.jpg" },
//       language: "Zoho Deluge, JavaScript",
//     },
//   ],
//   Lifestyle: [
//     {
//       name: "project1",
//       title: "Personal Development Mastery",
//       description: "Improve your personal and professional skills.",
//       image: { url: "/image/bg.jpg" },
//       language: "Self-improvement, Mindset",
//     },
//   ],
// };

// // Main App Component
// const Project = () => {
//   const [courses, setCourses] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [category, setCategory] = useState(filterData[0].title);

//   useEffect(() => {
//     // Simulating an API call delay with static data
//     setTimeout(() => {
//       setCourses(staticCourses);
//       setLoading(false);
//     }, 1000);
//   }, []);

//   function filterHandler(title) {
//     setCategory(title);
//   }
//   function getCourses() {
//     if (!courses) return []; // Handle case where courses are not yet set
//     if (category === "All") {
//       let allCourses = [];
//       Object.values(courses).forEach((array) => {
//         array.forEach((courseData) => {
//           allCourses.push(courseData);
//         });
//       });
//       return allCourses;
//     } else {
//       return courses[category] || []; // Ensure the category exists
//     }
//   }

//   return (
//     <div className="container">
//       <div className="text-center mt-2 flex flex-col justify-center">
//         <span className="px-3 py-1 block mx-auto text-red-500 bg-red-100 rounded-md text-[12px]">
//           Portfolio
//         </span>
//         <h1 className="mt-4 text-4xl font-semibold">
//           Our <span className="text-gradient">Projects</span>
//         </h1>
//         <p className="mt-2 text-base">
//           We have an experienced team of production and inspection personnel to
//           ensure quality.
//         </p>
//       </div>

//       <div className="min-h-screen flex flex-col bg-bgDark2">
//         <div className="bg-bgDark2">
//           <div className="w-11/12 flex mt-5 flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
//             {filterData.map((data) => (
//               <button
//                 className={`px-4 py-1 card rounded-md text-[14px] transition-all duration-300
//                   ${
//                     category === data.title
//                       ? "bg-opacity-60 border-white text-red-500"
//                       : "bg-opacity-40 border-transparent text-black"
//                   }
//                   bg-white shadow-lg border-2`}
//                 key={data.title}
//                 onClick={() => filterHandler(data.title)}
//               >
//                 {data.title}
//               </button>
//             ))}
//           </div>
//           <div className="w-11/12 mt-2 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
//             {loading ? (
//               <Loading />
//             ) : (
//               <div className="flex flex-wrap justify-center gap-4 mb-4">
//                 {getCourses().map((course) => (
//                   <div className=" shadow-lg shadow-gray-200 rounded-md ">
//                     <div
//                       key={course.title}
//                       className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden"
//                     >
//                       <div className="relative p-2 ">
//                         <img
//                           src={course.image.url}
//                           alt={course.title}
//                           className=" rounded-lg"
//                         />
//                       </div>
//                       <div className=" text-xl pl-4 ">
//                         <span>{course.name}</span>
//                       </div>
//                       <div className="px-4 py-1">
//                         <p className="  text-red-400 text-[12px] leading-6">
//                           {course.title}
//                         </p>
//                         <p className="mt-1 text-[13px] leading-4">
//                           {course.description.length > 100
//                             ? course.description.substr(0, 100) + "..."
//                             : course.description}
//                         </p>
//                         <p className="mt-2 my-3 text-base  text-gray-500">
//                           {course.language}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default   ;

import React, { useState, useEffect } from "react";
import Loading from "@/Component/ProjectPage/Loading";
import { Footer } from "@/Component/Footer/Footer";


// Static Data for Filters
const filterData = [
  { title: "All" },
  { title: "Website Development" },
  { title: "Software Development" },
  { title: "Zoho Development" },
  { title: "Lifestyle" },
];

// Updated Static Course Data
const staticCourses = {
  "Website Development": [
    {
      name: "project1",
      title: "Web Development Bootcamp",
      description:
        "Learn full-stack web development.manufacturers of LED lighting products, consumer electrical, and electronic products.",
      image: { url: "/image/bg.jpg" },
      language: "JavaScript, HTML, CSS",
    },
    {
      name: "project1",
      title: "React.js Essentials",
      description: "Master React.js and build dynamic web applications.",
      image: { url: "/image/bg.jpg" },
      language: "JavaScript, React",
    },
  ],
  "Software Development": [
    {
      name: "project1",
      title: "Advanced Software Engineering",
      description: "Dive deep into software engineering practices.",
      image: { url: "/image/bg.jpg" },
      language: "C++, Python",
    },
  ],
  "Zoho Development": [
    {
      name: "project1",
      title: "Zoho CRM Development",
      description: "Learn to build and customize Zoho CRM solutions.",
      image: { url: "/image/bg.jpg" },
      language: "Zoho Deluge, JavaScript",
    },
  ],
  Lifestyle: [
    {
      name: "project1",
      title: "Personal Development Mastery",
      description: "Improve your personal and professional skills.",
      image: { url: "/image/bg.jpg" },
      language: "Self-improvement, Mindset",
    },
  ],
};

// Main App Component
const Project = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
  const [animate, setAnimate] = useState(false); // New state for animation

  useEffect(() => {
    // Simulating an API call delay with static data
    setTimeout(() => {
      setCourses(staticCourses);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (!loading) {
      setAnimate(true);
    }
  }, [category, loading]);

  function filterHandler(title) {
    setCategory(title);
    setLoading(true);
    setAnimate(false); // Reset animation on filter change
    setTimeout(() => setLoading(false), 1000); // Simulate loading delay
  }

  function getCourses() {
    if (!courses) return []; // Handle case where courses are not yet set
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
      return allCourses;
    } else {
      return courses[category] || []; // Ensure the category exists
    }
  }

  return (
    <div className="container">
      <div className="text-center mt-2 flex flex-col justify-center">
        <span className="px-3 py-1 block mx-auto text-red-500 bg-red-100 rounded-md text-[12px]">
          Portfolio
        </span>
        <h1 className="mt-4 text-4xl font-semibold">
          Our <span className="text-gradient">Projects</span>
        </h1>
        <p className="mt-2 text-base">
          We have an experienced team of production and inspection personnel to
          ensure quality.
        </p>
      </div>

      <div className="min-h-screen flex flex-col bg-bgDark2">
        <div className="bg-bgDark2">
          <div className="w-11/12 flex mt-5 flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
            {filterData.map((data) => (
              <button
                className={`px-4 card py-1 rounded-md text-[14px] transition-all duration-300
                  ${category === data.title
                    ? "bg-opacity-60 border-white text-red-500"
                    : "bg-opacity-40 border-transparent text-black"
                  } 
                  bg-white shadow-lg border-2`}
                key={data.title}
                onClick={() => filterHandler(data.title)}
              >
                {data.title}
              </button>
            ))}
          </div>
          <div className="w-11/12 mt-2 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
            {loading ? (
              <Loading />
            ) : (
              <div
                className={`flex flex-wrap justify-center gap-4 mb-4 ${animate ? "animate" : ""
                  }`}
              >
                {getCourses().map((course) => (
                  <div
                    key={course.title}
                    className="shadow-lg shadow-gray-200 rounded-md card" // Add the card class here
                  >
                    <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
                      <div className="relative p-2">
                        <img
                          src={course.image.url}
                          alt={course.title}
                          className="rounded-lg"
                        />
                      </div>
                      <div className="text-xl pl-4">
                        <span>{course.name}</span>
                      </div>
                      <div className="px-4 py-1">
                        <p className="text-red-400 text-[12px] leading-6">
                          {course.title}
                        </p>
                        <p className="mt-1 text-[13px] leading-4">
                          {course.description.length > 100
                            ? course.description.substr(0, 100) + "..."
                            : course.description}
                        </p>
                        <p className="mt-2 my-3 text-base text-gray-500">
                          {course.language}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {/*  trai after filter method */}

        <div className="grid place-items-center my-5">
          <h1 className="text-center text-md md:text-2xl lg:text-4xl tracking-wide font-semibold ">
            Access your business potentials
            <br /> today & find opportunity for
            <br />
            <span className="text-gradient">bigger success</span>
          </h1>
        </div>

        {/* trial end */}
        <div className=" mt-4">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Project;
