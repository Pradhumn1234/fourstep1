// import React from "react";

// const Wework = () => {
//   const cardData = [
//     {
//       imgSrc: "/icons/marketing-icon.png",
//       title: "Marketing",
//       description:
//         "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
//       link: "#",
//     },
//     {
//       imgSrc: "/icons/operations-icon.png",
//       title: "Operations",
//       description:
//         "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
//       link: "#",
//     },
//     {
//       imgSrc: "/icons/operations-icon.png",
//       title: "Operations",
//       description:
//         "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
//       link: "#",
//     },
//     // Add more card data here as needed
//   ];

//   return (
//     <div className=" container bg-red-500 md:px-16">
//       <div className="py-8 px-10 ">
//         <h2 className="text-2xl font-semibold mb-6">How We Work Best</h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {cardData.map((card, index) => (
//             <div
//               key={index}
//               className=" border-[1px] bg-transparent p-2 rounded-lg shadow hover:shadow-md"
//             >
//               <img
//                 src={card.imgSrc}
//                 alt={`${card.title} Icon`}
//                 className="mx-auto mb-4"
//               />
//               <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
//               <p className="text-gray-600 mb-4">{card.description}</p>
//               <a
//                 href={card.link}
//                 className="text-orange-500 hover:text-orange-700 font-semibold"
//               >
//                 LEARN MORE
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Wework;

import React from "react";

const Wework = () => {
  const cardData = [
    {
      imgSrc: "/image/ser.png",
      title: "Step - 1 Consulting Meeting",
      description:
        ".We begin with an initial consultation meeting with our clients to understand their unique business requirements and goals.",
    },
    {
      imgSrc: "/image/ser.png",
      title: "Step - 2 Gap Analysis",
      description:
        "After the consulting meeting, we conduct a thorough gap analysis to assess the current state of our client's processes, systems, and operations",
    },
    {
      imgSrc: "/image/ser.png",
      title: "Step - 3 Proposal Approval",
      description:
        "Based on the findings from the gap analysis, we prepare and send to approval a detailed proposal that includes the scope of work, timeline, and cost estimates.",
    },
    {
      imgSrc: "/image/ser.png",
      title: "Step - 4 Project Onboarding",
      description:
        "Once the proposal is approved, we initiate the project onboarding process. This involves setting up project teams, assigning responsibilities, defining project milestones.",
    },
    {
      imgSrc: "/image/ser.png",
      title: "Step - 5 Launch Website",
      description:
        "We work closely with our clients to migrate their existing data to Zoho, ensuring data integrity and security..",
    },
    {
      imgSrc: "/image/ser.png",
      title: "Step - 6 Training & Support",
      description:
        "We provide comprehensive training and support to our clients. We conduct training sessions to familiarize our clients with the new system, its features, and its functionalities.",
    },
  ];

  return (
    <div className="container  md:px-16">
      <div className=" px-10">
        <div className="flex  leading-7	py-6 ">
          <div className="w-[2.8px] h-8 bg-orange-500  mr-2"></div>
          <div>
            <h2 className="text-3xl  font-semibold  ">How We Work</h2>
            <p>Our whole process can be divided into 6 steps are following</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="flex  border-[1px] bg-transparent p-4 rounded-lg shadow hover:shadow-md"
            >
              <img
                src={card.imgSrc}
                alt={`${card.title} Icon`}
                className="w-16 h-16 mr-4"
              />
              <div>
                <h3 className="text-xl font-medium pb-1 ">{card.title}</h3>
                <p className="text-gray-600 text-xs ">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wework;
