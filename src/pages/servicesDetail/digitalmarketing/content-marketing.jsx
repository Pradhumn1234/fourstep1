import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { Footer } from "@/Component/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Nav from "@/Component/Header/Nav";
import Calltoaction from "@/Component/Web/Calltoaction";

const ListItem = ({ text }) => (
  <li className="flex ">
    <FontAwesomeIcon
      icon={faCircleCheck}
      className="   w-6 bg-orange-500 rounded-full  border-none h-6 mr-2"
    />
    {text}
  </li>
);

const Contentmarketing = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

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
      question: "Why is Content Marketing Important?",
      answer: `We provide a range of services, including Zoho consulting to optimize your business processes, HubSpot consulting to enhance your customer relationship management, and digital marketing strategies to boost your online presence.`,
    },
    {
      question: "What are the benefits of content marketing?",
      answer: `Our Zoho consulting services help you leverage Zoho’s powerful suite of tools for efficient customer relationship management, process automation, and data analytics, resulting in improved productivity and better decision-making.`,
    },
    {
      question: "How do measure content marketing success ",
      answer: `Back when you keep the claims low. Be first to learn insurancecan save you thousands each year and get notified`,
    },
    {
      question: "why does my business need a content marketing startegy?",
      answer: `In today’s digital landscape, having a strong online presence is crucial. Our digital marketing services encompass SEO, social media marketing, content creation, and more, tailored to your business goals, ensuring increased brand visibility and customer engagement`,
    },
    {
      question: "What ROI can content marketing deliver?",
      answer: `Our expertise spans Zoho and HubSpot consulting, coupled with comprehensive digital marketing knowledge. We offer an end-to-end solution that integrates technology and marketing for seamless business growth.`,
    },
    {
      question: "What kind of result can i expect from content marketing ",
      answer: `We believe in a personalized approach. Our team conducts a thorough analysis of your business requirements, goals, and challenges. Based on this assessment, we develop customized strategies and solutions that align with your unique needs. each year and get notified`,
    },
  ];

  return (
    <>
      <div className=" fixed w-full z-[19] top-0">
        <Nav />
      </div>
      <div className="container pt-16">
        {/* hero section */}
        <div
          className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[25rem] flex justify-center bg-cover object-cover text-white"
          style={{
            backgroundImage:
              'url("https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30549.jpg")',
          }}
        >
          <div data-aos=" fade-up" className="relative z-10 text-center px-4">
            <h1 className="text-md sm:text-xl md:text-2xl lg:text-3xl md:pt-16 pt-10 font-semibold mb-2">
              Content Marketing
            </h1>
            <p className="text-xs sm:text-lg md:text-xl">
              Establishes Trust, Loyalty, And Advocacy With Our Unique Content
              Strategy
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center text-center  md:pt-6 pt-2">
              <button className="bg-blue-500 h-10 sm:h-14 md:h-16 w-40   sm:w-52 md:w-56 text-white py-2 px-4 rounded">
                Request A Free SEO Audit
              </button>
            </div>
          </div>
        </div>
        {/* card 1 */}
        <div data-aos="fade-up" className="px-4 w-full sm:px-6 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-100 rounded-lg shadow-lg overflow-hidden">
            {/* Image First on Mobile, Second on Larger Screens */}
            <div data-aos="zoom-in" className="md:order-2 py-5">
              <img
                src="/image/132.png"
                alt="Card Image"
                className="w-full h-40 sm:h-48 md:h-64 object-cover"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h2 className="text-md sm:text-lg md:text-2xl font-semibold mb-2 md:mb-3">
                Content Marketing Agency In Delhi NCR
              </h2>
              <p className="text-sm sm:text-base md:text-sm py-5 text-gray-600">
                Four Steps Digital Consulting Pvt Ltd (4steps Marketing) is a
                Content Marketing agency in Delhi NCR. Whether you want to boost
                conversions, Educate your audience, or Form a community around
                your brand our Content marketing services will help you achieve
                your goals and maximize your ROI.
              </p>
              <button className="bg-blue-500 mt-4 h-8 sm:h-14 md:h-14 md:text-lg text-xs w-40 sm:w-52 md:w-56 text-white py-2 px-2 rounded">
                Get A Free Consulting
              </button>
            </div>
          </div>
        </div>

        {/*content marketing 1 */}
        <div data-aos="fade-up" className=" my-6">
          <div className=" md:px-10 md:py-12 px-5 ">
            <h2 className=" font-semibold md:mb-2  text-gray-400 text-sm md:text-lg">
              Content Markting SERVICES
            </h2>
            <h3 className=" md:text-3xl  font-semibold  text-sm">
              Content Marketing Services
            </h3>
            <h3 className=" py-4  text-xs md:text-lg">
              We offer local & national SEO services for small business for
              Google search engine. Our search engine optimization(SEO) services
              include
            </h3>
          </div>
          <div className="md:flex md:px-10 px-5">
            {/* Left Section (Heading and List) */}
            <div className="md:w-1/2 w-full h-auto md:pl-5 md:p-0 py-5 md:mt-0 mt-2">
              {/* Heading */}
              <div className="md:px-10  mb5">
                <h2 className="md:text-3xl  text-lg md:text-start text-center font-semibold md:mb-3 capitalize">
                  Content Strategy
                </h2>
              </div>

              {/* Image (visible first on mobile) */}
              <div data-aos="fade-up" className="md:hidden w-full  ">
                <img
                  data-aos="zoom-in"
                  src="https://media.istockphoto.com/id/1426249634/photo/3d-illustration-of-building-project.webp?a=1&b=1&s=612x612&w=0&k=20&c=Q7nLhvmtybIS_w-hxRJi12nV8_GTx-OaMFSmyVKdha4="
                  alt=""
                  className="w-full h-auto rounded-md  object-cover"
                />
              </div>

              {/* List Items */}
              {/* <div className="mt-10 flex justify-center   text-sm mx-auto md:px-10 px-0"> */}
              <div className=" flex justify-center text-center text-sm mx-auto md:px-10 px-0">
                <p>
                  An SEO audit is the process of analysis of website with the
                  help of SEO audit tools to make sure website is performing the
                  best it possibly can in search results. We offer SEO Audit
                  services that include SEO Content audit, On page SEO audit,
                  Technical SEO audit, Local SEO Audit and Backlinks audit.
                </p>
              </div>
            </div>

            {/* Right Section (Image for larger screens) */}
            <div
              data-aos="zoom-in"
              className="md:w-1/2 rounded-md md:pl-5 hidden md:block"
            >
              <img
                src="https://media.istockphoto.com/id/1426249634/photo/3d-illustration-of-building-project.webp?a=1&b=1&s=612x612&w=0&k=20&c=Q7nLhvmtybIS_w-hxRJi12nV8_GTx-OaMFSmyVKdha4="
                alt=""
                className="w-full h-auto rounded-md object-cover"
              />
            </div>
          </div>
        </div>
        {/* content marketing 2 */}
        <div className=" w-full sm:px-6  mx-auto  ">
          <div className="grid   grid-cols-1 place-items-center md:grid-cols-2 overflow-hidden">
            <div className="order-1 md:order-2  ">
              <h2 className="md:text-3xl my-4  text-xl md:text-start text-center font-semibold md:mb-3 capitalize">
                Blog & Article Writing
              </h2>
              <div className="order-3 md:order-3">
                <div className="w-full text-xs hidden md:block sm:text-base text-gray-600 mx-auto md:px-10 ">
                  <p>
                    In Local SEO, Basically you focus to improve your website
                    and also your Google Business profile(GBP) rankings and
                    visibility on Google search results and Google’s Map for
                    local keyword. Our Local SEO services include local keyword
                    search, local SEO content, website optimization, Google
                    business profile optimization, Local link building.
                  </p>
                </div>
              </div>
            </div>
            {/* data-aos="fade-right" */}
            <div className="order-2 md:order-1">
              <img
                src="https://media.istockphoto.com/id/1426249634/photo/3d-illustration-of-building-project.webp?a=1&b=1&s=612x612&w=0&k=20&c=Q7nLhvmtybIS_w-hxRJi12nV8_GTx-OaMFSmyVKdha4="
                alt="Card Image"
                className="w-full h-40 sm:h-48 md:h-64 object-cover"
              />
            </div>
            <div className="order-3 md:order-3 mt-4 sm:p-6">
              {/* w-full mx-auto md:px-10 px-0 */}
              <div className=" md:hidden w-full mx-auto md:px-10 px-0 block ">
                {/* <div className="w-full text-xs sm:text-base md:text-sm text-gray-600 mx-auto md:px-10 px-0"> */}
                <div className=" w-full mx-auto md:px-0 px-4">
                  <p>
                    In Local SEO, Basically you focus to improve your website
                    and also your Google Business profile(GBP) rankings and
                    visibility on Google search results and Google’s Map for
                    local keyword. Our Local SEO services include local keyword
                    search, local SEO content, website optimization, Google
                    business profile optimization, Local link building.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*content marketing 4 */}
        <div data-aos="fade-up" className="my-6">
          <div className="md:flex md:px-10 px-5">
            {/* Left Section (Heading and List) */}
            <div className="md:w-1/2 w-full h-auto md:pl-5 md:p-0 py-5 md:mt-0 mt-2">
              {/* Heading */}
              <div className="md:px-10  mb-5">
                <h2 className="md:text-3xl  text-xl md:text-start text-center font-semibold md:mb-3 capitalize">
                  WhitePaper & Case Studies
                </h2>
              </div>

              {/* Image (visible first on mobile) */}
              <div className="md:hidden w-full mb-5">
                <img
                  src="https://media.istockphoto.com/id/1426249634/photo/3d-illustration-of-building-project.webp?a=1&b=1&s=612x612&w=0&k=20&c=Q7nLhvmtybIS_w-hxRJi12nV8_GTx-OaMFSmyVKdha4="
                  alt=""
                  className="w-full h-auto rounded-md object-cover"
                />
              </div>

              {/* List Items */}
              <div className="w-full mx-auto md:px-10 px-0">
                <p>
                  An SEO audit is the process of analysis of website with the
                  help of SEO audit tools to make sure website is performing the
                  best it possibly can in search results. We offer SEO Audit
                  services that include SEO Content audit, On page SEO audit,
                  Technical SEO audit, Local SEO Audit and Backlinks audit.
                </p>
              </div>
            </div>

            {/* Right Section (Image for larger screens) */}
            <div
              // data-aos="fade-left"
              className="md:w-1/2 rounded-md md:pl-5 hidden md:block"
            >
              <img
                src="https://media.istockphoto.com/id/1426249634/photo/3d-illustration-of-building-project.webp?a=1&b=1&s=612x612&w=0&k=20&c=Q7nLhvmtybIS_w-hxRJi12nV8_GTx-OaMFSmyVKdha4="
                alt=""
                className="w-full h-auto rounded-md object-cover"
              />
            </div>
          </div>
        </div>
        {/* content marketing 5 */}
        <div
          data-aos="fade-up"
          className=" w-full sm:px-6 py-4 mx-auto    mt-10"
        >
          <div className="grid   grid-cols-1 place-items-center md:grid-cols-2 overflow-hidden">
            <div className="order-1 md:order-2  ">
              <h2 className="md:text-3xl my-4  text-xl md:text-start text-center font-semibold md:mb-3 capitalize">
                Infographics
              </h2>
              <div className="order-3 md:order-3  ">
                <div className="w-full text-xs hidden md:block sm:text-base  text-gray-600 mx-auto md:px-10 ">
                  <p>
                    In Local SEO, Basically you focus to improve your website
                    and also your Google Business profile(GBP) rankings and
                    visibility on Google search results and Google’s Map for
                    local keyword. Our Local SEO services include local keyword
                    search, local SEO content, website optimization, Google
                    business profile optimization, Local link building.
                  </p>
                </div>
              </div>
            </div>
            {/* data-aos="fade-right" */}
            <div className="order-2 md:order-1">
              <img
                src="https://media.istockphoto.com/id/1426249634/photo/3d-illustration-of-building-project.webp?a=1&b=1&s=612x612&w=0&k=20&c=Q7nLhvmtybIS_w-hxRJi12nV8_GTx-OaMFSmyVKdha4="
                alt="Card Image"
                className="w-full h-40 sm:h-48 md:h-64 object-cover"
              />
            </div>
            <div className="order-3 md:order-3 mt-4 sm:p-6">
              {/* w-full mx-auto md:px-10 px-0 */}
              <div className=" md:hidden w-full mx-auto md:px-10 px-0 block ">
                {/* <div className="w-full text-xs sm:text-base md:text-sm text-gray-600 mx-auto md:px-10 px-0"> */}
                <div className=" w-full mx-auto md:px-0 px-4">
                  <p>
                    In Local SEO, Basically you focus to improve your website
                    and also your Google Business profile(GBP) rankings and
                    visibility on Google search results and Google’s Map for
                    local keyword. Our Local SEO services include local keyword
                    search, local SEO content, website optimization, Google
                    business profile optimization, Local link building.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* content marketing 5 */}
        <div data-aos="fade-up" className=" my-6">
          <div className="md:flex md:px-10 px-5">
            {/* Left Section (Heading and List) */}
            <div className="md:w-1/2 w-full h-auto md:pl-5 md:p-0 py-5 md:mt-0 mt-2">
              {/* Heading */}
              <div className="md:px-10  mb5">
                <h2 className="md:text-3xl  text-lg md:text-start text-center font-semibold md:mb-3 capitalize">
                  Social Media Content
                </h2>
              </div>

              {/* Image (visible first on mobile) */}
              <div data-aos="fade-up" className="md:hidden w-full  ">
                <img
                  data-aos="zoom-in"
                  src="https://media.istockphoto.com/id/1426249634/photo/3d-illustration-of-building-project.webp?a=1&b=1&s=612x612&w=0&k=20&c=Q7nLhvmtybIS_w-hxRJi12nV8_GTx-OaMFSmyVKdha4="
                  alt=""
                  className="w-full h-auto rounded-md  object-cover"
                />
              </div>

              {/* List Items */}
              {/* <div className="mt-10 flex justify-center   text-sm mx-auto md:px-10 px-0"> */}
              <div className=" flex justify-center text-center text-sm mx-auto md:px-10 px-0">
                <p>
                  An SEO audit is the process of analysis of website with the
                  help of SEO audit tools to make sure website is performing the
                  best it possibly can in search results. We offer SEO Audit
                  services that include SEO Content audit, On page SEO audit,
                  Technical SEO audit, Local SEO Audit and Backlinks audit.
                </p>
              </div>
            </div>

            {/* Right Section (Image for larger screens) */}
            <div
              data-aos="zoom-in"
              className="md:w-1/2 rounded-md md:pl-5 hidden md:block"
            >
              <img
                src="https://media.istockphoto.com/id/1426249634/photo/3d-illustration-of-building-project.webp?a=1&b=1&s=612x612&w=0&k=20&c=Q7nLhvmtybIS_w-hxRJi12nV8_GTx-OaMFSmyVKdha4="
                alt=""
                className="w-full h-auto rounded-md object-cover"
              />
            </div>
          </div>
        </div>
        {/* content marketing 6 */}
        <div className=" w-full sm:px-6  mx-auto  ">
          <div className="grid   grid-cols-1 place-items-center md:grid-cols-2 overflow-hidden">
            <div className="order-1 md:order-2  ">
              <h2 className="md:text-3xl my-4  text-xl md:text-start text-center font-semibold md:mb-3 capitalize">
                Seo Content Writing
              </h2>
              <div className="order-3 md:order-3">
                <div className="w-full text-xs hidden md:block sm:text-base text-gray-600 mx-auto md:px-10 ">
                  <p>
                    In Local SEO, Basically you focus to improve your website
                    and also your Google Business profile(GBP) rankings and
                    visibility on Google search results and Google’s Map for
                    local keyword. Our Local SEO services include local keyword
                    search, local SEO content, website optimization, Google
                    business profile optimization, Local link building.
                  </p>
                </div>
              </div>
            </div>
            {/* data-aos="fade-right" */}
            <div className="order-2 md:order-1">
              <img
                src="https://media.istockphoto.com/id/1426249634/photo/3d-illustration-of-building-project.webp?a=1&b=1&s=612x612&w=0&k=20&c=Q7nLhvmtybIS_w-hxRJi12nV8_GTx-OaMFSmyVKdha4="
                alt="Card Image"
                className="w-full h-40 sm:h-48 md:h-64 object-cover"
              />
            </div>
            <div className="order-3 md:order-3 mt-4 sm:p-6">
              {/* w-full mx-auto md:px-10 px-0 */}
              <div className=" md:hidden w-full mx-auto md:px-10 px-0 block ">
                {/* <div className="w-full text-xs sm:text-base md:text-sm text-gray-600 mx-auto md:px-10 px-0"> */}
                <div className=" w-full mx-auto md:px-0 px-4">
                  <p>
                    In Local SEO, Basically you focus to improve your website
                    and also your Google Business profile(GBP) rankings and
                    visibility on Google search results and Google’s Map for
                    local keyword. Our Local SEO services include local keyword
                    search, local SEO content, website optimization, Google
                    business profile optimization, Local link building.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* why four steps digital service  */}
        <div
          className="h-auto w-full"
          style={{ background: "linear-gradient(to right, #a8c0ff, #3f2b96)" }}
        >
          <div className="px-10">
            <h1 className="md:text-3xl mx-auto text-xl text-white font-semibold py-5">
              Why Four Steps Digital For SEO Services?
            </h1>
            <p className="text-sm">
              Four Steps Digital Consulting Pvt Ltd (4steps Marketing) has
              helped many small business owners achieve their targeted ROI. We
              will take care of everything, from keyword research to making ad
              creatives and continuous monitoring & optimization.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 py-10 place-items-center md:grid-cols-2 xl:grid-cols-2 mt-2">
            {/* First Card */}
            <div className="flex justify-self-end rounded-lg mx-5 md:mx-0 md:w-96">
              <div className="text-white flex text-sm cursor-pointer ">
                <ul className="  pl-5">
                  <ListItem text="We focused only small medium-sized businesses and in short time we worked 50+ clients." />
                  <ListItem text="We Understand need and & Goals Of Small Business Owner" />
                  <ListItem text="We have a wide range of experience in different industries, which gives us a competitive advantage in any business." />
                </ul>
              </div>
            </div>
            {/* Second Card */}
            <div className="md:w-96 rounded-lg justify-self-start mx-5 md:mx-0  ">
              <div className="text-white flex text-sm cursor-pointer ">
                <ul className="pl-5">
                  <ListItem text="We integrate PPC with social media, CRO and content marketing" />
                  <ListItem text="We have industry expert team and also collaborate with best industry experts Freelancer" />
                  <ListItem text="We responds quickly to assist you in resolving any concerns you may be having. You can reach out to us by email, phone or chat." />
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* contact page  */}
        <div data-aos="fade-up">
          <Calltoaction />
        </div>
        {/*  faq section */}
        <div className="container mx-auto mt-3 py-7  grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* section 1 */}
          <div className="col-span-1 md:col-span-2 flex flex-col items-center justify-center text-center">
            <p className="text-[12px] text-zinc-500 leading-3 self-start pl-10 font-semibold">
              FAQ
            </p>
            <h3 className="my-3 md:text-2xl text-xl font-semibold uppercase">
              Some FAQs For Content Marketing
            </h3>
            <p className="text-[15px] leading-6">
              We produce high quality content for small businesses. Our Content
              marketing package include:
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
                      className={`md:text-[15px] text-sm capitalize  font-medium mr-1 ${
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

        {/* footer section */}
        <Footer />
      </div>
    </>
  );
};

export default Contentmarketing;
