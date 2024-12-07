import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import Testimonial from "@/Component/Testimonial/Testimonial";
import { Footer } from "@/Component/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Nav from "@/Component/Header/Nav";
import Image from "next/image";
import Calltoaction from "@/Component/Web/Calltoaction";

const Zohotraining = () => {
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
      question: "What is Zoho Consulting and Training?",
      answer: `Zoho Consulting and Training refer to services aimed at guiding businesses in effectively utilizing Zoho applications through expert advice and skill developmen`,
    },
    {
      question: "Why would a business need Zoho Consulting and Training?",
      answer: `Businesses may require Zoho Consulting and Training to optimize their use of Zoho applications, improve efficiency, and maximize return on investment.`,
    },
    {
      question:
        "What types of services are typically offered in Zoho Consulting and Training?",
      answer: `Services may include technical consulting, training sessions, customization assistance, workflow optimization, and strategic planning tailored to Zoho applications.`,
    },
    {
      question: "How can Zoho Consulting and Training benefit my business?",
      answer: `These services can help your business streamline processes, enhance productivity, improve customer engagement, and ultimately drive growth and profitability`,
    },
    {
      question:
        "Is Zoho Consulting and Training suitable for businesses of all sizes?",
      answer: `Yes, Zoho Consulting and Training can be customized to meet the needs of businesses ranging from small startups to large enterprises.`,
    },
    {
      question:
        "How long does it take to see results from Zoho Consulting and Training?",
      answer: `The timeline for seeing results varies depending on factors such as the complexity of your business processes, the extent of customization needed, and the proficiency of your team.`,
    },
  ];
  // card data

  const cardData = [
    {
      title: "Technical consulting",
      description:
        "Expert guidance in configuring and customizing Zoho applications to align with your technical requirements, ensuring optimal performance and integration.",
      imgSrc: "/image/zo.png",
      borderColor: "border-green-500",

      hoverBgColor: "group-hover:bg-green-500",
      hoverTitleColor: "group-hover:text-green-500", // Added hoverTitleColor
    },
    {
      title: "Training Consulting",
      description:
        "Tailored training programs designed to equip your team with the knowledge and skills required to leverage Zoho effectively, enhancing productivity and proficiency.",
      imgSrc: "/image/zo.png",
      borderColor: "border-orange-500",

      hoverBgColor: "group-hover:bg-orange-500",
      hoverTitleColor: "group-hover:text-orange-500",
    },
    {
      title: "Service Training",
      description:
        "Specialized training focused on service-oriented Zoho applications, enabling your team to deliver exceptional customer service and support.",
      imgSrc: "/image/zo.png",
      borderColor: "border-blue-500",

      hoverBgColor: "group-hover:bg-blue-500",
      hoverTitleColor: "group-hover:text-blue-500",
    },
    {
      title: "Sales Training",
      description:
        "Targeted training sessions to enhance sales team performance, covering strategies, techniques, and tools within Zoho for improved sales outcomes.",
      imgSrc: "/image/zo.png",
      borderColor: "border-pink-500",

      hoverBgColor: "group-hover:bg-pink-500",
      hoverTitleColor: "group-hover:text-pink-500",
    },
    {
      title: "Marketing Training",
      description:
        "Training programs tailored for marketing teams, emphasizing Zoho's marketing automation tools and strategies to drive successful campaigns and lead generation.",
      imgSrc: "/image/zo.png",
      borderColor: "border-red-500",
      hoverBgColor: "group-hover:bg-red-500",
      hoverTitleColor: "group-hover:text-red-500",
    },
    {
      title: "Inbound Consulting ",
      imgSrc: "/image/zo.png",
      description:
        "Consulting services to develop and implement inbound marketing strategies using Zoho, optimizing customer engagement and conversion rates.",
      borderColor: "border-yellow-500",
      hoverBgColor: "group-hover:bg-yellow-500",
      hoverTitleColor: "group-hover:text-yellow-500",
    },
  ];
  return (
    <>
      {/* navbar */}
      <div className=" fixed  z-20 w-full top-0">
        <Nav />
      </div>
      <div className="container pt-20">
        {/* hero section  */}
        <div className="flex justify-center items-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 p-10 bg-gray-100 rounded-lg shadow-lg overflow-hidden">
            {/* Image Div */}
            <div className="order-1 md:order-2 py-5">
              <Image
                height={400}
                width={400}
                src="/image/132.png"
                alt="Card Image"
                className="w-full h-40 sm:h-48 md:h-64 object-cover"
              />
            </div>

            {/* Content Div */}
            <div className="order-2 md:order-1  sm:p-6">
              <h2 className="text-md sm:text-xl md:text-3xl font-semibold mb-2 md:mb-3">
                Zoho Training and Consulting Services
              </h2>
              <p className="text-sm py-2 text-orange-400">
                Elevate your Zoho game with expert guidance and tailored
                solutions.
              </p>
              <p className="text-sm sm:text-base md:text-sm text-gray-600">
                Tailored Zoho training and consulting services: Inform, plan,
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

        <div className="grid grid-cols-1 mt-5 gap-6 p-6 bg-gray-200 md:grid-cols-2 rounded-lg shadow-lg">
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
            <h2 className="text-xl font-semibold mb-2 md:text-2xl">
              Why we need Zoho training and consulting services?
            </h2>
            <p className="mb-4">
              Zoho Training & Consulting Services optimize efficiency, enhance
              productivity, ensure proper integration, and empower users for
              effective utilization.
            </p>

            <div className="flex items-center mb-2">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="w-5 h-5 mr-2 text-orange-500"
              />
              <h3 className="text-lg font-semibold">
                Maximize Platform Utilization
              </h3>
            </div>
            <p className="text-sm mb-3 pl-7">
              Zoho Training and Consulting Services ensure users understand the
              platform’s full potential, optimizing workflow efficiency.
            </p>

            <div className="flex items-center mb-2">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="w-5 h-5 mr-2 text-orange-500"
              />
              <h3 className="text-lg font-semibold">Customized Solutions</h3>
            </div>
            <p className="text-sm mb-3 pl-7">
              Tailored training addresses specific business needs, enabling
              users to leverage Zoho’s features effectively for their unique
              requirements.
            </p>

            <div className="flex items-center mb-2">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="w-5 h-5 mr-2 text-orange-500"
              />
              <h3 className="text-lg font-semibold">Workflow Integration</h3>
            </div>
            <p className="text-sm mb-3 pl-7">
              Consulting services help integrate Zoho seamlessly into existing
              workflows, ensuring smooth transition and minimal disruption.
            </p>

            <div className="flex items-center mb-2">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="w-5 h-5 mr-2 text-orange-500"
              />
              <h3 className="text-lg font-semibold">Adaptability to Updates</h3>
            </div>
            <p className="text-sm pl-7">
              Regular training ensures users stay updated with the latest
              features and updates in Zoho, maximizing the platform’s
              effectiveness.
            </p>
          </div>
        </div>

        {/* start a  lets connect section */}

        {/* zoho training  */}

        <h2 className="  text-center  text-lg px-4 md:px-0 py-6 md:text-3xl font-semibold">
          Our Zoho Training and Consulting Services
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
              <div className="flex my-7 justify-center">
                <button
                  className={`w-40 h-12 text-black border font-medium py-2 px-4 rounded-md hover:text-white ${card.hoverBgColor}`}
                  style={{ transition: "background-color 0.3s ease-in-out" }}
                >
                  Read More!
                </button>
              </div>
              <div className={`border-b-4 ${card.borderColor} mt-4`}></div>
            </div>
          ))}
        </div>
        {/* zoho service end*/}
        {/* <div className="md:max-w-6xl w-10/12  mx-auto p-6  my-6   shadow-md rounded-lg relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-1 bg-orange-500"></div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6  px-4  items-center">
            <div>
              <h2 className="text-xl md:py-6 md:text-3xl font-semibold text-gray-800">
                Empower your business with expert Zoho training and consulting
                services.
                <span className="text-orange-500"> forZoho</span>
              </h2>
              <p className="md:py-4 py-2 text-sm md:text-base text-gray-600">
                Transform your business through tailored guidance and training
                to fully leverage the capabilities of Zoho for growth.
              </p>
            </div>
            <div className="flex justify-center">
              <button class=" md:mt-0 w-56 h-14 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-full shadow-lg transition">
                CONNECT WITH US
              </button>
            </div>
          </div>
        </div> */}

        {/* call to action  */}
        <div>
          <Calltoaction />
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

        {/* here case study section or project section */}

        {/*  start faq section*/}
        <div className="container mx-auto mt-3 py-7  grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* section 1 */}
          <div className="col-span-1 md:col-span-2 flex flex-col items-center justify-center text-center">
            <p className="text-[12px] text-zinc-500 leading-3 md:self-start pl-10 font-semibold">
              FAQ
            </p>
            <h3 className="my-3 md:text-2xl px-4 md:px-0 text-xl font-semibold uppercase">
              Some FAQs For Zoho Consulting and Training
            </h3>
            <p className="text-[15px] px-4 leading-6">
              A Few of top questions generally our clients asked us regarding
              Zoho Consulting and Training
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

export default Zohotraining;
