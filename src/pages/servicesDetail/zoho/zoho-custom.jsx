import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import Testimonial from "@/Component/Testimonial/Testimonial";
import { Footer } from "@/Component/Footer/Footer";
import Nav from "@/Component/Header/Nav";
import Image from "next/image";
import Calltoaction from "@/Component/Web/Calltoaction";

const Zohocustom = () => {
  // for services
  const service = [
    {
      imgSrc: "/image/abc.png",
      title: "Zoho web application Development",
      description:
        "We design and develop custom web applications within the Zoho ecosystem, providing intuitive interfaces and powerful functionalities to streamline your operations.",
    },
    {
      imgSrc: "/image/abc.png",
      title: "REST API Integration and Development",
      description:
        "Our experts integrate Zoho applications seamlessly with third-party systems and services using REST APIs, ensuring data synchronization and smooth workflow automation.",
    },
    {
      imgSrc: "/image/abc.png",
      title: "Zoho Custom Application Development",
      description:
        "Whether you need custom modules, workflows, or reports, we create bespoke Zoho applications tailored specifically to your requirements, maximizing efficiency and productivity.",
    },
  ];
  // For FAQ Section
  const [openIndices, setOpenIndices] = useState([]);
  const [isAllOpen, setIsAllOpen] = useState(false);

  const handleToggle = (i) => {
    if (openIndices.includes(i)) {
      setOpenIndices(openIndices.filter((index) => index !== i));
    } else {
      setOpenIndices([...openIndices, i]);
    }
  };

  const handleExpandAll = () => {
    setOpenIndices(faqs.map((_, i) => i));
    setIsAllOpen(true);
  };

  const handleHideAll = () => {
    setOpenIndices([]);
    setIsAllOpen(false);
  };

  const faqs = [
    {
      question: "What is Zoho Custom Development?",
      answer: `Zoho Custom Development involves tailoring Zoho applications to meet specific business requirements through coding, customization, and integration.`,
    },
    {
      question: "Why would a business need Zoho Custom Development?",
      answer: `Businesses may require Zoho Custom Development to address unique needs not met by standard Zoho offerings, enhancing functionality, and gaining a competitive edge.`,
    },
    {
      question:
        "What types of customizations are possible with Zoho Custom Development??",
      answer: `Customizations can include personalized workflows, unique modules, custom reports, integration with third-party systems, and tailored user interfaces`,
    },
    {
      question: "How long does it take to develop custom solutions with Zoho??",
      answer: `The timeline for Zoho Custom Development varies based on the complexity of requirements. Simple customizations may take a few days, while more intricate projects could take several weeks or months.`,
    },
    {
      question: "Is Zoho Custom Development scalable?",
      answer: `Yes, Zoho Custom Development solutions can be designed to scale alongside business growth, accommodating increasing data volumes, users, and functionalities.`,
    },
    {
      question:
        "How does Zoho Custom Development impact existing data and workflows?",
      answer: `Zoho Custom Development ensures seamless integration with existing data and workflows, minimizing disruption while enhancing efficiency and productivity.`,
    },
  ];
  return (
    <>
      {/* navbar section */}
      <div className=" fixed  z-20 w-full top-0">
        <Nav />
      </div>
      <div className=" container pt-20">
        {/* section 1 */}
        <div className="flex justify-center items-center w-full ">
          <div className="grid grid-cols-1 p- md:px-10 md:grid-cols-2 bg-gray-100 rounded-lg  overflow-hidden">
            <div className="p-4 sm:p-6">
              <h2 className="text-md sm:text-xl md:text-2xl  font-bold mb-2 md:mb-3">
                Zoho Custom Development Services
              </h2>
              <p className=" text-sm py-2 text-orange-400">
                Crafting bespoke Zoho solutions for your business, fueling
                growth and efficiency with tailor-made development services
                designed just for you!
              </p>
              <p className="text-sm  sm:text-base md:text-sm text-gray-600">
                Elevate your business with tailored Zoho solutions, crafted to
                fit your unique needs, driving efficiency, growth, and
                innovation forward.
              </p>
              <button className="bg-orange-500 mt-4 h-8 sm:h-14 md:h-14 md:text-lg text-xs w-40 sm:w-52 md:w-56 text-white py-2 px-2 rounded">
                Get In Touch
              </button>
            </div>
            <div className="py-5">
              <img
                src="/image/132.png"
                alt="Card Image"
                className="w-full h-40 sm:h-48 md:h-64 object-cover"
              />
            </div>
          </div>
        </div>
        {/* section 2 */}

        <div className="grid grid-cols-1 gap-6 p-6 mt-5 bg-gray-200 rounded-lg shadow-md md:grid-cols-2">
          <div className="flex justify-center items-center">
            <Image
              src="/image/zoho.jpg"
              alt="Card Image"
              width={300}
              height={300}
              className="object-cover rounded-lg shadow-md"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-xl font-bold mb-1 md:text-2xl">
              Why we need Zoho Managed Services?
            </h2>
            <p className="mb-4">
              Businesses need Zoho Managed Services for ongoing support,
              optimization, and maintenance of Zoho applications to ensure
              seamless operations and efficiency.
            </p>

            <div className="flex items-center mb-1">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="w-5 h-5 mr-2 text-orange-500"
              />
              <h3 className="text-lg font-semibold">Continuous Support</h3>
            </div>
            <p className="pl-7 mb-1 text-sm">
              Zoho Managed Services offer ongoing assistance to address any
              issues or concerns promptly, ensuring uninterrupted operations.
            </p>

            <div className="flex items-center mb-1">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="w-5 h-5 mr-2 text-orange-500"
              />
              <h3 className="text-lg font-semibold">Expert Guidance</h3>
            </div>
            <p className="pl-7 mb-1 text-sm">
              Experienced professionals provide strategic advice and best
              practices for optimizing Zoho applications to meet business
              objectives.
            </p>

            <div className="flex items-center mb-2">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="w-5 h-5 mr-2 text-orange-500"
              />
              <h3 className="text-lg font-semibold">Proactive Maintenance</h3>
            </div>
            <p className="pl-7 text-sm">
              Regular monitoring and updates help prevent potential issues and
              ensure Zoho applications are running smoothly.
            </p>

            <div className="flex items-center mb-2">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="w-5 h-5 mr-2 text-orange-500"
              />
              <h3 className="text-lg font-semibold">
                Focus on Core Activities
              </h3>
            </div>
            <p className="pl-7 text-sm">
              Outsourcing management of Zoho applications allows businesses to
              focus on their core activities and strategic initiatives.
            </p>
          </div>
        </div>
        {/* section call to action */}
        <div>
          <Calltoaction />
        </div>

        {/* section 4 */}

        <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-200 gap-6  p-6">
          <div className="flex justify-center items-center">
            <img
              src="/image/zoho.jpg"
              alt="Card Image"
              className="w-56 h-56 md:w-72 md:h-72 object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="md:text-4xl text-xl font-bold mb-1">
              Zoho Setup and Implementation Process
            </h2>
            <p className="mb-4">
              Efficiently integrate Zoho applications into your business
              operations through expert guidance, customization, and seamless
              implementation for enhanced productivity.
            </p>
            <div className="flex items-start mb-4">
              {/* Adjusted margin and alignment */}
              <img
                src="/image/zz.png"
                alt="Check Icon"
                className="w-12 h-20 mr-4" // Margin to create space between image and text
              />
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  Architecture and Planning
                </h3>
                <p className="text-sm">
                  This phase involves a detailed assessment of your business
                  needs and objectives. We work closely with your team to
                  understand your existing processes, customer journey, and key
                  pain points.
                </p>
              </div>
            </div>
            <div className="flex items-start mb-4">
              {/* Adjusted margin and alignment */}
              <img
                src="/image/zz.png"
                alt="Check Icon"
                className="w-12 h-20 mr-4" // Margin to create space between image and text
              />
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  Setup and Implementation
                </h3>
                <p className="text-sm">
                  With the architecture and plan in place, the setup and
                  implementation phase focuses on translating the agreed-upon
                  strategy into actionable steps.
                </p>
              </div>
            </div>
            <div className="flex items-start mb-4">
              {/* Adjusted margin and alignment */}
              <img
                src="/image/zz.png"
                alt="Check Icon"
                className="w-12 h-20 mr-4" // Margin to create space between image and text
              />
              <div>
                <h3 className="text-lg font-semibold mb-1">Team Training</h3>
                <p className="text-sm">
                  Effective team training is essential for maximizing the value
                  of the HubSpot platform. HubSpot provides comprehensive
                  training sessions tailored to different user roles and
                  proficiency levels within your organization.
                </p>
              </div>
            </div>
            <div className="flex items-start mb-4">
              {/* Adjusted margin and alignment */}
              <img
                src="/image/zz.png"
                alt="Check Icon"
                className="w-12 h-20 mr-4" // Margin to create space between image and text
              />
              <div>
                <h3 className="text-lg font-semibold mb-1">Ongoing Support</h3>
                <p className="text-sm">
                  HubSpot’s commitment to ongoing support ensures that your team
                  has access to assistance and guidance whenever needed.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* section 5   what we do */}

        <div className="my-10">
          <h5 className="text-center text-[#FF1D4D] text-sm md:text-md font-semibold uppercase">
            what we do
          </h5>
          <h2 className="text-center my-5 font-semibold text-2xl md:text-4xl">
            Our Zoho Custom Development Services
          </h2>

          <div className="mt-7 px-5 py-4 bg-gray-50 px-md:10">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
                {service.map((card, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center rounded-lg shadow-lg overflow-hidden p-5 bg-white"
                  >
                    <div className="w-full h-24 relative mb-4">
                      <Image
                        src={card.imgSrc}
                        alt={card.title}
                        layout="fill"
                        objectFit="contain"
                        className="py-4"
                      />
                    </div>

                    <div className="w-full text-gray-600 text-center md:text-left px-2">
                      <h2 className="text-md md:text-lg font-semibold mb-2">
                        {card.title}
                      </h2>
                      <p className="text-sm md:text-base pb-5">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* here is  zoho custom faq section */}
        <div className="container mx-auto mt-3 py-7  grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* section 1 */}
          <div className="col-span-1 md:col-span-2 flex flex-col items-center justify-center text-center">
            <p className="text-[12px] text-zinc-500 leading-3 self-start pl-10 font-bold">
              FAQ
            </p>
            <h3 className="my-3 md:text-2xl text-xl font-bold uppercase">
              Some FAQs For Zoho Custom Development Services{" "}
            </h3>
            <p className="text-[15px] px-2 leading-6">
              A Few of top questions generally our clients asked us regarding
              Zoho Custom Development
            </p>
            <button className="text-center mt-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105">
              Schedule a Discovery Meeting
            </button>
          </div>

          {/* FAQ list */}
          <div className="col-span-1 px-3 md:col-span-3">
            <div className="flex justify-end items-center pb-5">
              <button
                className="underline underline-offset-[6px] text-sm px-2 py-1.5 hover:bg-slate-100 rounded-md"
                onClick={isAllOpen ? handleHideAll : handleExpandAll}
              >
                {isAllOpen ? "Hide all" : "Expand all"}
              </button>
            </div>
            <div className="w-full mx-auto">
              {faqs.map((faq, i) => (
                <div key={i} className="mb-3">
                  <div
                    onClick={() => handleToggle(i)}
                    className="w-full md:h-14 h-16 flex justify-between items-center px-5 py-2 bg-[#f3f3f3] rounded-md hover:bg-gray-200 cursor-pointer"
                  >
                    <p className="md:text-[15px] text-sm capitalize md:font-semibold font-medium mr-1">
                      {faq.question}
                    </p>
                    <span>{openIndices.includes(i) ? "-" : "+"}</span>
                  </div>
                  <div
                    className={`overflow-hidden transition-max-height duration-700 ease-in-out 
                          ${
                            openIndices.includes(i)
                              ? "max-h-[1000px]"
                              : "max-h-0"
                          }`}
                    style={{
                      maxHeight: openIndices.includes(i) ? "1000px" : "0px",
                    }}
                  >
                    <div className="py-4 xl:px-10 px-7 text-sm">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* testimonial */}
        <div className=" my-10">
          <Testimonial />
        </div>
        {/* Footer */}
        <div className=" my-10">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Zohocustom;
