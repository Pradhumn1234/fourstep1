// import React from "react";

// const setup = () => {
//   return (
//     <div>
//       <h1>welcome to zoho setup</h1>
//     </div>
//   );
// };

// export default hubspotsetup;

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import Testimonial from "@/Component/Testimonial/Testimonial";
import { Footer } from "@/Component/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Nav from "@/Component/Header/Nav";
import Calltoaction from "@/Component/Web/Calltoaction";

const Hubspotsetup = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      // disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  // for zoho services
  const businesses = [
    {
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQV10Yv2Z-OBqPjn4fTzOJAke_7e9hLm0FG1lGnyHSaT1vJxJ9n",
      alt: "Abc",
      name: "Zoho One",
    },
    {
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQV10Yv2Z-OBqPjn4fTzOJAke_7e9hLm0FG1lGnyHSaT1vJxJ9n",
      alt: "Abc",
      name: "Zoho Crm",
    },
    {
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQV10Yv2Z-OBqPjn4fTzOJAke_7e9hLm0FG1lGnyHSaT1vJxJ9n",
      alt: "Abc",
      name: "ZOho Form",
    },
    {
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQV10Yv2Z-OBqPjn4fTzOJAke_7e9hLm0FG1lGnyHSaT1vJxJ9n",
      alt: "Abc",
      name: "Zoho Campaign",
    },
    {
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQV10Yv2Z-OBqPjn4fTzOJAke_7e9hLm0FG1lGnyHSaT1vJxJ9n",
      alt: "Abc",
      name: "Zoho Projects",
    },
    {
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQV10Yv2Z-OBqPjn4fTzOJAke_7e9hLm0FG1lGnyHSaT1vJxJ9n",
      alt: "Zoho Desk",
    },
    {
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQV10Yv2Z-OBqPjn4fTzOJAke_7e9hLm0FG1lGnyHSaT1vJxJ9n",
      alt: "Abc",
      name: "Zoho Sales Iq",
    },
    {
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQV10Yv2Z-OBqPjn4fTzOJAke_7e9hLm0FG1lGnyHSaT1vJxJ9n",
      alt: "Abc",
      name: "Distribution Industry",
    },
    {
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQV10Yv2Z-OBqPjn4fTzOJAke_7e9hLm0FG1lGnyHSaT1vJxJ9n",
      alt: "Abc",
      name: "Zoho Booking",
    },
    {
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQV10Yv2Z-OBqPjn4fTzOJAke_7e9hLm0FG1lGnyHSaT1vJxJ9n",
      alt: "Abc",
      name: "Zoho Books",
    },
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
  // FAQ Section
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
      question: "What is HubSpot Setup and Implementation?",
      answer: `HubSpot Setup and Implementation refers to the process of configuring and deploying the HubSpot platform within your organization. It involves setting up features such as contact management, marketing automation, sales pipelines, and customer service tools to align with your business goals and processes.      `,
    },
    {
      question: "  Why is HubSpot Setup and Implementation important?",
      answer: `Proper setup and implementation of HubSpot ensure that your organization can leverage the platform’s full potential to streamline operations, nurture leads, and drive growth. It helps in centralizing customer data, automating marketing and sales processes, and improving overall efficiency. `,
    },
    {
      question:
        "What does the HubSpot Setup and Implementation process entail?",
      answer: `The HubSpot Setup and Implementation process typically involve several steps, including initial consultation and goal setting, account setup and configuration, data migration and integration, customization, team training, and ongoing support.      `,
    },
    {
      question: "How long does HubSpot Setup and Implementation take?",
      answer: `The duration of HubSpot Setup and Implementation can vary depending on the complexity of your organization’s needs and the scope of the project. Typically, it can take anywhere from a few weeks to a few months to complete the setup and implementation process.`,
    },
    {
      question: "Do I need technical expertise to implement HubSpot?",
      answer: `While having technical expertise can be beneficial, HubSpot offers comprehensive support and resources to guide organizations through the setup and implementation process. HubSpot specialists assist in configuring the platform and provide training to ensure that your team can effectively utilize its features.`,
    },
    {
      question: "Can HubSpot be integrated with other tools and systems?",
      answer: `Yes, HubSpot can be integrated with a wide range of other tools and systems commonly used in business operations, such as CRMs, email marketing platforms, e-commerce platforms, and customer support systems. Integration ensures seamless data flow and enhances the functionality of both HubSpot and the integrated tools.`,
    },
  ];
  // card data

  const cardData = [
    {
      title: "HubSpot CRM Onboarding",
      description:
        "The onboarding process begins with a thorough consultation to understand your business objectives, challenges, and goals. HubSpot specialists work closely with you to define key performance indicators (KPIs) and establish clear benchmarks for success. ",
      imgSrc: "/image/zo.png",
      borderColor: "border-green-500",

      hoverBgColor: "group-hover:bg-green-500",
      hoverTitleColor: "group-hover:text-green-500",
    },
    {
      title: "Sales Hub Onboarding",
      description:
        "Sales Hub Onboarding HubSpot experts guide you through the setup and configuration of your HubSpot account, ensuring that all features and functionalities are tailored to meet your specific needs. This includes configuring contact properties, pipelines, workflows, and integration with other tools in your tech stack. ",
      imgSrc: "/image/zo.png",
      borderColor: "border-orange-500",

      hoverBgColor: "group-hover:bg-orange-500",
      hoverTitleColor: "group-hover:text-orange-500",
    },
    {
      title: "Service Hub Onboarding",
      description:
        " Seamless migration of your existing data into HubSpot is crucial for maintaining continuity and maximizing the platform's effectiveness. Whether you're transitioning from another CRM or consolidating data from various sources, the onboarding team ensures a smooth and accurate migration process.",
      imgSrc: "/image/zo.png",
      borderColor: "border-blue-500",
      hoverBgColor: "group-hover:bg-blue-500",
      hoverTitleColor: "group-hover:text-blue-500",
    },
    {
      title: "Operations Hub Onboarding",
      description:
        " Operations Hub Onboarding Comprehensive training sessions are provided to equip your team with the knowledge and skills required to leverage HubSpot effectively. From basic platform navigation to advanced features like marketing automation and sales enablement, training is tailored to your team's proficiency level and specific roles within the organization.",
      imgSrc: "/image/zo.png",
      borderColor: "border-pink-500",

      hoverBgColor: "group-hover:bg-pink-500",
      hoverTitleColor: "group-hover:text-pink-500",
    },
    {
      title: "Data Mirgration & Integration",
      description:
        "Every business is unique, and so are its workflows and processes. HubSpot Onboarding Services include customization options to align the platform with your organization's branding, messaging, and operational requirements. This may involve creating custom templates, designing branded email and landing pages, configuring lead scoring models, or implementing personalized content strategies to enhance customer engagement.",
      imgSrc: "/image/zo.png",
      borderColor: "border-red-500",
      hoverBgColor: "group-hover:bg-red-500",
      hoverTitleColor: "group-hover:text-red-500",
    },
    {
      title: "Training and Support ",
      imgSrc: "/image/zo.png",
      description:
        "The relationship doesn't end after the initial setup. HubSpot's onboarding team provides ongoing support and guidance to ensure that you continue to derive maximum value from the platform. This includes regular check-ins to review performance metrics, identify areas for improvement, and implement optimization strategies to drive continuous growth and success.",
      borderColor: "border-yellow-500",
      hoverBgColor: "group-hover:bg-yellow-500",
      hoverTitleColor: "group-hover:text-yellow-500",
    },
  ];
  return (
    <>
      {/* nav bar section  */}
      <div className=" fixed w-full z-[19] top-0">
        <Nav />
      </div>
      <div className="container pt-16">
        {/* hero section  */}
        <div className="flex justify-center items-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 p-10 bg-gray-100 rounded-lg shadow-lg overflow-hidden">
            {/* Image Div */}
            <div className="order-1 md:order-2 py-5">
              <img
                src="/image/132.png"
                alt="Card Image"
                className="w-full h-40 sm:h-48 md:h-64 object-cover"
              />
            </div>

            {/* Content Div */}
            <div className="order-2 md:order-1  sm:p-6">
              <h2 className="text-md sm:text-xl md:text-4xl font-semibold mb-2 md:mb-3">
                HubSpot Setup and Implementation Services
              </h2>
              <p className="text-sm py-2 text-orange-400">
                Transform your business with seamless HubSpot Setup and
                Implementation Services - your key to unlocking growth!
              </p>
              <p className="text-sm sm:text-base md:text-sm text-gray-600">
                Efficiently deploy HubSpot tools, optimize workflows, integrate
                systems, and empower teams for seamless growth with expert Setup
                and Implementation Services.
              </p>
              <div className="flex justify-center md:justify-start">
                <button className="bg-orange-500 font-medium mt-4 h-10 sm:h-14 md:h-14 md:text-lg text-xs w-32 sm:w-48 md:w-48 text-white py-2 px-2 rounded">
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* second  section */}
        <div className="grid grid-cols-1 mt-5 md:grid-cols-2 bg-gray-200 gap-6 p-6">
          <div className="flex justify-center items-center">
            <img
              src="/image/zoho.jpg"
              alt="Card Image"
              className="w-56 h-56 md:w-72 md:h-72 object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="md:text-2xl text-xl font-semibold mb-2">
              Why is Hubspot Onboarding Critical?
            </h2>
            <p className=" text-xs mb-4">
              HubSpot Onboarding is crucial for your business success. It
              ensures efficient implementation, optimal platform utilization,
              faster time to value, customized strategies, and seamless
              integration.
            </p>
            <div className="flex items-center mb-1">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-orange-500 w-5 h-5 mr-2"
              />
              <div className="flex-1 ">
                <h3 className="text-md font-semibold">Customized Strategies</h3>
                <p className="text-xs">
                  Develop tailored approaches that align with your industry and
                  objectives.
                </p>
              </div>
            </div>
            <div className="flex items-center mb-1">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="w-5 h-5 mr-2 text-orange-500"
              />
              <div className="flex-1 py-1">
                <h3 className="text-md font-semibold">Smooth Implementation</h3>
                <p className="text-xs">
                  Ensure a seamless and efficient setup of HubSpot tailored to
                  your business needs.
                </p>
              </div>
            </div>
            <div className="flex items-center mb-2">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="w-5 h-5 text-orange-500 mr-2"
              />
              <div className="flex-1">
                <h3 className="text- md font-semibold">
                  Maximize Platform Potential
                </h3>
                <p className="text-xs">
                  Leverage the full power of HubSpot’s tools and features for
                  your goals.
                </p>
              </div>
            </div>
            <div className="flex items-center mb-2">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="w-5 h-5 text-orange-500 mr-2"
              />
              <div className="flex-1">
                <h3 className="text-md font-semibold">Faster Time Value</h3>
                <p className="text-xs">
                  Expedite learning and start generating results sooner.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* start a  lets connect section */}

        {/* HubSpot training  */}

        <h2 className="  text-center  text-lg px-4 md:px-0 py-5 md:text-3xl font-semibold">
          Our HubSpot Onboarding Services
        </h2>
        <div className="cursor-pointer grid grid-cols-1 md:w-4/5 w-full md:grid-cols-3 sm:grid-cols-2 md:px-3 px-7 mx-auto gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="group relative shadow-lg flex flex-col justify-between transition-shadow duration-300 ease-in-out hover:shadow-[-10px_0_15px_0_rgba(0,0,0,0.2)]"
            >
              <div className="px-4">
                <img
                  aria-hidden="true"
                  alt={card.title}
                  src={card.imgSrc}
                  className="mx-auto mt-3"
                />
                <h3
                  className={`text-lg font-semibold mt-2 transition-colors duration-300 ease-in-out ${card.hoverTitleColor}`}
                >
                  {card.title}
                </h3>
                <p className="mt-2 text-sm">{card.description}</p>
              </div>
              <div className="flex my-7 justify-center"></div>
              <div className={`border-b-4 ${card.borderColor} mt-4`}></div>
            </div>
          ))}
        </div>
        {/* hubspot service end*/}
        <div className="md:max-w-6xl w-10/12  mx-auto p-6  my-6   shadow-md rounded-lg relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-1 bg-orange-500"></div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6  px-4  items-center">
            <div>
              <h2 className="text-xl md:py-6 md:text-3xl font-semibold text-gray-800">
                Onboarding the unless the power of HobSpot for
                <span className="text-orange-500"> Your Business </span>
              </h2>
              <p className="md:py-4 py-2 text-xs md:text-sm text-gray-600">
                Transform your business through tailored guidance and training
                to fully leverage the capabilities of HubSpot for growth.
              </p>
            </div>
            <div className="flex justify-center">
              <button class=" md:mt-0 w-56 h-14 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-full shadow-lg transition">
                CONNECT WITH US
              </button>
            </div>
          </div>
        </div>

        {/* HubSpot On Boarding process */}
        <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-200 gap-6  p-6">
          <div className="flex justify-center items-center">
            <img
              src="/image/zoho.jpg"
              alt="Card Image"
              className="w-56 h-56 md:w-72 md:h-72 object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="md:text-3xl text-xl font-semibold mb-1">
              HubSpot Onboarding Process
            </h2>
            <p className="mb-4 text-xs">
              The ongoing process with HubSpot involves continuous support,
              optimization, and refinement of your usage of the platform to
              ensure that you’re maximizing its potential and driving sustained
              business growth.
            </p>
            <div className="flex items-start ">
              {/* Adjusted margin and alignment */}
              <img
                src="/image/zz.png"
                alt="Check Icon"
                className="w-12 h-28 mr-4" // Margin to create space between image and text
              />
              <div>
                <h3 className="text-lg font-semibold ">
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
            <div className="flex items-start">
              {/* Adjusted margin and alignment */}
              <img
                src="/image/zz.png"
                alt="Check Icon"
                className="w-12 h-28 mr-4" // Margin to create space between image and text
              />
              <div>
                <h3 className="text-lg font-semibold ">
                  Setup and Implementation
                </h3>
                <p className="text-sm">
                  With the architecture and plan in place, the setup and
                  implementation phase focuses on translating the agreed-upon
                  strategy into actionable steps.
                </p>
              </div>
            </div>
            <div className="flex items-start ">
              {/* Adjusted margin and alignment */}
              <img
                src="/image/zz.png"
                alt="Check Icon"
                className="w-12 h-28 mr-4" // Margin to create space between image and text
              />
              <div>
                <h3 className="text-lg font-semibold ">Team Training</h3>
                <p className="text-sm">
                  Effective team training is essential for maximizing the value
                  of the HubSpot platform. HubSpot provides comprehensive
                  training sessions tailored to different user roles and
                  proficiency levels within your organization.
                </p>
              </div>
            </div>
            <div className="flex items-start ">
              {/* Adjusted margin and alignment */}
              <img
                src="/image/zz.png"
                alt="Check Icon"
                className="w-12 h-28 mr-4" // Margin to create space between image and text
              />
              <div>
                <h3 className="text-lg font-semibold">Ongoing Support</h3>
                <p className="text-sm">
                  HubSpot’s commitment to ongoing support ensures that your team
                  has access to assistance and guidance whenever needed.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* lets connect  */}
        <div>
          <Calltoaction />
        </div>
        {/* here case study section or project section */}

        {/*  start faq section*/}
        <div className="container mx-auto mt-3 py-7  grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* section 1 */}
          <div className="col-span-1 md:col-span-2 flex flex-col items-center justify-center text-center">
            <p className="text-[12px] text-zinc-500 leading-3 md:self-start pl-10 font-semibold">
              FAQ
            </p>
            <h3 className="my-3 md:text-2xl px-4 md:px-0 text-xl font-semibold ">
              Some FAQs For Hubspot Setup and implementation
            </h3>
            <p className="text-[15px] px-4 leading-6">
              A Few of top questions generally our clients asked us regarding to
              HubSpot set up and implementation
            </p>
            <button className="text-center mt-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105">
              Schedule a Discovery Meeting
            </button>
          </div>

          {/* FAQ list */}
          <div className="col-span-1 px-3 md:col-span-3">
            {faqs?.length > 0 && (
              <div className="flex justify-end items-center pb-5">
                <button
                  className="underline underline-offset-[6px] text-sm px-2 py-1.5 hover:bg-slate-100 rounded-md"
                  onClick={isAllOpen ? handleHideAll : handleExpandAll}
                >
                  {isAllOpen ? "Hide all" : "Expand all"}
                </button>
              </div>
            )}
            <div className="w-full mx-auto">
              {faqs.map((faq, i) => (
                <div key={i} className="mb-3">
                  <div
                    onClick={() => handleToggle(i)}
                    className="w-full md:h-14 h-16 flex justify-between items-center px-5 py-2 bg-[#f3f3f3] rounded-md hover:bg-gray-200 cursor-pointer"
                  >
                    <p
                      className={`md:text-[15px] text-sm capitalize md:font-semibold font-medium mr-1 ${
                        openIndices.includes(i)
                          ? "text-orange-500"
                          : "text-black"
                      }`}
                    >
                      {faq.question}
                    </p>
                    <span>{openIndices.includes(i) ? "-" : "+"}</span>
                  </div>
                  <div
                    className={`overflow-hidden transition-max-height duration-700 ease-in-out ${
                      openIndices.includes(i) ? "max-h-[1000px]" : "max-h-0"
                    }`}
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
        {/* end faq section */}
        {/* testimonial section */}
        <div className=" mt-10">
          <Testimonial />
        </div>
        {/* footer section */}
        <div className=" mt-5">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Hubspotsetup;
