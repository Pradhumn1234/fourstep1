// import React from "react";
// import Image from "next/image";

// const upcoming = () => {
//   return (
//     <div className=" container">
//       <div className=" mx-auto p-4">
//         <div className="text-center ">
//           <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800">
//             Elevate your skills with expert insights at our upcoming webinar
//           </h2>

//           <p className=" py-2 px-20  text-sm">
//             Unlock the secrets of successful content creation in our upcoming
//             webinar. Learn how to engage your audience effectively and create
//             compelling content that resonates. This session is designed for
//             content creators and marketers eager to enhance their skills and
//             drive meaningful engagement in the digital age.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5   gap-6 p-6">
//             {/* <!-- Card 1 --> */}
//             <div className=" bg-white  shadow-md  p-4  border-[1px] rounded-md flex flex-col items-center">
//               {/* Title Image Section */}
//               <div className="relative w-full  h-48">
//                 <Image
//                   className="absolute  rounded- object-cover"
//                   src="/image/try.jpeg"
//                   alt="Image Here"
//                   layout="fill"
//                 />
//               </div>

//               {/* Additional Data Section */}
//               <div className="mt-2 flex  justify-around items-center w-full">
//                 <div className="flex-shrink-0">
//                   {/* <Image
//                 src="/image/try.jpeg"
//                 alt="Profile Pic"
//                 className="w-20 h-20 rounded-full object-cover"
//                 height={300}
//                 width={300}
//               /> */}
//                   <h2 className="text-sm font-bold text-black mb-1">
//                     Amarjeet Singh
//                   </h2>
//                 </div>
//                 <div>
//                   <p className="text-gray-900 text-sm">Email:abc12@gmail.com</p>
//                   <p className="text-gray-900 text-sm">
//                     phone:+91 44821247 8488
//                   </p>
//                 </div>
//               </div>

//               <p className="text-black text-xs py-1">
//                 <span className="font-semibold">About</span>
//                 Description goes here. This can be a summary or some additional
//                 information. Description goes here. This can be a summary or
//                 some additional information. Description goes here. This can be
//                 a summary or some additional information.
//               </p>
//               <div>
//                 <h2>role: software developer</h2>
//                 <h3>Job profile:assistent manger</h3>
//               </div>
//             </div>

//             {/* ejfiwfew */}

//             <div className="bg-white shadow-lg p-6 border rounded-lg flex flex-col items-center max-w-sm transition-transform transform hover:scale-105">
//               {/* Title Image Section */}
//               <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
//                 <Image
//                   className="object-cover"
//                   src="/image/try.jpeg"
//                   alt="Image Here"
//                   layout="fill"
//                 />
//               </div>

//               {/* Additional Data Section */}
//               {/* <div className="flex flex-col items-center mb-4">
//                 <h2 className="text-lg font-semibold text-gray-900">
//                   Amarjeet Singhk
//                 </h2>
//                 <p className="text-gray-700 text-sm">Email: abc12@gmail.com</p>
//                 <p className="text-gray-700 text-sm">
//                   Phone: +91 4482 1247 8488
//                 </p>
//               </div> */}

//               {/* About Section */}
//               <p className="text-gray-600 text-sm text-center px-4 mb-4">
//                 <span className="font-semibold">About:</span> Description goes
//                 here. This can be a summary or some additional information.
//                 Description goes here. This can be a summary or some additional
//                 information. Description goes here. This can be a summary or
//                 some additional information.
//               </p>

//               {/* Role and Job Profile */}
//               <div className="w-full text-center">
//                 <h2 className="text-gray-800 font-medium">
//                   Role: Software Developer
//                 </h2>
//                 <h3 className="text-gray-700">
//                   Job Profile: Assistant Manager
//                 </h3>
//               </div>
//             </div>

//             {/* <!-- Card 2--> */}
//             <div className=" bg-white  shadow-md  p-4  border-[1px] rounded-md flex flex-col items-center">
//               {/* Title Image Section */}
//               <div className="relative w-full  h-48">
//                 <Image
//                   className="absolute  rounded- object-cover"
//                   src="/image/try.jpeg"
//                   alt="Image Here"
//                   layout="fill"
//                 />
//                 <div className="absolute bottom-0 left-0 right-0 px-3 py-2 rounded-b- bg-black bg-opacity-50">
//                   <h2 className="text-xl font-bold text-white mb-1">
//                     Zoho Api Integration and Zoho implementation
//                   </h2>
//                 </div>
//               </div>

//               {/* Additional Data Section */}
//               <div className="mt-2 flex  justify-around items-center w-full">
//                 <div className="flex-shrink-0">
//                   <Image
//                     src="/image/try.jpeg"
//                     alt="Profile Pic"
//                     className="w-20 h-20 rounded-full object-cover"
//                     height={300}
//                     width={300}
//                   />
//                   <h2 className="text-sm font-bold text-black mb-1">
//                     Amarjeet Singh
//                   </h2>
//                 </div>
//                 <div>
//                   <p className="text-gray-900 text-sm">Date: 2024-10-02</p>
//                   <p className="text-gray-900 text-sm">time: 40min</p>
//                 </div>
//               </div>
//               <p className="text-black text-xs py-2">
//                 Description goes here. This can be a summary or some additional
//                 information. Description goes here. This can be a summary or
//                 some additional information. Description goes here. This can be
//                 a summary or some additional information.
//               </p>
//             </div>
//             {/* <!-- Card 3 --> */}
//             <div className=" bg-white  shadow-md  p-4  border-[1px] rounded-md flex flex-col items-center">
//               {/* Title Image Section */}
//               <div className="relative w-full  h-48">
//                 <Image
//                   className="absolute  rounded- object-cover"
//                   src="/image/try.jpeg"
//                   alt="Image Here"
//                   layout="fill"
//                 />
//                 <div className="absolute bottom-0 left-0 right-0 px-3 py-2 rounded-b- bg-black bg-opacity-50">
//                   <h2 className="text-xl font-bold text-white mb-1">
//                     Zoho Api Integration and Zoho implementation
//                   </h2>
//                 </div>
//               </div>

//               {/* Additional Data Section */}
//               <div className="mt-2 flex  justify-around items-center w-full">
//                 <div className="flex-shrink-0">
//                   <Image
//                     src="/image/try.jpeg"
//                     alt="Profile Pic"
//                     className="w-20 h-20 rounded-full object-cover"
//                     height={300}
//                     width={300}
//                   />
//                   <h2 className="text-sm font-bold text-black mb-1">
//                     Amarjeet Singh
//                   </h2>
//                 </div>
//                 <div>
//                   <p className="text-gray-900 text-sm">Date: 2024-10-02</p>
//                   <p className="text-gray-900 text-sm">time: 40min</p>
//                 </div>
//               </div>
//               <p className="text-black text-xs py-2">
//                 Description goes here. This can be a summary or some additional
//                 information. Description goes here. This can be a summary or
//                 some additional information. Description goes here. This can be
//                 a summary or some additional information.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div></div>
//     </div>
//   );
// };

// export default upcoming;

import React from "react";

const Trail = () => {
  return (
    <div className=" p-10">
      <h3>Cheacking the ui li</h3>
      <div className=" p-10">
        <ul>
          <li>abc</li>
          <li>abcd</li>
          <li>abcde</li>
        </ul>
      </div>
      <ol>
        <li>xyz</li>
        <li>xyzz</li>
        <li>stuvwxyz</li>
      </ol>
    </div>
  );
};

export default Trail;
