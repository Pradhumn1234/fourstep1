import { Footer } from "@/Component/Footer/Footer";
import React from "react";
import Image from "next/image";
import Testimonial from "@/Component/Testimonial/Testimonial";
import { useRouter } from "next/router";
import Nav from "@/Component/Header/Nav";

const Digital = () => {
  const router = useRouter();

  const cards = [
    {
      imgSrc: "/image/pic.jpeg",
      title: "PPC Management",
      description:
        "PPC management involves strategizing, creating, and optimizing pay-per-click campaigns across platforms like Google Ads and social media. It focuses on maximizing ad performance, improving ROI, and driving targeted traffic through budget control and keyword bidding.",
      buttonText: "Get Started",
      route: "/servicesDetail/digitalmarketing/ppc-management",
    },
    {
      imgSrc: "/image/bg.jpg",
      title: "Search Engine Optimization",
      description:
        "Search Engine Optimization (SEO) is the process of optimizing a website to rank higher in search engine results. It involves improving content, keywords, and technical elements to increase visibility, attract more traffic, and enhance user experience.",
      buttonText: "Get Started",
      route: "/servicesDetail/digitalmarketing/seo",
    },
    {
      imgSrc: "/image/pic.jpeg",
      title: "Social Media Management",
      description:
        "Social media management involves creating, scheduling, analyzing, and engaging with content posted across platforms like Facebook, Instagram, Twitter, and LinkedIn. It helps businesses build brand awareness, connect with audiences, and drive engagement to achieve marketing goals and foster customer relationships.",
      buttonText: "Get Started",
      route: "/servicesDetail/digitalmarketing/socialmedia-management",
    },
    {
      imgSrc: "/image/pic.jpeg",
      title: "Content Marketing",
      description:
        "Content marketing is a strategic approach focused on creating and distributing valuable, relevant content to attract and engage a target audience. Its goal is to build trust, establish brand authority, and ultimately drive profitable customer actions without direct selling.",
      buttonText: "Get Started",
      route: "/servicesDetail/digitalmarketing/content-marketing",
    },
  ];

  const handleButtonClick = (route) => {
    router.push(route);
  };

  return (
    <div className="container">
      <div className=" fixed w-full z-[19] top-0">
        <Nav />
      </div>
      <div
        className="relative w-full h-80 sm:h-96 lg:h-[32rem] flex items-center justify-center bg-cover object-cover text-white"
        style={{
          backgroundImage:
            'url("https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30549.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <div className="flex justify-center leading-7 pb-2 items-center">
            <div className="w-[2.8px] h-6 bg-green-500 mr-2"></div>
            <h2 className="text-md">Digital Marketing</h2>
          </div>
          <h1 className="text-lg lg:text-4xl font-bold md:mb-1">
            The future of marketing is digital
          </h1>
        </div>
      </div>

      {/* heading section */}
      <div className="px-5 py-8 sm:px-5 md:px-20">
        <div className="flex pb-2">
          <div className="w-[2.8px] h-6 bg-orange-400 mr-2"></div>
          <h2 className="text-md">Case Studies</h2>
        </div>
        <h1 className="text-2xl font-semibold ">
          My Recent
          <span className="text-orange-500">
            DIgiatl Marketing services Area
          </span>
        </h1>
        <p className="max-w-xl text-sm italic mt-3 items-center">
          Digital marketing is the art of connecting brands with people through
          meaningful content, strategic data, and personalized experiences. In a
          world driven by technology, it’s not just about selling a product, but
          about building trust, engaging communities, and creating lasting
          relationships that convert leads into loyal customers.
        </p>
      </div>

      {/* service section */}
      <div className="container mx-auto px-5 md:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:px-5 md:px-20 py-2 md:grid-cols-3 gap-5">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={card.imgSrc}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
                <p className="text-gray-600 line-clamp-3">{card.description}</p>

                <button
                  className=" mt-5 text-sm px-3 py-2 rounded-full text-white bg-gradient-to-r from-orange-500 to-red-500"
                  onClick={() => handleButtonClick(card.route)}
                >
                  {card.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* testimonial section */}
      <div className="mt-4">
        <Testimonial />
      </div>
      {/* footer section */}
      <div className="mt-4">
        <Footer />
      </div>
    </div>
  );
};

export default Digital;
