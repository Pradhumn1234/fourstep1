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
      question: "What is HubSpot Consulting?",
      answer: `HubSpot consulting involves working with experienced professionals who provide expert guidance and strategic advice on utilizing the HubSpot platform effectively to achieve business objectives.`,
    },
    {
      question: "what services do HubSpot consultants offer?",
      answer: ` HubSpot consultants offer a range of services including platform setup, customization, optimization, lead generation strategies, marketing automation, sales enablement, and performance tracking.`,
    },
    {
      question: "Why do business need HubSpot consulting ?",
      answer: ` Businesses need HubSpot consulting to maximize their investment in the platform, develop effective marketing and sales strategies, streamline workflows, and drive growth.`,
    },
    {
      question: "What are the benifits of HubSpot training ?",
      answer: ` HubSpot training equips users with the knowledge and skills needed to navigate the platform efficiently, create compelling content, implement marketing automation, track performance metrics, and generate leads effectively.`,
    },
    {
      question: "How can benifits fr0m HUbSpot training ?",
      answer: `HubSpot training is beneficial for marketing professionals, sales teams, business owners, and anyone involved in digital marketing, lead generation, or customer relationship management.`,
    },
    {
      question: "What is HubSpot training Delivered ",
      answer: ` HubSpot training can be delivered through online courses, webinars, workshops, one-on-one sessions, and customized training programs tailored to the specific needs of the organization.`,
    },
  ];
  // card data

  const cardData = [
    {
      title: "Technical consulting",
      description:
        " Expert guidance on technical aspects of HubSpot implementation, including setup, customization, integrations, and troubleshooting.Tailored solutions to address complex technical challenges and optimize HubSpot configurations for optimal performance.",
      imgSrc: "/image/zo.png",
      borderColor: "border-green-500",
      hoverBgColor: "group-hover:bg-green-500",
      hoverTitleColor: "group-hover:text-green-500",
    },
    {
      title: "Training Consulting ",
      description:
        "Customized training programs designed to educate and empower teams on utilizing HubSpot effectively. Strategic guidance on developing training modules, curriculum design, and ongoing support to ensure skill development and proficiency.",
      imgSrc: "/image/zo.png",
      borderColor: "border-orange-500",
      hoverBgColor: "group-hover:bg-orange-500",
      hoverTitleColor: "group-hover:text-orange-500",
    },
    {
      title: "Marketing Training ",
      description:
        " Dynamic training sessions tailored to marketing professionals seeking to leverage HubSpot's marketing hub for campaign management, lead generation, and content optimization. Training modules cover email marketing, content creation, SEO strategies, social media management, and analytics.",
      imgSrc: "/image/zo.png",
      borderColor: "border-blue-500",
      hoverBgColor: "group-hover:bg-blue-500",
      hoverTitleColor: "group-hover:text-blue-500",
    },
    {
      title: "Service Training ",
      description:
        " Specialized training focused on HubSpot's service hub, equipping teams with the skills and knowledge to deliver exceptional customer service experiences. Training modules cover service hub setup, ticketing workflows, customer feedback management, and service automation.",
      imgSrc: "/image/zo.png",
      borderColor: "border-pink-500",
      hoverBgColor: "group-hover:bg-pink-500",
      hoverTitleColor: "group-hover:text-pink-500",
    },
    {
      title: "Sales Training  ",
      description:
        " Comprehensive training programs aimed at enhancing sales teams' effectiveness and productivity using HubSpot's sales hub. Topics include pipeline management, lead tracking, prospecting strategies, sales automation, and performance analytics.",
      borderColor: "border-red-500",
      imgSrc: "/image/zo.png",
      hoverBgColor: "group-hover:bg-red-500",
      hoverTitleColor: "group-hover:text-red-500",
    },
    {
      title: "Inbound Consulting",
      imgSrc: "/image/zo.png",
      description:
        "Strategic consulting services focused on developing inbound marketing strategies aligned with business objectives. In-depth analysis of target audience, competitive landscape, and industry trends to create personalized inbound marketing plans.",
      borderColor: "border-yellow-500",
      hoverBgColor: "group-hover:bg-yellow-500",
      hoverTitleColor: "group-hover:text-yellow-500",
    },
  ];
  return (
    <>
      {/* nav bar section  */}
      <div className=" sticky w-full z-[19] top-0">
        <Nav />
      </div>
      <div className="container pt-10 md:pt-0">
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
                HubSpot Training and Consulting Services
              </h2>
              <p className="text-sm py-2 text-orange-400">
                Elevate your HubSpot game with expert guidance and tailored
                solutions.
              </p>
              <p className="text-sm sm:text-base md:text-sm text-gray-600">
                Tailored HubSpot training and consulting services: Inform, plan,
                design, and develop strategies for optimal platform utilization
                and growth.
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
              Why we need training and consulting services?
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
                <h3 className="text-md font-semibold">
                  Maximize Platform Utilization
                </h3>
                <p className="text-xs">
                  Training and consulting services ensure businesses harness the
                  full potential of their tools and technologies, optimizing
                  productivity and efficiency.
                </p>
              </div>
            </div>
            <div className="flex items-start mb-1">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="w-5 h-5 mr-2 text-orange-500"
              />
              <div className="flex-1 py-1">
                <h3 className="text-md font-semibold">Stay Updated</h3>
                <p className="text-xs">
                  Technology evolves rapidly. Training and consulting services
                  keep businesses informed about the latest trends, features,
                  and best practices, ensuring they stay ahead of the curve.
                </p>
              </div>
            </div>
            <div className="flex items-start mb-2">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="w-5 h-5 text-orange-500 mr-2"
              />
              <div className="flex-1">
                <h3 className="text- md font-semibold">Customized Solutions</h3>
                <p className="text-xs">
                  Consultants tailor strategies to fit specific business needs,
                  providing personalized guidance and solutions that address
                  unique challenges and goals.
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
                  competitive Advantage{" "}
                </h3>
                <p className="text-xs">
                  Well-trained teams and strategic guidance give businesses a
                  competitive edge, enabling them to differentiate themselves in
                  the market and seize new opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* start a  lets connect section */}

        {/* HubSpot training   */}

        <h2 className="  text-center  text-lg px-4 md:px-0 py-5 md:text-3xl font-semibold">
          Our HubSpot Training and Consulting Services
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
                Empower your business with expert HubSpot training and
                <span className="text-orange-500">consulting services.</span>
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
        {/* inbond section */}
        <div className=" bg-gray-300">
          <h2 className="  text-center  text-lg px-4 md:px-0 py-6 md:text-3xl font-semibold">
            Our Zoho Consulting Plans
          </h2>
          <div className="  flex justify-center py-4 w-full ">
            <div className="grid gap-5 w-72  md:w-1/2 md:grid-cols-2  lg:grid-cols-2">
              <div
                data-aos="fade-up"
                data-aos-delay="50"
                className="bg-white rounded-lg shadow-lg p-3  transition-transform transform hover:scale-105 flex flex-col items-center justify-center text-center"
              >
                <h2 className="text-xl font-semibold mb-4">
                  Inbound Consulting
                </h2>
                <p className="text-gray-700 px-4 mb-6">
                  Get a dedicated expert who understands your business goals and
                  create a strategy to help you achieve them.
                </p>
                <a
                  href="#"
                  className="bg-orange-500 text-white px-4 py-2 rounded "
                >
                  Click Here
                </a>
              </div>

              <div
                data-aos="fade-up"
                className="bg-white rounded-lg shadow-lg p-3 transition-transform transform hover:scale-105 flex flex-col items-center text-center"
              >
                <h2 className="text-xl font-semibold mb-4">
                  Technical Consulting
                </h2>
                <p class="text-gray-700 px-4 mb-6">
                  Get a technical expert who helps you with API, custom design,
                  integration, and other technical issues.
                </p>
                <a
                  href="#"
                  className="bg-orange-500 text-white px-4 py-2 rounded "
                >
                  Click Here
                </a>
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
              Some FAQs For HubSpot Consulting and Training
            </h3>
            <p className="text-[15px] px-4 leading-6">
              A Few of top questions generally our clients asked us regarding
              HubSpot Consulting and Training
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
