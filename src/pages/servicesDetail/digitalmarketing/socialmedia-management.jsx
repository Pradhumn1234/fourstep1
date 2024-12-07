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

const Socialmedia = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

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
              Social Media Management
            </h1>
            <p className="text-xs sm:text-lg md:text-lg">
              Increase your brand presence on social media with our proven
              social media management strategy
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center   md:pt-6 pt-2">
              <button className="bg-blue-500 h-10 sm:h-14 md:h-14 w-40 md:text-md text-xs  sm:w-52 md:w-56 text-white py-2 px-3 rounded">
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
                Social Media Management Agency In Delhi NCR
              </h2>
              <p className="text-sm sm:text-base md:text-sm py-5 text-gray-600">
                Four Steps Digital Consulting Pvt Ltd (4steps Marketing) is a
                fast-growing Social Media Management agency in Delhi NCR. Our
                social media expert team will help you to increase your audience
                base, and brand recognition on social media. Our proven social
                media strategy will help to convert your audience into loyal
                customers. We offer social media management services for
                Facebook, Instagram, LinkedIn, and YouTube.
              </p>
              <button className="bg-blue-500 mt-4 h-8 sm:h-14 md:h-14 md:text-lg text-xs w-40 sm:w-52 md:w-56 text-white py-2 px-2 rounded">
                Get A Free Consulting
              </button>
            </div>
          </div>
        </div>

        {/* social media management components 1 */}
        <div data-aos="fade-up" className=" my-6">
          <div className=" md:px-10 md:py-12 px-5 ">
            <h2 className=" font-semibold md:mb-2  text-gray-400 text-sm md:text-lg">
              Social Media Management Services
            </h2>
            <h3 className=" md:text-3xl  font-semibold  text-sm">
              Social Media Management Services
            </h3>
            <h3 className=" py-4  text-xs md:text-lg">
              Our social media management services include social media audit,
              social media strategy, social media creatives design, community
              management, and Monthly reporting for the different social media
              platforms.
            </h3>
          </div>
          <div className="md:flex md:px-10 px-5">
            {/* Left Section (Heading and List) */}
            <div className="md:w-1/2 w-full h-auto md:pl-5 md:p-0 py-5 md:mt-0 mt-2">
              {/* Heading */}
              <div className="md:px-10  mb5">
                <h2 className="md:text-3xl  text-lg md:text-start text-center font-semibold md:mb-3 capitalize">
                  Social Media Audit
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
        {/* social media management components 2 */}
        <div className=" w-full sm:px-6  mx-auto  ">
          <div className="grid   grid-cols-1 place-items-center md:grid-cols-2 overflow-hidden">
            <div className="order-1 md:order-2  ">
              <h2 className="md:text-3xl my-4  text-xl md:text-start text-center font-semibold md:mb-3 capitalize">
                Post Creation
              </h2>
              <div className="order-3 md:order-3">
                <div className="w-full text-xs hidden md:block sm:text-base text-gray-600 mx-auto md:px-10 ">
                  <p>
                    In Local SEO, Basically you focus to improve your website
                    and also your Google Business profile(GBP) rankings and
                    visibility on Google search results and Google’s Map for
                    local keyword. Our Local SEO services include local keyword
                    search, local SEO content, website optimization, Google
                    business profile optimization, Local link building.​
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
                    business profile optimization, Local link building.​
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*social media management 3 */}
        <div data-aos="fade-up" className="my-6">
          <div className="md:flex md:px-10 px-5">
            {/* Left Section (Heading and List) */}
            <div className="md:w-1/2 w-full h-auto md:pl-5 md:p-0 py-5 md:mt-0 mt-2">
              {/* Heading */}
              <div className="md:px-10  mb-5">
                <h2 className="md:text-3xl  text-xl md:text-start text-center font-semibold md:mb-3 capitalize">
                  Community Management
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
        {/*social media management 4 */}
        <div
          data-aos="fade-up"
          className=" w-full sm:px-6 py-4 mx-auto    mt-10"
        >
          <div className="grid   grid-cols-1 place-items-center md:grid-cols-2 overflow-hidden">
            <div className="order-1 md:order-2  ">
              <h2 className="md:text-3xl my-4  text-xl md:text-start text-center font-semibold md:mb-3 capitalize">
                MOnthly Reporting
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
        <div data-aos="fade-up" className=" py-3">
          <Calltoaction />
        </div>

        {/* footer section */}
        <Footer />
      </div>
    </>
  );
};

export default Socialmedia;
