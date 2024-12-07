import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { Footer } from "@/Component/Footer/Footer";
import Industry from "@/Component/Industry/Industry";
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

const Seo = () => {
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
      question: "What is Search Engine optimization(SEO)?",
      answer: `Search engine optimization is the process of optimizing and improving a website to increase its visibility when people search for products or services on search engines like Google search.`,
    },
    {
      question: "How Does SEO work?",
      answer: `Search engines like Google, and Bing use bots to crawl all website pages, downloading and storing that information into a collection known as an index. This index is like a library and the search engine acts like a librarian. So when someone searches for something, The search engine pulls and displays relevant information from the search query and shows users content related to what they were looking for. Search engine algorithms analyze webpages in the index to determine the order those pages should be displayed on the SERP`,
    },
    {
      question: "Why is SEO Important for my business??",
      answer: `SEO makes your website or business visible on Search engines. But it also will provide several other benefits to your business.

`,
    },
    {
      question: "How Much Does SEO Cost??",
      answer: `The actual SEO cost depends on the size of your business, your website traffic, and your overall needs. Generally, small business SEO agencies charge between $100 a month and $10,00 a month depending on the scope of the project. Most small businesses pay between $200 a month and $800 a month.`,
    },
    {
      question: "Should I Hire an SEO Agency??",
      answer: `If you have free time on your hands and not a whole lot to do, you can certainly do SEO services all by yourself. But generally, for small business owners, it is very difficult to manage SEO work properly yourself. because they are busy to manage their core business work.`,
    },
    {
      question: "What makes us a good small business SEO agency?",
      answer: `
We have a young and expert team. Our single-focused mission is to provide the highest level of customer service in the industry at the most affordable price.`,
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
            <h1 className="text-md sm:text-lg md:text-xl lg:text-3xl md:pt-16 pt-10 font-semibold mb-2">
              Search Engine Optimization(SEO)
            </h1>
            <p className="text-xs sm:text-lg md:text-xl">
              Improve your website ranking on Google Search and drive website
              traffic with an effective SEO strategy.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center ext-center  md:pt-6 pt-2">
              <button className="bg-blue-500 h-10 sm:h-14 md:h-16 w-40 md:text-md text-xs  sm:w-52 md:w-56 text-white py-2 px-4 rounded">
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
                SEO Agency In Delhi NCR
              </h2>
              <p className="text-sm sm:text-base md:text-sm py-5 text-gray-600">
                Whether you want to increase brand awareness on search engine,
                website traffic or lead generation organically, You need to rank
                your website on first page of Google search result. For that you
                need a SEO agency that optimized your website on google search
                engine. Four Steps Digital Consulting Pvt Ltd (4steps Marketing)
                is one of the best Search Engine Optimization(SEO) agency in
                Delhi NCR. Our SEO expert team will help to rank your website on
                Google search result page.
              </p>
              <button className="bg-blue-500 mt-4 h-8 sm:h-14 md:h-14 md:text-lg text-xs w-40 sm:w-52 md:w-56 text-white py-2 px-2 rounded">
                Get A Free Consulting
              </button>
            </div>
          </div>
        </div>

        {/* ppc components 1 */}
        <div data-aos="fade-up" className=" my-6">
          <div className=" md:px-10 md:py-12 px-5 ">
            <h2 className=" font-semibold md:mb-2  text-gray-400 text-sm md:text-lg">
              SEO SERVICES
            </h2>
            <h3 className=" md:text-3xl  font-semibold  text-sm">
              {" "}
              SEO SERVICES
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
                  SEO Audit
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
                  Google Ad Format include – Google search ad/Paid Search Ad,
                  Google Display Ad/Banner Ad, YouTube Ad/Video Ad, Google
                  Shopping Ad and Google App Ad
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
        {/* Seo components 2 */}
        <div className=" w-full sm:px-6  mx-auto  ">
          <div className="grid   grid-cols-1 place-items-center md:grid-cols-2 overflow-hidden">
            <div className="order-1 md:order-2  ">
              <h2 className="md:text-3xl my-4  text-xl md:text-start text-center font-semibold md:mb-3 capitalize">
                Local SEO
              </h2>
              <div className="order-3 md:order-3">
                <div className="w-full text-xs hidden md:block sm:text-base text-gray-600 mx-auto md:px-10 ">
                  <p>
                    In Local SEO, Basically you focus to improve your website
                    and also your Google Business profile(GBP) rankings and
                    visibility on Google search results and Google’s Map for
                    local keyword. Our Local SEO services include local keyword
                    search, local SEO content, website optimization, Google
                    business profile optimization, Local link building.Google Ad
                    Format include – Google search ad/Paid Search Ad, Google
                    Display Ad/Banner Ad, YouTube Ad/Video Ad, Google Shopping
                    Ad and Google App Ad
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
                    business profile optimization, Local link building.Google Ad
                    Format include – Google search ad/Paid Search Ad, Google
                    Display Ad/Banner Ad, YouTube Ad/Video Ad, Google Shopping
                    Ad and Google App Ad
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Seo components 3 */}
        <div data-aos="fade-up" className="my-6">
          <div className="md:flex md:px-10 px-5">
            {/* Left Section (Heading and List) */}
            <div className="md:w-1/2 w-full h-auto md:pl-5 md:p-0 py-5 md:mt-0 mt-2">
              {/* Heading */}
              <div className="md:px-10  mb-5">
                <h2 className="md:text-3xl  text-xl md:text-start text-center font-semibold md:mb-3 capitalize">
                  Small Business SEO
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
                  Small business SEO is the process of improving your small
                  business’ website ranking and visibility on Google search
                  result page, so you website are visible on google search page
                  when any one search something relate to your products &
                  services. Our small business SEO include keyword research, On
                  page SEO, Technical SEO, SEO Content creation, Quality link
                  building and Measuring & reporting.
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
        {/* realestate components 4 */}
        <div
          data-aos="fade-up"
          className=" w-full sm:px-6 py-4 mx-auto    mt-10"
        >
          <div className="grid   grid-cols-1 place-items-center md:grid-cols-2 overflow-hidden">
            <div className="order-1 md:order-2  ">
              <h2 className="md:text-3xl my-4  text-xl md:text-start text-center font-semibold md:mb-3 capitalize">
                Ecommerce Seo
              </h2>
              <div className="order-3 md:order-3  ">
                <div className="w-full text-xs hidden md:block sm:text-base  text-gray-600 mx-auto md:px-10 ">
                  <p>
                    Ecommerce SEO is the process of improving your online store
                    more visible in the search engine results pages (SERPs).
                    When anyone search related to your products that you sell.
                    Our ecommerce SEO include Ecommerce Keyword Research,
                    Ecommerce website architecture, Ecommerce on page SEO,
                    Technical SEO, Ecommerce content marketing and ecommerce
                    link building
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
                    Ecommerce SEO is the process of improving your online store
                    more visible in the search engine results pages (SERPs).
                    When anyone search related to your products that you sell.
                    Our ecommerce SEO include Ecommerce Keyword Research,
                    Ecommerce website architecture, Ecommerce on page SEO,
                    Technical SEO, Ecommerce content marketing and ecommerce
                    link building
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ppc components 1 */}
        <div data-aos="fade-up" className=" my-6">
          <div className="md:flex md:px-10 px-5">
            {/* Left Section (Heading and List) */}
            <div className="md:w-1/2 w-full h-auto md:pl-5 md:p-0 py-5 md:mt-0 mt-2">
              {/* Heading */}
              <div className="md:px-10  mb5">
                <h2 className="md:text-3xl  text-lg md:text-start text-center font-semibold md:mb-3 capitalize">
                  Link Building
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
                  Link building is the process of getting links to your website
                  from other websites. In term of SEO, these links are called
                  backlinks. Backlinks improve your website authority that help
                  to improve your ranking in the search engine results pages
                  (SERPs). Our link building services include Keyword
                  Analysis/Strategy, Competitor Analysis, Backlink audit, Guest
                  posts, PPT link building, Image link building and Broken ink
                  building.
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
        {/* Seo components 2 */}
        <div className=" w-full sm:px-6  mx-auto  ">
          <div className="grid   grid-cols-1 place-items-center md:grid-cols-2 overflow-hidden">
            <div className="order-1 md:order-2  ">
              <h2 className="md:text-3xl my-4  text-xl md:text-start text-center font-semibold md:mb-3 capitalize">
                APP Store Optimization(ASO)
              </h2>
              <div className="order-3 md:order-3">
                <div className="w-full text-xs hidden md:block sm:text-base text-gray-600 mx-auto md:px-10 ">
                  <p>
                    App store optimization is the process of improving ranking &
                    visibility of mobile apps in app store search engine such as
                    Google Play or Apple App Store. More visibility of your app
                    in app store means get more potential customers. Our App
                    store optimization services include keyword optimization,
                    conversion rate optimization, ASO content, ASO analysis and
                    ASO support.
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
                    App store optimization is the process of improving ranking &
                    visibility of mobile apps in app store search engine such as
                    Google Play or Apple App Store. More visibility of your app
                    in app store means get more potential customers. Our App
                    store optimization services include keyword optimization,
                    conversion rate optimization, ASO content, ASO analysis and
                    ASO support.
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
        <div data-aos="fade-up" className="  py-3">
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
              Some FAQs For Seo Services
            </h3>
            <p className="text-[15px] leading-6">
              A Few of top questions generally our clients asked us regarding
              SEO Services
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

export default Seo;
