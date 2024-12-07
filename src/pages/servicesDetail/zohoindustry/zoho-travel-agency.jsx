// import React from "react";

// const Travelagency = () => {
//   return (
//     <div>
//       <h1>this is our travel agency services in india</h1>
//     </div>
//   );
// };

// export default Travelagency;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

// import TechUse from "@/Component/Web/TechUse";
import { Footer } from "@/Component/Footer/Footer";
import Testimonial from "@/Component/Testimonial/Testimonial";
import Nav from "@/Component/Header/Nav";

const Travelagency = () => {
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
      question: "How does Zoho Real Estate CRM handle lead management?",
      answer: `Zoho Real Estate CRM empowers users to efficiently capture, categorize, and nurture leads. The system provides tools to track lead interactions, ensuring a systematic and personalized approach to lead management.`,
    },
    {
      question:
        "What is Zoho Real Estate CRM, and how can it benefit agents and brokers?",
      answer: `Zoho Real Estate CRM is a comprehensive platform tailored for agents and brokers, offering a unified solution for lead management, property tracking, visits, offers, and sales cycle management. It streamlines workflows, enhances organization, and boosts overall efficiency.  `,
    },
    {
      question:
        "Can Zoho Real Estate CRM manage both residential and commercial properties?",
      answer: `Yes, Zoho Real Estate CRM is designed to handle both residential and commercial property portfolios. It allows users to seamlessly organize and track properties of various types.`,
    },
    {
      question: "How does the CRM facilitate property visit scheduling?",
      answer: `Zoho Real Estate CRM simplifies property visit management by providing scheduling tools. Agents and brokers can easily set up and manage property visits, keeping track of appointments and client interactions.`,
    },
    {
      question: "Does Zoho Real Estate CRM support offer management?",
      answer: `Yes, the platform includes features for managing and tracking offers. Users can input, monitor, and update offers within the CRM, ensuring a centralized and organized approach to the negotiation process.`,
    },
    {
      question:
        "How does Zoho Real Estate CRM assist in sales cycle management?",
      answer: `Zoho Real Estate CRM offers a comprehensive sales cycle management feature, allowing users to monitor and progress through each stage of the sales process. It helps agents and brokers stay organized and proactive in closing deals.`,
    },
    {
      question:
        "Can Zoho Real Estate CRM be customized to fit specific business needs?",
      answer: `Yes, Zoho Real Estate CRM is highly customizable. Users can tailor the platform to match their specific business requirements, ensuring that it aligns perfectly with their workflows and preferences.`,
    },
  ];

  return (
    <>
      {/* hero section */}
      <div className=" fixed w-full z-[19] top-0">
        <Nav />
      </div>
      <div className="container pt-16">
        <div
          className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[25rem] flex justify-center bg-cover object-cover text-white"
          style={{
            backgroundImage:
              'url("https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30549.jpg")',
          }}
        >
          <div className="relative z-10 text-center px-4">
            <h1 className="text-md sm:text-xl md:text-2xl lg:text-3xl md:pt-16 pt-10 font-semibold mb-2">
              Zoho Travel Agency CRM
            </h1>
            <p className="text-xs sm:text-lg md:text-lg">
              Unlock Seamless Tour Management for Travel Agency. Simplify Your
              Operations with Our Comprehensive CRM Solution.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center text-center  md:pt-6 pt-2">
              <button className="bg-blue-500 h-10 sm:h-14 md:h-16 w-40 md:text-lg text-xs  sm:w-52 md:w-56 text-white py-2 px-4 rounded">
                Get a Demo
              </button>
            </div>
          </div>
        </div>

        {/* card 1 */}
        <div className="px-4 w-full sm:px-6 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-100 rounded-lg shadow-lg overflow-hidden">
            {/* Image First on Mobile, Second on Larger Screens */}
            <div className="md:order-2 py-5">
              <img
                src="/image/132.png"
                alt="Card Image"
                className="w-full h-40 sm:h-48 md:h-64 object-cover"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h2 className="text-md sm:text-lg md:text-xl font-semibold mb-2 md:mb-3">
                Elevate your real estate business with Zoho Real Estate
                CRMElevate your Travelling business with Zoho Travel Agency CRM
              </h2>
              <p className="text-sm sm:text-base md:text-sm py-5 text-gray-600">
                Our Zoho Travel Agency CRM is Tailored for Travel Agency. It
                helps to Streamline operations, manage tour package efficiently,
                and close trips seamlessly.Stay organized with centralized data,
                automate tasks, and enhance client relationships.
              </p>
              <button className="bg-blue-500 mt-4 h-8 sm:h-14 md:h-14 md:text-lg text-xs w-40 sm:w-52 md:w-56 text-white py-2 px-2 rounded">
                Book A Discover Meeting
              </button>
            </div>
          </div>
        </div>

        {/*  detail page design  with embed you tube */}

        <div className=" text-center px-4">
          <h2 className="text-md sm:text-2xl md:text-xl lg:text-2xl md:pt-16 pt-10 font-semibold mb-2">
            Your Complete Travelling Solution in One Platform
          </h2>
          <p className="text-xs sm:text-lg md:text-base">
            Discover a comprehensive Travel Agency solution all under one roof.
            Our platform simplifies your Travel Agency journey by seamlessly
            integrating lead management, trip management,booking management,
            customer voucher, and vendor management. Easily keep track of leads,
            efficiently manage your tour package, booking flight transport hotel
            effortlessly, and streamline the entire trip management. From
            initial contact to closing trip, our platform is designed to enhance
            your travel business.
          </p>
        </div>

        <div className="w-full text-center sm:px-6 md:max-w-6xl mx-auto mt-10">
          <div className="flex justify-center items-center">
            <div className="video-container">
              <iframe
                className="w-full h-48 sm:w-3/4 sm:h-64 md:w-11/12 md:h-96 g:w-800 lg:h-480"
                src="https://www.youtube.com/embed/your-video-id"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* realestate components 1 */}
        <div className=" my-6">
          <div className=" md:px-10 md:py-12 px-5 ">
            <h2 className=" font-semibold md:mb-2  text-lg md:text-xl">
              ZOHO SERVICES
            </h2>
            <h3 className=" md:text-4xl font-semibold  text-md">
              Key Features of Zoho Travel Agency CRM
            </h3>
          </div>
          <div className="md:flex md:px-10 px-5">
            {/* Left Section (Heading and List) */}
            <div className="md:w-1/2 w-full h-auto md:pl-5 md:p-0 py-5 md:mt-0 mt-2">
              {/* Heading */}
              <div className="md:px-10  mb-5">
                <h2 className="md:text-3xl  text-xl md:text-start text-center font-semibold md:mb-3 capitalize">
                  Lead Management
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
                <ul>
                  <li className="mb-2 flex items-center gap-3">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="mt-1 text-indigo-500"
                    />
                    Multi-Channel Lead Capture: Seamlessly capture leads from
                    various sources including websites, chatbots, and social
                    media platforms.
                  </li>
                  <li className="mb-2 flex items-center gap-3">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="mt-1 text-indigo-500"
                    />
                    Automated Task Assignment: Effortlessly assign tasks based
                    on lead status, streamlining workflows and enhancing
                    efficiency.
                  </li>
                  <li className="mb-2 flex items-center gap-3">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="mt-1 text-indigo-500"
                    />
                    Email and Call Automation: Automate email responses and call
                    scheduling based on lead status, ensuring timely and
                    personalized communication.
                  </li>
                  <li className="mb-2 flex items-center gap-3">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="mt-1 text-indigo-500"
                    />
                    Lead Assignment rule: Automated lead assignment to
                    appropriate agents or teams and much more.
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Section (Image for larger screens) */}
            <div className="md:w-1/2 rounded-md md:pl-5 hidden md:block">
              <img
                src="https://media.istockphoto.com/id/1426249634/photo/3d-illustration-of-building-project.webp?a=1&b=1&s=612x612&w=0&k=20&c=Q7nLhvmtybIS_w-hxRJi12nV8_GTx-OaMFSmyVKdha4="
                alt=""
                className="w-full h-auto rounded-md object-cover"
              />
            </div>
          </div>
        </div>

        {/* realestate components 2 */}
        <div className=" w-full sm:px-6  py-4 mx-auto    mt-10">
          <div className="grid   grid-cols-1 place-items-center md:grid-cols-2 overflow-hidden">
            <div className="order-1 md:order-2  ">
              <h2 className="md:text-3xl my-4  text-xl md:text-start text-center font-semibold md:mb-3 capitalize">
                Trip Management​
              </h2>
              <div className="order-3 md:order-3  ">
                <div className="w-full text-xs hidden md:block sm:text-base  text-gray-600 mx-auto md:px-10 ">
                  <ul>
                    <li className="mb-2 flex items-center gap-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="mt-1 text-indigo-500"
                      />
                      End-to-End Trip Management: Create a comprehensive system
                      for managing trips from initial planning to trip closure.
                    </li>
                    <li className="mb-2 flex items-center gap-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="mt-1 text-indigo-500"
                      />
                      Task Automation: Automate tasks associated with trip
                      milestones to enhance workflow efficiency.
                    </li>
                    <li className="mb-2 flex items-center gap-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="mt-1 text-indigo-500"
                      />
                      Collaborative Features: Enable collaboration among team
                      members for effective coordination during trip planning
                      and execution.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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
                  <ul>
                    <li className="mb-2 flex items-center gap-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="mt-1 text-indigo-500"
                      />
                      End-to-End Trip Management: Create a comprehensive system
                      for managing trips from initial planning to trip closure.?
                    </li>
                    <li className="mb-2 flex items-center gap-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="mt-1 text-indigo-500"
                      />
                      Task Automation: Automate tasks associated with trip
                      milestones to enhance workflow efficiency.
                    </li>
                    <li className="mb-2 flex items-center gap-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="mt-1 text-indigo-500"
                      />
                      Collaborative Features: Enable collaboration among team
                      members for effective coordination during trip planning
                      and execution.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* realestate components 3 */}

        <div className="my-6">
          <div className="md:flex md:px-10 px-5">
            {/* Left Section (Heading and List) */}
            <div className="md:w-1/2 w-full h-auto md:pl-5 md:p-0 py-5 md:mt-0 mt-2">
              {/* Heading */}
              <div className="md:px-10  mb-5">
                <h2 className="md:text-3xl  text-xl md:text-start text-center font-semibold md:mb-3 capitalize">
                  Booking Management
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
                <ul>
                  <li className="mb-2 flex items-center gap-3">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="mt-1 text-indigo-500"
                    />
                    Flight, Hotel, and Transportation Booking: Implement modules
                    for managing bookings across various travel components.
                  </li>
                  <li className="mb-2 flex items-center gap-3">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="mt-1 text-indigo-500"
                    />
                    Real-Time Availability: Provide real-time availability
                    status for flights, hotels, and transportation options.
                  </li>

                  <li className="mb-2 flex items-center gap-3">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="mt-1 text-indigo-500"
                    />
                    Booking Confirmation: Automate booking confirmation
                    processes and notifications.
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Section (Image for larger screens) */}
            <div className="md:w-1/2 rounded-md md:pl-5 hidden md:block">
              <img
                src="https://media.istockphoto.com/id/1426249634/photo/3d-illustration-of-building-project.webp?a=1&b=1&s=612x612&w=0&k=20&c=Q7nLhvmtybIS_w-hxRJi12nV8_GTx-OaMFSmyVKdha4="
                alt=""
                className="w-full h-auto rounded-md object-cover"
              />
            </div>
          </div>
        </div>

        {/* realestate components 4 */}
        <div className=" w-full sm:px-6 py-4 mx-auto    mt-10">
          <div className="grid   grid-cols-1 place-items-center md:grid-cols-2 overflow-hidden">
            <div className="order-1 md:order-2  ">
              <h2 className="md:text-3xl my-4  text-xl md:text-start text-center font-semibold md:mb-3 capitalize">
                Customer Voucher & Itinerary
              </h2>
              <div className="order-3 md:order-3  ">
                <div className="w-full text-xs hidden md:block sm:text-base  text-gray-600 mx-auto md:px-10 ">
                  <ul>
                    <li className="mb-2 flex items-center gap-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="mt-1 text-indigo-500"
                      />
                      Individual Vouchers: Generate separate customer vouchers
                      for flights, hotels, and transportation services.
                    </li>
                    <li className="mb-2 flex items-center gap-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="mt-1 text-indigo-500"
                      />
                      Customization: Allow customization of vouchers to reflect
                      branding and personalized details for clients.
                    </li>
                    <li className="mb-2 flex items-center gap-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="mt-1 text-indigo-500"
                      />
                      Interactive Itinerary Creation: Build an interactive
                      platform for creating detailed travel itineraries.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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
                  <ul>
                    <li className="mb-2 flex items-center gap-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="mt-1 text-indigo-500"
                      />
                      Individual Vouchers: Generate separate customer vouchers
                      for flights, hotels, and transportation services.
                    </li>
                    <li className="mb-2 flex items-center gap-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="mt-1 text-indigo-500"
                      />
                      Customization: Allow customization of vouchers to reflect
                      branding and personalized details for clients.
                    </li>
                    <li className="mb-2 flex items-center gap-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="mt-1 text-indigo-500"
                      />
                      Interactive Itinerary Creation: Build an interactive
                      platform for creating detailed travel itineraries.
                    </li>
                    <li className="mb-2 flex items-center gap-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="mt-1 text-indigo-500"
                      />
                      Collaboration: Facilitate collaboration between travel
                      agents and clients during the itinerary creation process.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* realestate components 5 */}

        <div className=" my-6">
          <div className="md:flex md:px-10 px-5">
            {/* Left Section (Heading and List) */}
            <div className="md:w-1/2 w-full h-auto md:pl-5 md:p-0 py-5 md:mt-0 mt-2">
              {/* Heading */}
              <div className="md:px-10  mb-5">
                <h2 className="md:text-3xl  text-xl md:text-start text-center font-semibold md:mb-3 capitalize">
                  Tour Package Management
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
                <ul>
                  <li className="mb-2 flex items-center gap-3">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="mt-1 text-indigo-500"
                    />
                    Customized Package Creation: Develop a flexible system for
                    creating customized tour packages with a variety of filters.
                  </li>
                  <li className="mb-2 flex items-center gap-3">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="mt-1 text-indigo-500"
                    />
                    Booking Integration: Seamlessly integrate the tour package
                    creation process with the booking system.
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Section (Image for larger screens) */}
            <div className="md:w-1/2 rounded-md md:pl-5 hidden md:block">
              <img
                src="https://media.istockphoto.com/id/1426249634/photo/3d-illustration-of-building-project.webp?a=1&b=1&s=612x612&w=0&k=20&c=Q7nLhvmtybIS_w-hxRJi12nV8_GTx-OaMFSmyVKdha4="
                alt=""
                className="w-full h-auto rounded-md object-cover"
              />
            </div>
          </div>
        </div>

        {/* travel agency components 6 */}
        <div className=" w-full sm:px-6 py-4 mx-auto    mt-10">
          <div className="grid   grid-cols-1 place-items-center md:grid-cols-2 overflow-hidden">
            <div className="order-1 md:order-2  ">
              <h2 className="md:text-3xl my-4  text-xl md:text-start text-center font-semibold md:mb-3 capitalize">
                Transaction Management​​
              </h2>
              <div className="order-3 md:order-3  ">
                <div className="w-full text-xs hidden md:block sm:text-base  text-gray-600 mx-auto md:px-10 ">
                  <ul>
                    <li className="mb-2 flex items-center gap-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="mt-1 text-indigo-500"
                      />
                      Payment Details: Capture and manage customer payment
                      details and vendor payment details securely.
                    </li>
                    <li className="mb-2 flex items-center gap-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="mt-1 text-indigo-500"
                      />
                      Quotations and Invoices: Generate and send quotations and
                      invoices automatically.
                    </li>
                    <li className="mb-2 flex items-center gap-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="mt-1 text-indigo-500"
                      />
                      Payment Reminders: Set up automated payment reminders for
                      customers and vendors.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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
                  <ul>
                    <li className="mb-2 flex items-center gap-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="mt-1 text-indigo-500"
                      />
                      Payment Details: Capture and manage customer payment
                      details and vendor payment details securely.
                    </li>
                    <li className="mb-2 flex items-center gap-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="mt-1 text-indigo-500"
                      />
                      Quotations and Invoices: Generate and send quotations and
                      invoices automatically.
                    </li>
                    <li className="mb-2 flex items-center gap-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="mt-1 text-indigo-500"
                      />
                      Payment Reminders: Set up automated payment reminders for
                      customers and vendors.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* travel agency components 7 */}
        <div className=" my-6">
          <div className="md:flex md:px-10 px-5">
            {/* Left Section (Heading and List) */}
            <div className="md:w-1/2 w-full h-auto md:pl-5 md:p-0 py-5 md:mt-0 mt-2">
              {/* Heading */}
              <div className="md:px-10  mb-5">
                <h2 className="md:text-3xl  text-xl md:text-start text-center font-semibold md:mb-3 capitalize">
                  Performance Tracking
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
                <ul>
                  <li className="mb-2 flex items-center gap-3">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="mt-1 text-indigo-500"
                    />
                    Custom Reports and Dashboard: Provide a range of
                    customizable reports and dashboards for tracking performance
                    metrics.
                  </li>
                  <li className="mb-2 flex items-center gap-3">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="mt-1 text-indigo-500"
                    />
                    Trip, Lead, and Vendor-Based Reports: Generate reports
                    specific to trips, leads, and vendor performance to analyze
                    and optimize operations.
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Section (Image for larger screens) */}
            <div className="md:w-1/2 rounded-md md:pl-5 hidden md:block">
              <img
                src="https://media.istockphoto.com/id/1426249634/photo/3d-illustration-of-building-project.webp?a=1&b=1&s=612x612&w=0&k=20&c=Q7nLhvmtybIS_w-hxRJi12nV8_GTx-OaMFSmyVKdha4="
                alt=""
                className="w-full h-auto rounded-md object-cover"
              />
            </div>
          </div>
        </div>

        {/* Testimonial section */}
        <div className=" my-5">
          <Testimonial />
        </div>

        {/* case studies section */}

        <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12">
          {/* Right Content - Image Side (Appears First on Mobile) */}
          <div className="md:w-1/2 w-full flex justify-center order-1 md:order-2">
            <img
              src="/image/ab.webp"
              alt="Placeholder Image"
              className="w-full md:h-auto h-52 max-w-md rounded-lg shadow-lg"
            />
          </div>

          {/* Left Content - Text Side (Appears Second on Mobile) */}
          <div className="md:w-1/2 w-full text-center md:text-left  mt-6 md:mt-0 order-2 md:order-1">
            <h2 className="text-sm md:text-lg font-semibold text-gray-800">
              Customer success stories
            </h2>
            <h1 className="text-2xl md:text-3xl font-semibold mb-3 text-blue-600">
              Case Studies
            </h1>
            <p className="text-gray-500">
              Explore our compelling case studies showcasing real-world success
              stories. Learn how businesses and individuals achieved remarkable
              results through our tailored solutions and innovative approaches
            </p>
            <button className="bg-black text-white my-4 px-6 py-2 rounded hover:bg-gray-800 transition-all duration-300">
              View all Case Studies
            </button>
          </div>
        </div>

        {/* Faq section */}

        <div className="container mx-auto mt-3 py-7  grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* section 1 */}
          <div className="col-span-1 md:col-span-2 flex flex-col items-center justify-center text-center">
            <p className="text-[12px] text-zinc-500 leading-3 self-start pl-10 font-semibold">
              FAQ
            </p>
            <h3 className="my-3 md:text-2xl text-xl font-semibold uppercase">
              Some FAQs For Zoho Consulting
            </h3>
            <p className="text-[15px] leading-6">
              A Few of top questions generally our clients asked us regarding
              Zoho Consulting Services
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
                      className={`md:text-[15px] text-sm capitalize md:font-semibold font-medium mr-1 
                  
                  ${openIndices.includes(i) ? "text-orange-500" : "text-black"}
                  `}
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

export default Travelagency;
