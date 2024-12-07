import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

// import TechUse from "@/Component/Web/TechUse";
import { Footer } from "@/Component/Footer/Footer";
import Testimonial from "@/Component/Testimonial/Testimonial";
import Nav from "@/Component/Header/Nav";

const realestate = () => {
  return (
    <>
      {/* hero section */}
      <div className=" fixed w-full z-[19] top-0">
        <Nav />
      </div>
      <div className="container pt-20">
        <div
          className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[25rem] flex justify-center bg-cover object-cover text-white"
          style={{
            backgroundImage:
              'url("https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30549.jpg")',
          }}
        >
          <div className="relative z-10 text-center px-4">
            <h1 className="text-md sm:text-xl md:text-2xl lg:text-3xl md:pt-16 pt-10 font-semibold mb-2">
              Zoho Real Estate CRM for Agent/Broker
            </h1>
            <p className="text-xs sm:text-lg md:text-xl">
              Unlock Seamless Real Estate Management for Agents/Brokers.
              Simplify Your Operations with Our Comprehensive CRM Solution
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center text-center  md:pt-6 pt-2">
              <button className="bg-blue-500 h-10 sm:h-14 md:h-16 w-40 md:text-lg text-xs  sm:w-52 md:w-56 text-white py-2 px-4 rounded">
                Get a Demo
              </button>
            </div>
          </div>
        </div>

        {/* card after hero  absolute  top-[35%] sm:top-[75%] md:top-[70%] lg:top-[65%]*/}
        {/* flex and grid both */}
        {/* <div className=" px-4 w-full absolute  top-[35%] sm:top-[75%] md:top-[70%] lg:top-[65%] sm:px-6 md:px-20  ">
        <div className="flex flex-col md:flex-row bg-gray-100 rounded-lg shadow-lg overflow-hidden">
          <div className="md:w-1/2 p-4 sm:p-6">
            <h2 className="text-md sm:text-xl md:text-2xl font-semibold md:mb-3 mb-2">
              Custom Website Development Agency In Delhi NCR
            </h2>
            <p className="text-sm sm:text-base md:text-sm text-gray-600">
              Four Steps Digital Consulting Pvt Ltd is a Custom website
              development company in Delhi NCR. Our custom website development
              services are designed to bring your vision to life. Whether you
              require a dynamic web application, an e-commerce platform, or a
              content-rich website, we have the expertise to deliver exceptional
              results. We work on PHP, React, Node.Js etc
            </p>
            <button className="bg-blue-500 mt-4 h-8 sm:h-14 md:h-14 md:text-lg text-xs w-40 sm:w-52 md:w-56 text-white py-2 px-2 rounded">
              Get a Free Consulting
            </button>
          </div>
          <div className="  py-5">
            <img
              src="/image/132.png"
              alt="Card Image"
              className=" w-full h-40 sm:h-48 md:h-64 object-cover"
            />
          </div>
        </div>
      </div> */}
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
              <h2 className="text-md sm:text-xl md:text-3xl font-semibold mb-2 md:mb-3">
                Elevate your real estate business with Zoho Real Estate CRM
              </h2>
              <p className="text-sm sm:text-base md:text-sm py-5 text-gray-600">
                Our Zoho Real Estate CRM is tailored for agents and brokers. It
                helps to streamline operations, manage listings efficiently, and
                close deals seamlessly. Stay organized with centralized data,
                automate tasks, and enhance client relationships.
              </p>
              <button className="bg-blue-500 mt-4 h-8 sm:h-14 md:h-14 md:text-lg text-xs w-40 sm:w-52 md:w-56 text-white py-2 px-2 rounded">
                Get a Free Consulting
              </button>
            </div>
          </div>
        </div>

        {/*  detail page design  with embed you tube */}

        <div className=" text-center px-4">
          <h2 className="text-md sm:text-2xl md:text-3xl lg:text-3xl md:pt-16 pt-10 font-semibold mb-2">
            Your Complete Real Estate Solution in One Platform
          </h2>
          <p className="text-xs sm:text-lg md:text-base">
            Discover a comprehensive real estate solution all under one roof.
            Our platform simplifies your real estate journey by seamlessly
            integrating lead management, property management, property visits,
            offers, and sales cycle management. Easily keep track of leads,
            efficiently manage your property portfolio, schedule visits
            effortlessly, and streamline the entire sales cycle. From initial
            contact to closing deals, our platform is designed to enhance your
            real estate experience.
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
              Key Features of Our Real Estate CRM
            </h3>
          </div>
          <div className="md:flex md:px-10 px-5">
            {/* Left Section (Heading and List) */}
            <div className="md:w-1/2 w-full h-auto md:pl-5 md:p-0 py-5 md:mt-0 mt-2">
              {/* Heading */}
              <div className="md:px-10  mb-5">
                <h2 className="md:text-3xl  text-xl md:text-start text-center font-semibold md:mb-3 capitalize">
                  Property Management
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
                    Comprehensive Property Management: Efficiently handle both
                    residential and commercial listings within the CRM.
                  </li>
                  <li className="mb-2 flex items-center gap-3">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="mt-1 text-indigo-500"
                    />
                    Diverse Listing Options: Facilitate various listing types
                    such as sale, purchase, Resale, Separate module for project
                    listings.
                  </li>
                  <li className="mb-2 flex items-center gap-3">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="mt-1 text-indigo-500"
                    />
                    Field-based filter - Based on fields such as property type,
                    listing type, booking status, city, locality, etc.
                  </li>
                  <li className="mb-2 flex items-center gap-3">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="mt-1 text-indigo-500"
                    />
                    Intelligent Property Suggestions: Utilize auto-suggest
                    functionality to match properties with customer
                    requirements, streamlining the search process.
                  </li>
                  <li className="mb-2 flex items-center gap-3">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="mt-1 text-indigo-500"
                    />
                    Automated Booking Status Updates: Automatically manage and
                    update property booking statuses, ensuring real-time
                    accuracy and transparency.
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
                Lead Management
              </h2>
              <div className="order-3 md:order-3  ">
                <div className="w-full text-xs hidden md:block sm:text-base  text-gray-600 mx-auto md:px-10 ">
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
                      Email and Call Automation: Automate email responses and
                      call scheduling based on lead status, ensuring timely and
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
                      Multi-Channel Lead Capture: Seamlessly capture leads from
                      various sources including websites, chatbots, and social
                      media platforms.?
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
                      Email and Call Automation: Automate email responses and
                      call scheduling based on lead status, ensuring timely and
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
                  Sales cycle Management
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
                    Property Matching & Communication: Efficiently match
                    properties to clients, facilitate site visits, manage
                    offers, and purchase agreements within the system.
                  </li>
                  <li className="mb-2 flex items-center gap-3">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="mt-1 text-indigo-500"
                    />
                    Property Visit Management: Streamline property visits,
                    inspections, and document handling, ensuring a centralized
                    repository for all relevant information.
                  </li>
                  <li className="mb-2 flex items-center gap-3">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="mt-1 text-indigo-500"
                    />
                    Financial Tracking: Comprehensive income and expense
                    management functionalities tailored to real estate
                    transactions. Deal Stage Automation: Automate processes
                    based on deal
                  </li>
                  <li className="mb-2 flex items-center gap-3">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="mt-1 text-indigo-500"
                    />
                    stages, optimizing workflows and ensuring timely actions at
                    each phase.
                  </li>
                  <li className="mb-2 flex items-center gap-3">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="mt-1 text-indigo-500"
                    />
                    Activity Automation: Implement automated tasks and actions
                    aligned with deal progression, enhancing overall efficiency
                    in managing real estate sales cycles.
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
                Transaction Management
              </h2>
              <div className="order-3 md:order-3  ">
                <div className="w-full text-xs hidden md:block sm:text-base  text-gray-600 mx-auto md:px-10 ">
                  <ul>
                    <li className="mb-2 flex items-center gap-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="mt-1 text-indigo-500"
                      />
                      Payment Milestone Tracking: Easily monitor and manage
                      payment milestones throughout transactions.
                    </li>
                    <li className="mb-2 flex items-center gap-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="mt-1 text-indigo-500"
                      />
                      Invoicing Integration: Streamline invoicing processes
                      within the CRM for seamless financial management.
                    </li>
                    <li className="mb-2 flex items-center gap-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="mt-1 text-indigo-500"
                      />
                      Comprehensive Loan Details: Store and access detailed loan
                      information conveniently within the platform.
                    </li>
                    <li className="mb-2 flex items-center gap-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="mt-1 text-indigo-500"
                      />
                      Bank Details Management: Centralize and organize
                      bank-related information for efficient transaction
                      handling.
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
                      Payment Milestone Tracking: Easily monitor and manage
                      payment milestones throughout transactions.
                    </li>
                    <li className="mb-2 flex items-center gap-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="mt-1 text-indigo-500"
                      />
                      Invoicing Integration: Streamline invoicing processes
                      within the CRM for seamless financial management.
                    </li>
                    <li className="mb-2 flex items-center gap-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="mt-1 text-indigo-500"
                      />
                      Comprehensive Loan Details: Store and access detailed loan
                      information conveniently within the platform.
                    </li>
                    <li className="mb-2 flex items-center gap-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="mt-1 text-indigo-500"
                      />
                      Bank Details Management: Centralize and organize
                      bank-related information for efficient transaction
                      handling.
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
                  Document Management
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
                    Effortlessly store and manage property images, videos, and
                    walkthroughs within the system.
                  </li>
                  <li className="mb-2 flex items-center gap-3">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="mt-1 text-indigo-500"
                    />
                    Securely organize customer documents for easy access and
                    reference.
                  </li>
                  <li className="mb-2 flex items-center gap-3">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="mt-1 text-indigo-500"
                    />
                    Centralize legal agreement documents for streamlined
                    transactions and compliance.
                  </li>
                  <li className="mb-2 flex items-center gap-3">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="mt-1 text-indigo-500"
                    />
                    Capture and catalog inspection reports for comprehensive
                    property assessments.
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

        {/* realestate components 6 */}
        <div className=" w-full sm:px-6 py-4 mx-auto    mt-10">
          <div className="grid   grid-cols-1 place-items-center md:grid-cols-2 overflow-hidden">
            <div className="order-1 md:order-2  ">
              <h2 className="md:text-3xl my-4  text-xl md:text-start text-center font-semibold md:mb-3 capitalize">
                Performance Tracking
              </h2>
              <div className="order-3 md:order-3  ">
                <div className="w-full text-xs hidden md:block sm:text-base  text-gray-600 mx-auto md:px-10 ">
                  <ul>
                    <li className="mb-2 flex items-center gap-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="mt-1 text-indigo-500"
                      />
                      Customizable dashboards tailored to your business needs
                    </li>
                    <li className="mb-2 flex items-center gap-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="mt-1 text-indigo-500"
                      />
                      Detailed custom reports for in-depth analysis
                    </li>
                    <li className="mb-2 flex items-center gap-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="mt-1 text-indigo-500"
                      />
                      Real-time tracking of business health indicators
                    </li>
                    <li className="mb-2 flex items-center gap-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="mt-1 text-indigo-500"
                      />
                      Predictive revenue insights for informed decision-making
                    </li>
                    <li className="mb-2 flex items-center gap-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="mt-1 text-indigo-500"
                      />
                      Lead-centric reports for comprehensive lead management
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
                      Customizable dashboards tailored to your business needs
                    </li>
                    <li className="mb-2 flex items-center gap-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="mt-1 text-indigo-500"
                      />
                      Detailed custom reports for in-depth analysis
                    </li>
                    <li className="mb-2 flex items-center gap-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="mt-1 text-indigo-500"
                      />
                      Real-time tracking of business health indicators
                    </li>
                    <li className="mb-2 flex items-center gap-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="mt-1 text-indigo-500"
                      />
                      Predictive revenue insights for informed decision-making
                    </li>
                    <li className="mb-2 flex items-center gap-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="mt-1 text-indigo-500"
                      />
                      Lead-centric reports for comprehensive lead management
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
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
        {/*  this is our testimonial section */}
        <div className=" my-5">
          <Testimonial />
        </div>
        {/* technology we use */}
        <div className=" pt-10">{/* <TechUse /> */}</div>
        {/* footer section */}
        <Footer />
      </div>
    </>
  );
};

export default realestate;
