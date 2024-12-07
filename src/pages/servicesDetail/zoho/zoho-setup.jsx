import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import Testimonial from "@/Component/Testimonial/Testimonial";
import { Footer } from "@/Component/Footer/Footer";
import Calltoaction from "@/Component/Web/Calltoaction";
import Case from "@/Component/CaseStudies/Case";
import Nav from "@/Component/Header/Nav";

const Zohosetup = () => {
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
      name: "Zoho Projects",
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

  return (
    <>
      {/* Navbar section */}
      <div className=" fixed  z-20 w-full top-0">
        <Nav />
      </div>
      <div className="container pt-20">
        {/* hero section  */}
        <div className="px-1 w-full sm:px-6 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2  overflow-hidden">
            <div className="md:order-1 p-4 sm:p-6">
              <h2 className="text-md sm:text-xl md:block hidden   md:text-2xl font-semibold mb-2 md:mb-3">
                Zoho Setup and Implementation Services
              </h2>

              <p className="text-orange-400 text-sm">
                Transform your business with Zoho Setup & Implementation
                Services, revolutionizing workflows for heightened productivity
                and success!
              </p>
              <p className="text-sm sm:text-base md:text-sm mt-3 text-gray-600">
                Zoho Setup & Implementation Services streamline business
                processes, enhancing efficiency, collaboration, and growth with
                tailored software solutions and support.
              </p>
              <button className="bg-orange-500 mt-4 h-8 sm:h-14 md:h-14 md:text-lg text-xs w-24 sm:w-52 md:w-40 text-white py-2 px-2 rounded">
                Get in Touch
              </button>
            </div>
            <div className="flex flex-col py-4 justify-center items-center md:flex-row md:order-2 order-first">
              <h2 className="text-md md:hidden sm:text-xl md:text-2xl font-semibold mb-2 md:mb-3">
                Zoho Setup and Implementation Services
              </h2>
              <img
                src="/image/zoho.jpg"
                alt="Card Image"
                className="w-56 h-56 md:w-72 md:h-72 object-cover"
              />
            </div>
          </div>
        </div>
        {/* second  section */}
        <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-100  gap-6 p-6 ">
          <div className="flex justify-center items-center">
            <img
              src="/image/zoho.jpg"
              alt="Card Image"
              className="w-56 h-56 md:w-72 md:h-72 object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="md:text-2xl text-xl font-semibold  mb-1">
              Why We Need Zoho Setup And Implementation Services?
            </h2>
            <p className="mb-4">
              HubSpot onboarding is crucial for your business success. It
              ensures efficient implementation, optimal platform utilization,
              faster time to value, customized strategies, and seamless
              integration.
            </p>
            <div className="flex items-center mb-1">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-orange-500 w-5 h-5  mr-2"
              />
              <h3 className="text-lg font-semibold">Expertise</h3>
            </div>
            <p className="mb-1 text-sm">
              Zoho setup and implementation services are provided by
              professionals who possess deep knowledge and expertise in
              utilizing Zoho suite of applications effectively.
            </p>
            <div className="flex items-center mb-1">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="w-5 h-5  mr-2 text-orange-500"
              />
              <h3 className="text-lg font-semibold ">Customization</h3>
            </div>
            <p className="mb-1 text-sm">
              These services help businesses customize Zoho applications to suit
              their specific needs and ensure that the tools are tailored to
              enhance productivity and efficiency within the organization.
            </p>
            <div className="flex items-center mb-2">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="w-5 h-5  text-orange-500 mr-2"
              />
              <h3 className="text-lg font-semibold ">Optimal Configuration</h3>
            </div>
            <p className=" text-sm">
              Professionals ensure that Zoho applications are configured
              optimally to maximize their capabilities and benefits for the
              business. This includes setting up workflows, integrations, and
              automations to streamline processes.
            </p>
            <div className="flex items-center mb-2">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="w-5 h-5  text-orange-500 mr-2"
              />
              <h3 className="text-lg font-semibold ">Scalability</h3>
            </div>
            <p className=" text-sm">
              Professionals can set up Zoho applications in a scalable manner,
              ensuring that the systems can grow and adapt as the business
              expands. This future-proofs the organization’s technology
              infrastructure.
            </p>
          </div>
        </div>

        {/* additional section third */}
        <div>
          <Calltoaction />
        </div>
        {/* four section */}
        <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-200 gap-6 p-6">
          <div className="flex justify-center items-center">
            <img
              src="/image/zoho.jpg"
              alt="Card Image"
              className="w-56 h-56 md:w-72 md:h-72 object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="md:text-3xl text-xl font-semibold mb-1">
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
        {/* Zoho services what we provided */}
        <div className=" bg-gray-200 p-3 mt-10">
          <h2 className="md:text-3xl  text-lg font-semibold mb-2 text-center">
            We offer Zoho Services For Following Zoho Products
          </h2>
          <p className="text-gray-600 text-sm  py-1 md:text-lg text-center">
            Do you want to Streamline your business process using zoho products?
            if yes
          </p>
          <div className="">
            <div className="grid grid-cols-3 md:grid-cols-5 gap-6 md:p-10">
              {businesses.slice(0, displayCount).map((business, index) => (
                <div
                  key={index}
                  className="grid place-items-center bg-white shadow-md rounded-lg md:p-5 p-2 border border-gray-100"
                >
                  <img
                    src={business.img}
                    alt={business.alt}
                    className="w-full h-2/3 object-cover rounded-lg"
                  />
                  <p className="text-center text-xs md:text-sm">
                    {business.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center py-1 items-center">
            <button className="text-center my-3  bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105">
              Schedule a Discovery Meeting
            </button>
          </div>
        </div>

        {/* end connection section */}

        {/* project or casenstudies */}

        <div>
          <Case />
        </div>
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
            <p className="text-[15px] px-5 leading-6">
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

export default Zohosetup;
