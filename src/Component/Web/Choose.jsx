
import React, { useState } from "react";

const Choose = () => {
  const cardData = [
    {
      alt: "branding-identity",
      src: "/image/ser.png",
      title: " Proven Experties",
      description:
        "At Four Steps Digital Consulting Pvt. Ltd, we bring a wealth of experience and expertise in implementing Bitrix24 solutions. Our team consists of certified Bitrix24 specialists who have successfully executed numerous projects, helping businesses optimize their operations and enhance collaboration.",
    },
    {
      alt: "ui-ux-design",
      src: "/image/ser.png",
      title: "Tailored solutions",
      description:
        "We understand that every business is unique. Our approach involves a thorough analysis of your specific needs and challenges. We tailor Bitrix24 solutions to align seamlessly with your organizational goals, ensuring maximum efficiency and productivity.",
    },
    {
      alt: "illustration",
      src: "/image/ser.png",
      title: "Comprehensive services",
      description:
        "Our commitment to client satisfaction goes beyond the initial implementation. We provide ongoing support and maintenance services to ensure that your Bitrix24 platform continues to operate smoothly. Our responsive support team is ready to assist you with any questions or issues that may arise.",
    },
    {
      alt: "unique-design",
      src: "/image/ser.png",
      title: "Focus on Training and Adoption",
      description:
        "We prioritize user training and adoption to empower your team with the skills needed to leverage Bitrix24 to its full potential. Our training programs are designed to make the transition to Bitrix24 seamless, fostering a positive user experience.",
    },
    {
      alt: "easy-to-customize",
      src: "/image/ser.png",
      title: "Innovation and Updates",
      description:
        "Bitrix24 is a dynamic platform that evolves with time. We stay updated with the latest features and enhancements, ensuring that your organization benefits from the latest innovations within the Bitrix24 ecosystem.",
    },
    {
      alt: "support",
      src: "/image/ser.png",
      title: "Transparent Communication",
      description:
        "We believe in transparent and open communication throughout the project lifecycle. Our team keeps you informed at every stage, providing regular updates and insights into the progress of your Bitrix24 implementation.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div>
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 px-12 lg:grid-cols-3 gap-6">
          {cardData.map((card, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-md">
                <img
                  aria-hidden="true"
                  alt={card.alt}
                  src={card.src}
                  className="mx-auto h-16 w-16 sm:h-20 sm:w-20 md:h-20 md:w-20 lg:h-20 lg:w-20 mb-2 object-contain"
                />
                <h3 className="text-md font-semibold text-center">
                  {card.title}
                </h3>
                <p className=" text-sm">
                  {isExpanded
                    ? card.description
                    : `${card.description.substring(0, 100)}...`}
                </p>
                <div className="text-right text-sm" >
                  <button
                    className="text-gray-500 "
                    onClick={() => toggleDescription(index)}
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Choose;
