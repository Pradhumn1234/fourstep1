import React from "react";
import Link from "next/link";
import Image from "next/image";

const cardData = [
  {
    imgSrc: "/image/about.jpg",
    alt: "Team About Us",
    link: "/about",
    title: "Learn About Us",
    description: "Move with a great team, it's better.",
  },
  {
    imgSrc: "/image/about.jpg",
    alt: "What We Do",
    link: "/service",
    title: "What We Do",
    description: "Move with a great team, it's better.",
  },
  {
    imgSrc: "/image/ab.webp",
    alt: "Mission And Vision",
    link: "/mission-and-vision",
    title: "Mission And Vision",
    description: "Move with a great team, it's better.",
  },
];

const Additional = () => {
  return (
    <div className="container hidden md:block">
      <div className="relative">
        <div className="flex flex-col h-[450px]">
          <div className="bg-gray-200 flex-1"></div>
          <div className="bg-gray-100 flex-1"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container   px-4">
            <div className="grid grid-cols-1 px-4 md:px-32 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
              {cardData.map((card, index) => (
                <div className=" bg-white rounded-lg" key={index}>
                  <Image
                    src={card.imgSrc}
                    alt={card.alt}
                    height={500}
                    width={500}
                    // className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <Link
                    href={card.link}
                    className="flex items-center cursor-pointer px-4 py-1"
                  >
                    <div className="w-15 h-15 mr-4 mt-1">
                      <Image
                        src="/image/ser.png" // Replace with the actual path to your PNG icon
                        alt="Info Icon"
                        height={100}
                        width={100}
                      />
                    </div>
                    <div className="pb-2">
                      <h3 className="text-xl font-bold mb-1">{card.title}</h3>
                      <p>{card.description}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Additional;




