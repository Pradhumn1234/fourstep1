import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import Testimonial from "@/Component/Testimonial/Testimonial";
import { Footer } from "@/Component/Footer/Footer";
import Nav from "@/Component/Header/Nav";
import Image from "next/image";
import Calltoaction from "@/Component/Web/Calltoaction";

const Zohomanage = () => {
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
      question: "What is Zoho setup and implementation?",
      answer: `Zoho setup and implementation refer to the process of configuring and integrating Zoho’s suite of applications into a business’s workflow and systems. It involves customizing the applications to meet the specific needs of the organization and ensuring a smooth transition to using Zoho tools..`,
    },
    {
      question:
        "Why is Zoho setup and implementation important for businesses?",
      answer: `Zoho setup and implementation are important for businesses because they ensure that Zoho applications are configured optimally to enhance productivity, efficiency, and overall operational performance. It also facilitates seamless integration with existing systems and processes.`,
    },
    {
      question: "What services are included in Zoho setup and implementation?",
      answer: `Zoho setup and implementation services typically include initial consultation, assessment of business requirements, customization of Zoho applications, integration with existing systems, data migration, training for employees, ongoing support, and optimization of workflows.`,
    },
    {
      question: "How long does the Zoho setup and implementation process take?",
      answer: ` The duration of the Zoho setup and implementation process can vary depending on factors such as the complexity of the organization’s requirements, the number of applications being implemented, the size of the business, and the availability of resources. It can range from a few weeks to several months.`,
    },
    {
      question:
        "Can Zoho setup and implementation be tailored to specific business needs?",
      answer: `Yes, Zoho setup and implementation services are typically tailored to meet the specific needs and requirements of each business. This customization ensures that the Zoho applications align with the unique processes and workflows of the organization.`,
    },
    {
      question:
        "How can businesses measure the success of Zoho setup and implementation?",
      answer: `Businesses can measure the success of Zoho setup and implementation by evaluating factors such as increased efficiency in processes, improved collaboration among teams, better data management, higher user adoption rates, and ultimately, positive impacts on key business metrics such as revenue and customer satisfaction..`,
    },
  ];
  // card data
  const cardData = [
    {
      title: "Data Management",
      description:
        "We ensure efficient organization, storage, and utilization of your data within Zoho applications, optimizing data workflows and security measures.",
      imgSrc: "/image/zo.png",
      borderColor: "border-green-500",
      titleColor: "text-green-500",
    },
    {
      title: "Platform Audit & Optimisation",
      description:
        "Our experts conduct thorough audits of your Zoho platform, identifying areas for improvement and implementing optimization strategies to enhance performance and efficiency.",
      imgSrc: "/image/zo.png",
      borderColor: "border-orange-500",
      titleColor: "text-orange-500",
    },
    {
      title: "Dashboard and Reporting Updates",
      description:
        "We continuously update and customize dashboards and reports within Zoho applications to provide real-time insights and analytics for informed decision-making.",
      imgSrc: "/image/zo.png",
      borderColor: "border-blue-500",
      titleColor: "text-blue-500",
    },
    {
      title: "Ongoing Technical Support",
      description:
        "Our dedicated team provides prompt technical support to address any issues or concerns, ensuring smooth operation and minimal downtime for your Zoho applications.",
      imgSrc: "/image/zo.png",
      borderColor: "border-pink-500",
      titleColor: "text-pink-500",
    },
    {
      title: "Adminstration & Employee Training",
      description:
        "We offer training sessions for administrators and employees to enhance their proficiency in using Zoho applications, empowering them to maximize productivity and efficiency.",
      imgSrc: "/image/zo.png",
      borderColor: "border-red-500",
      titleColor: "text-red-500",
    },
  ];
  return (
    <>
      {/* Navbar section */}
      <div className=" fixed top-0 w-full z-20 ">
        <Nav />
      </div>
      <div className="container pt-20">
        {/* hero section  */}
        <div className="flex justify-center items-center w-full ">
          <div className="grid grid-cols-1 px-4 md:px-10 md:grid-cols-2 bg-gray-100 rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <h2 className="text-md sm:text-xl md:text-2xl  font-semibold mb-2 md:mb-3">
                Zoho Managed Services
              </h2>
              <p className=" text-sm py-2 text-orange-400">
                Transform your business with seamless Zoho Managed Services -
                your key to unlocking growth!
              </p>
              <p className="text-sm  sm:text-base md:text-sm text-gray-600">
                Four Steps Digital Consulting Pvt Ltd is a Custom website
                development company in Delhi NCR. Our custom website development
                services are designed to bring your vision to life. Whether you
                require a dynamic web application, an e-commerce platform, or a
                content-rich website, we have the expertise to deliver
                exceptional results. We work on PHP, React, Node.Js etc
              </p>

              <button className="bg-orange-500 mt-4 h-9 sm:h-11 md:h-13 lg:h-14 text-xs sm:text-sm md:text-base lg:text-lg w-28 sm:w-36 md:w-44 lg:w-52 text-white py-2 px-4 rounded">
                Get In Touch
              </button>
            </div>
            <div className="py-5">
              <Image
                height={100}
                width={100}
                src="/image/132.png"
                alt="Card Image"
                className="w-full h-40 sm:h-48 md:h-64 object-cover"
              />
            </div>
          </div>
        </div>
        {/* second  section */}

        <div className="grid grid-cols-1 gap-8 p-8 bg-gray-50 md:grid-cols-2 md:p-12 lg:p-16 rounded-lg shadow-lg">
          <div className="flex justify-center items-center">
            <Image
              height={100}
              width={100}
              src="/image/zoho.jpg"
              alt="Card Image"
              className="w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="flex flex-col justify-center space-y-">
            <h2 className="text-xl md:text-xl lg:text-2xl font-semibold text-gray-800 mb-2">
              Why We Need Zoho Managed Services?
            </h2>
            <p className="text-gray-600 leading-relaxed md:text-lg">
              Businesses need Zoho Managed Services for ongoing support,
              optimization, and maintenance of Zoho applications to ensure
              seamless operations and efficiency.
            </p>
            <div className="space-y-">
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-orange-500 w-5 h-5 mr-2"
                />
                <h3 className="text-lg font-semibold text-gray-700">
                  Continuous Support
                </h3>
              </div>
              <p className="text-sm text-gray-600 pl-8">
                Zoho Managed Services offer ongoing assistance to address any
                issues or concerns promptly, ensuring uninterrupted operations.
              </p>

              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-orange-500 w-5 h-5 mr-2"
                />
                <h3 className="text-lg font-semibold text-gray-700">
                  Expert Guidance
                </h3>
              </div>
              <p className="text-sm text-gray-600 pl-7">
                Experienced professionals provide strategic advice and best
                practices for optimizing Zoho applications to meet business
                objectives.
              </p>

              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-orange-500 w-5 h-5 mr-2"
                />
                <h3 className="text-lg font-semibold text-gray-700">
                  Proactive Maintenance
                </h3>
              </div>
              <p className="text-sm text-gray-600 pl-8">
                Regular monitoring and updates help prevent potential issues and
                ensure Zoho applications are running smoothly.
              </p>

              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-orange-500 w-5 h-5 mr-2"
                />
                <h3 className="text-lg font-semibold text-gray-700">
                  Focus on Core Activities
                </h3>
              </div>
              <p className="text-sm text-gray-600 pl-8">
                Outsourcing management of Zoho applications allows businesses to
                focus on their core activities and strategic initiatives.
              </p>
            </div>
          </div>
        </div>

        {/* zoho service  */}
        <h2 className=" md:text-3xl text-xl py-10  text-center font-semibold">
          Our Zoho Managed Services
        </h2>

        <div className="grid grid-cols-1 md:w-4/5 w-full md:grid-cols-3 sm:grid-cols-2 md:px-3 px-10 mx-auto gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="relative  shadow-lg flex flex-col justify-between transition-shadow duration-300 ease-in-out hover:shadow-[-10px_0_15px_0_rgba(0,0,0,0.2)]"
            >
              <div className="px-4">
                <img
                  aria-hidden="true"
                  alt={card.title}
                  src={card.imgSrc}
                  className="mx-auto mt-3"
                />
                <h3
                  className={`text-lg font-semibold mt-2 transition-colors duration-300 ease-in-out group-hover:${card.titleColor}`}
                >
                  {card.title}
                </h3>

                <p className="mt-2 text-sm">{card.description}</p>
              </div>
              <div className={`border-b-4 ${card.borderColor} mt-4`}></div>
            </div>
          ))}
        </div>

        {/* zoho service end*/}
        {/* start a  lets connect section */}

        {/*  call to action section */}
        <div>
          <Calltoaction />
        </div>
        {/* Third section */}
        <div className="md:max-w-6xl  my-10 mx-auto p-4  shadow-md rounded-lg relative overflow-hidden">
          <div className="absolute  inset-y-0 left-0  w-1 bg-orange-500"></div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 p-5 items-center">
            <div>
              <h2 className="text-xl py-2 md:text-3xl font-semibold text-gray-800">
                Expert management ensures seamless operation, optimization, and
                growth
                <span className="text-orange-500"> forZoho</span>
              </h2>
              <p className="py-2 text-sm md:text-base text-gray-600">
                Empower your business with Zoho Managed Services – harnessing
                expertise for effortless marketing mastery and unstoppable
                growth.
              </p>
            </div>
            <div className="flex justify-center">
              <button className="mt-6 md:mt-0 w-56 h-14 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-full shadow-lg transition">
                CONNECT WITH US
              </button>
            </div>
          </div>
        </div>

        {/* Zoho services what we provided */}

        {/* here case study section or project section */}
        {/*  start faq section*/}
        <div className="container mx-auto mt-3 py-7  grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* section 1 */}
          <div className="col-span-1 md:col-span-2 flex flex-col items-center justify-center text-center">
            <p className="text-[12px] text-zinc-500 leading-3 self-start pl-10 font-semibold">
              FAQ
            </p>
            <h3 className="my-3 md:text-2xl text-xl font-semibold uppercase">
              Some FAQs For Zoho Setup and Implementation
            </h3>
            <p className="text-[15px] px-4 leading-6">
              A Few of top questions generally our clients asked us regarding
              Zoho Setup and Implementation
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

export default Zohomanage;
