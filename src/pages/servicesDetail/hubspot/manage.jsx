import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import Testimonial from "@/Component/Testimonial/Testimonial";
import { Footer } from "@/Component/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Nav from "@/Component/Header/Nav";
import Calltoaction from "@/Component/Web/Calltoaction";

const Manage = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      // disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  // for zoho services

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
      question: "What are HubSpot Managed Services? ",
      answer: `HubSpot Managed Services refer to outsourcing the management and optimization of the HubSpot platform to a team of experts. These services encompass a range of activities, including setup, campaign management, content development, lead generation, and data analysis.`,
    },
    {
      question:
        "What types of businesses can benefit from HubSpot Managed Services?",
      answer: `HubSpot Managed Services are suitable for businesses of all sizes and industries, from startups to enterprise-level organizations. Any business looking to streamline its marketing efforts, improve ROI, and leverage the full potential of HubSpot can benefit from these services.`,
    },
    {
      question: "What services are included in HubSpot Managed Services??",
      answer: `HubSpot Managed Services typically include platform setup and configuration, campaign management, content development, lead generation, sales enablement, data analysis, continuous optimization, technical support, and training.`,
    },
    {
      question:
        "How do HubSpot Managed Services differ from using HubSpot on my own?",
      answer: `While using HubSpot independently requires internal resources to manage and optimize the platform, HubSpot Managed Services provide businesses with access to a team of experienced professionals who handle all aspects of HubSpot management. This allows businesses to focus on core activities while benefiting from expert guidance and support.`,
    },
    {
      question:
        "How customizable are HubSpot Managed Services to my business's needs?",
      answer: `HubSpot Managed Services are highly customizable to meet the unique needs and objectives of each business. Managed service providers work closely with clients to understand their goals, target audience, and industry-specific requirements, tailoring strategies and solutions accordingly.`,
    },
    {
      question:
        "What level of involvement is required from my team when using HubSpot Managed Services?",
      answer: `The level of involvement required from your team can vary depending on your preferences and resources. Managed service providers can handle all aspects of HubSpot management, from strategy development to execution, or collaborate closely with your internal team for a more integrated approach.`,
    },
  ];
  // card data

  const cardData = [
    {
      title: "Data Management ",
      description:
        "Effective data management is crucial for deriving actionable insights and making informed marketing decisions. HubSpot Managed Services encompass data management strategies such as data cleansing, segmentation, and enrichment to ensure that your database is accurate, up-to-date, and conducive to targeted marketing campaigns.",
      imgSrc: "/image/zo.png",
      borderColor: "border-green-500",
      hoverBgColor: "group-hover:bg-green-500",
      hoverTitleColor: "group-hover:text-green-500",
    },
    {
      title: "Plateform Audit & Optimization",
      description:
        "A thorough audit of your HubSpot platform is conducted to identify areas for improvement and optimization. This includes assessing your account setup, integration with other systems, usage of features and tools, and adherence to best practices. Recommendations are provided to optimize the platform for maximum efficiency and effectiveness.",
      imgSrc: "/image/zo.png",
      borderColor: "border-orange-500",
      hoverBgColor: "group-hover:bg-orange-500",
      hoverTitleColor: "group-hover:text-orange-500",
    },
    {
      title: "Dashboard & Reporting Updates   ",
      description:
        "Dashboards and reports are customized to provide real-time visibility into key performance metrics and campaign effectiveness. Updates are made regularly to reflect changes in campaign strategies, goals, and objectives, ensuring that stakeholders have access to accurate and actionable insights to drive decision-making.",
      imgSrc: "/image/zo.png",
      borderColor: "border-blue-500",
      hoverBgColor: "group-hover:bg-blue-500",
      hoverTitleColor: "group-hover:text-blue-500",
    },
    {
      title: "Ongoing Technical Support ",
      description:
        "HubSpot Managed Services provide continuous technical support to address any platform-related issues or concerns promptly. Whether it's troubleshooting technical glitches, resolving integration challenges, or assisting with platform updates, a dedicated team of experts is available to ensure smooth operation and minimal downtime.",
      imgSrc: "/image/zo.png",
      borderColor: "border-pink-500",
      hoverBgColor: "group-hover:bg-pink-500",
      hoverTitleColor: "group-hover:text-pink-500",
    },
    {
      title: "Adminstration $ Employee Training ",
      description:
        "Admin tasks such as user management, permissions, and access control are handled efficiently by HubSpot Managed Services providers. Additionally, comprehensive training programs are offered to empower your team with the knowledge and skills needed to maximize their use of the HubSpot platform, from basic functionalities to advanced features.",
      imgSrc: "/image/zo.png",
      borderColor: "border-red-500",
      hoverBgColor: "group-hover:bg-red-500",
      hoverTitleColor: "group-hover:text-red-500",
    },
    {
      title: "CMS Web Developement & Maintenance",
      imgSrc: "/image/zo.png",
      description:
        "HubSpot's Content Management System (CMS) is a powerful tool for creating and managing website content. Managed Services include web development and maintenance services to design, build, and optimize your website for performance, user experience, and search engine visibility. Regular updates and maintenance ensure that your website remains secure, responsive, and aligned with your branding and marketing objectives.",
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
                HubSpot Managed Services
              </h2>
              <p className="text-sm py-2 text-orange-400">
                Transform your business with seamless HubSport Managed Services
                - your key to unlocking growth!
              </p>
              <p className="text-sm sm:text-base md:text-sm text-gray-600">
                HubSpot Managed Services offer expert guidance, support, and
                optimization for businesses leveraging HubSpot’s marketing,
                sales, and customer service platforms.
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
              Why We Need HubSpot Managed Services?
            </h2>
            <p className=" text-xs mb-4">
              HubSpot Managed Services streamline marketing, optimize
              performance, and empower businesses with expert support for
              sustained growth and success.
            </p>
            <div className="flex items-start mb-1">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-orange-500 w-5 h-5 mr-2"
              />
              <div className="flex-1 ">
                <h3 className="text-md font-semibold">Expert Guidance</h3>
                <p className="text-xs">
                  HubSpot Managed Services provide expert guidance from
                  professionals who are well-versed in leveraging the HubSpot
                  platform for maximum results.
                </p>
              </div>
            </div>
            <div className="flex items-start mb-1">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="w-5 h-5 mr-2 text-orange-500"
              />
              <div className="flex-1 py-1">
                <h3 className="text-md font-semibold">Cost-Effectiveness</h3>
                <p className="text-xs">
                  Instead of hiring and training in-house staff, opting for
                  managed services offers a cost-effective solution, reducing
                  overhead costs associated with managing HubSpot internally.
                </p>
              </div>
            </div>
            <div className="flex items-start mb-2">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="w-5 h-5 text-orange-500 mr-2"
              />
              <div className="flex-1">
                <h3 className="text- md font-semibold">Technical Support</h3>
                <p className="text-xs">
                  Access to ongoing technical support ensures any issues with
                  the HubSpot platform are promptly addressed, minimizing
                  downtime and disruptions to marketing activities.
                </p>
              </div>
            </div>
            <div className="flex items-start mb-2">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="w-5 h-5 text-orange-500 mr-2"
              />
              <div className="flex-1">
                <h3 className="text-md font-semibold">Optimization</h3>
                <p className="text-xs">
                  Managed services ensure that HubSpot is configured and
                  utilized to its full potential, optimizing marketing efforts
                  and driving better results.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* start a  lets connect section */}

        {/* HubSpot manage  */}

        <h2 className="  text-center  text-lg px-4 md:px-0 py-5 md:text-3xl font-semibold">
          Our HubSpot Managed Services
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
        {/* hubspot manage end*/}
        <div className="md:max-w-6xl w-10/12  mx-auto p-6  my-6   shadow-md rounded-lg relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-1 bg-orange-500"></div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6  px-4  items-center">
            <div>
              <h2 className="text-xl md:py-6 md:text-3xl font-semibold text-gray-800">
                Experience seamless onboarding and unleash HubSpot s potential
                for your business with our comprehensive
                <span className="text-orange-500"> Managed Services </span>
              </h2>
              <p className="md:py-4 py-2 text-xs md:text-sm text-gray-600">
                Empower your business with HubSpot Managed Services – harnessing
                expertise for effortless marketing mastery and unstoppable
                growth.
              </p>
            </div>
            <div className="flex justify-center">
              <button class=" md:mt-0 w-56 h-14 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-full shadow-lg transition">
                CONNECT WITH US
              </button>
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
              Some FAQs For HubSpot Managed Services
            </h3>
            <p className="text-[15px] px-4 leading-6">
              A Few of top questions generally our clients asked us regarding
              HubSpot Managed Services
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
                      className={`md:text-[15px] text-sm capitalize md:font-normal font-medium mr-1 ${
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

export default Manage;
