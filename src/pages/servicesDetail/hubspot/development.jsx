// import React from "react";

// const Development = () => {
//   return (
//     <div>
//       <h1>welcome to hubspot development page</h1>
//     </div>
//   );
// };

// export default Development;

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import Testimonial from "@/Component/Testimonial/Testimonial";
import { Footer } from "@/Component/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Nav from "@/Component/Header/Nav";
import Calltoaction from "@/Component/Web/Calltoaction";

const Development = () => {
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
      question: "What are Hubspot services?",
      answer: `HubSpot development services involve the customization, integration, and optimization of HubSpot’s platform to meet specific business needs.`,
    },
    {
      question:
        " What types of customizations can HubSpot development services provide?",
      answer: `HubSpot development services can provide a range of customizations, including custom modules, workflows, reporting tools, and website integrations.`,
    },
    {
      question: "Why do businesses need HubSpot development services?",
      answer: `Businesses need HubSpot development services to tailor HubSpot’s platform to their unique requirements, enhance functionality, automate processes, and maximize ROI.`,
    },
    {
      question: "How can HubSpot development services help with integration?",
      answer: `HubSpot development services can integrate HubSpot with other tools and systems used by a business, such as CRM platforms, email marketing tools, or analytics platforms, to streamline workflows and data management.`,
    },
    {
      question:
        "What are the benefits of automating processes with HubSpot development services?",
      answer: `Automating processes with HubSpot development services can improve efficiency, enhance lead nurturing, reduce manual workloads, and increase the effectiveness of marketing and sales efforts.`,
    },
    {
      question:
        "What support and maintenance do HubSpot development services offer?",
      answer: `HubSpot development services offer ongoing support, troubleshooting, and maintenance to ensure that HubSpot implementations continue to meet business needs and perform optimally.`,
    },
  ];
  // card data

  const cardData = [
    {
      title: "HubSpot Website Development",
      description:
        "Craft visually stunning, responsive websites aligned with brand identity and optimized for user experience. Utilize HubSpot CMS to create dynamic, SEO-friendly websites that engage visitors and drive conversions.Implement custom templates, modules, and functionality to meet specific business requirements.",
      imgSrc: "/image/zo.png",
      borderColor: "border-green-500",

      hoverBgColor: "group-hover:bg-green-500",
      hoverTitleColor: "group-hover:text-green-500",
    },
    {
      title: "HubSpot Landing Page",
      description:
        "Build high-converting landing pages tailored to marketing campaigns and lead generation efforts. Optimize landing page design and content to maximize conversions and capture valuable lead information. Implement A/B testing and iterative improvements to enhance landing page performance over time.",
      imgSrc: "/image/zo.png",
      borderColor: "border-orange-500",

      hoverBgColor: "group-hover:bg-orange-500",
      hoverTitleColor: "group-hover:text-orange-500",
    },
    {
      title: "HubSpot Blog Page ",
      description:
        "Design and develop engaging blogs integrated seamlessly with the HubSpot platform. Create custom blog templates, optimize for search engines, and enhance reader engagement with interactive features. Leverage HubSpot's blogging tools for content creation, scheduling, and performance tracking.",
      imgSrc: "/image/zo.png",
      borderColor: "border-blue-500",
      hoverBgColor: "group-hover:bg-blue-500",
      hoverTitleColor: "group-hover:text-blue-500",
    },
    {
      title: "HubSpot API Developement & Integration ",
      description:
        "Develop custom solutions by leveraging HubSpot's robust API to integrate with external systems and tools. Enable seamless data synchronization between HubSpot and CRM platforms, e-commerce systems, and other third-party applications. Automate workflows, streamline processes, and enhance data visibility through tailored integrations.",
      imgSrc: "/image/zo.png",
      borderColor: "border-pink-500",

      hoverBgColor: "group-hover:bg-pink-500",
      hoverTitleColor: "group-hover:text-pink-500",
    },
    {
      title: "Hubspot Email & Newsletter",
      description:
        "Design visually appealing email templates that align with brand guidelines and drive engagement. Create personalized email campaigns tailored to different segments of the audience. Implement automated email workflows for lead nurturing, customer onboarding, and re-engagement.",
      imgSrc: "/image/zo.png",
      borderColor: "border-red-500",
      hoverBgColor: "group-hover:bg-red-500",
      hoverTitleColor: "group-hover:text-red-500",
    },
    {
      title: "HubSpot Website Maintenance",
      imgSrc: "/image/zo.png",
      description:
        "Provide ongoing maintenance and support to ensure HubSpot websites remain secure, up-to-date, and performing optimally. Conduct regular audits to identify and address issues related to performance, usability, and security. Implement content updates, feature enhancements, and bug fixes to continuously improve the website experience.",
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
                HubSpot Development Services
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
              Why We Need HubSpot Development Services?
            </h2>
            <p className=" text-xs mb-4">
              HubSpot Onboarding is crucial for your business success. It
              ensures efficient implementation, optimal platform utilization,
              faster time to value, customized strategies, and seamless
              integration.
            </p>
            <div className="flex items-start mb-1">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-orange-500 w-5 h-5 mr-2"
              />
              <div className="flex-1 ">
                <h3 className="text-md font-semibold">Customization</h3>
                <p className="text-xs">
                  Why we need HubSpot development services? HubSpot Onboarding
                  is crucial for your business success. It ensures efficient
                  implementation, optimal platform utilization, faster time to
                  value, customized strategies, and seamless integration.
                </p>
              </div>
            </div>
            <div className="flex items-start mb-1">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="w-5 h-5 mr-2 text-orange-500"
              />
              <div className="flex-1 py-1">
                <h3 className="text-md font-semibold">
                  Enhanced Functionality
                </h3>
                <p className="text-xs">
                  While HubSpot provides a wide range of features
                  out-of-the-box, there may be specific functionalities that a
                  business requires which are not readily available. HubSpot
                  development services can create custom solutions to fill these
                  gaps, such as custom modules, workflows, or reporting tools.
                </p>
              </div>
            </div>
            <div className="flex items-start mb-2">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="w-5 h-5 text-orange-500 mr-2"
              />
              <div className="flex-1">
                <h3 className="text- md font-semibold">
                  Data Management and Reporting
                </h3>
                <p className="text-xs">
                  Effective data management and reporting are essential for
                  making informed decisions and measuring the success of
                  marketing and sales efforts. HubSpot development services can
                  set up custom data structures, integrations, and reporting
                  dashboards tailored to a business’s specific metrics and KPIs
                </p>
              </div>
            </div>
            <div className="flex items-start mb-2">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="w-5 h-5 text-orange-500 mr-2"
              />
              <div className="flex-1">
                <h3 className="text-md font-semibold">
                  Support and Maintenance
                </h3>
                <p className="text-xs">
                  Implementing and maintaining HubSpot solutions requires
                  ongoing support to ensure they continue to meet business needs
                  and perform optimally. HubSpot development services can
                  provide technical support, troubleshooting, and ongoing
                  maintenance to keep HubSpot implementations running smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* start a  lets connect section */}

        {/* HubSpot Development  */}

        <h2 className="  text-center  text-lg px-4 md:px-0 py-5 md:text-3xl font-semibold">
          Our HubSpot Development Services
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
                Drive growth through expert HubSpot development services
                <span className="text-orange-500"> Your Business </span>
              </h2>
              <p className="md:py-4 py-2 text-xs md:text-sm text-gray-600">
                Maximize business potential with tailored HubSpot solutions.
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
              HubSpot Development Process
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
                  Information Gathering{" "}
                </h3>
                <p className="text-sm">
                  Understand client goals, target audience, and specific
                  requirements.Gather data on current systems, content, and
                  workflows.
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
                <h3 className="text-lg font-semibold ">Planning</h3>
                <p className="text-sm">
                  Define project scope, objectives, and deliverables.Create a
                  timeline and allocate resources accordingly.
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
                <h3 className="text-lg font-semibold ">Designing</h3>
                <p className="text-sm">
                  Effective team training is essential for maximizing the value
                  of the HubSpot platform. HubSpot provides comprehensive
                  training sessions tailored to different user roles and
                  proficiency levels within your organization
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
                <h3 className="text-lg font-semibold">Development</h3>
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
              Some FAQs For Development Services
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

export default Development;
