import { Footer } from "@/Component/Footer/Footer";
import React from "react";
import Image from "next/image";
import Testimonial from "@/Component/Testimonial/Testimonial";
import { useRouter } from "next/router";
import Nav from "@/Component/Header/Nav";

const Hubspot = () => {
  const router = useRouter();
  const cards = [
    {
      imgSrc: "/image/pic.jpeg",
      title: "Hubspot Setup and Implementation",
      description:
        "CMS web development simplifies website management with user-friendly platforms, allowing easy content updates without extensive technical knowledge..",
      buttonText: "Get Started",
      route: "/servicesDetail/hubspot/setup",
    },
    {
      imgSrc: "/image/bg.jpg",
      title: "Hubspot Development",
      description:
        "Custom web development tailors websites to specific business needs, offering unique designs, features, and functionality for optimal user experiences.",
      buttonText: "Get Started",
      route: "/servicesDetail/hubspot/development",
    },
    {
      imgSrc: "/image/pic.jpeg",
      title: "Hubspot Managed Services",
      description:
        "An e-commerce store allows businesses to sell products online, offering customers convenient shopping, secure payments, and fast delivery services.",
      buttonText: "Get Started",
      route: "/servicesDetail/hubspot/manage",
    },
    {
      imgSrc: "/image/pic.jpeg",
      title: "Hubspot Training and Consulting",
      description:
        "An e-commerce store allows businesses to sell products online, offering customers convenient shopping, secure payments, and fast delivery services.",
      buttonText: "Get Started",
      route: "/servicesDetail/hubspot/training",
    },
  ];

  const handleclick = (route) => {
    router.push(route);
  };

  return (
    <div className="container">
      {/* nav bar section  */}
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
          <div className="flex justify-center leading-7 pb-4 items-center">
            <div className="w-[2.8px] h-6 bg-green-500 mr-2"></div>
            <h2 className="text-md">Hubspot Services</h2>
          </div>

          <h1 className="text-3xl lg:text-4xl font-bold mb-2">
            Hubspot: Boost Your Sales with HubSpot
          </h1>
        </div>
      </div>

      {/* heading section */}
      <div className="py-8 sm:px-5 px-5 md:px-20">
        <div className="flex pb-2">
          <div className="w-[2.8px] h-6 bg-green-400 mr-2"></div>
          <h2 className="text-md">Case Studies</h2>
        </div>
        <h1 className="text-2xl font-semibold mb-5">
          My Recent
          <span className="pl-1 text-green-500">Hubspot services Area</span>
        </h1>
        <p className="max-w-xl text-sm italic items-center">
          HubSpot offers a comprehensive suite of tools designed to streamline
          marketing, sales, and customer service. With its powerful CRM,
          marketing automation, and reporting capabilities, HubSpot helps
          businesses attract, engage, and delight customers. Its user-friendly
          interface and integration options make it a go-to choice for
          growth-driven organizations.
        </p>
      </div>

      {/* service section */}
      <div className="container px-5 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:px-5 md:px-20 py-2 md:grid-cols-3 gap-5">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={card.imgSrc}
                alt={card.title}
                width={500}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
                <p className="text-gray-600 line-clamp-3">{card.description}</p>
                <button
                  className=" mt-5 text-sm px-3 py-2 rounded-full text-white bg-gradient-to-r from-orange-500 to-red-500"
                  onClick={() => card.route && handleclick(card.route)}
                  disabled={!card.route}
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

export default Hubspot;
