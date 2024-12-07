import TechUse from "@/Component/Web/TechUse";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
  faCircleCheck,
  faArrowAltCircleRight,
  faEdit,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";
import { Footer } from "@/Component/Footer/Footer";
import { FaEnvelope } from "react-icons/fa";
const Travel = () => {
  const data = [
    {
      id: 1,
      title: "Quick Summary",
      description:
        "The client wished to build a solution that enabled business owners to quickly create an account, enlist their services, and servers to respective services to collect feedback on teams and individuals. They wish to design a feedback mechanism, a restaurant rating & hotel rating app that allows the customers to get directed to the feedback page through a simple scan of the QR assigned to each server. ",
    },
    {
      id: 2,
      title: "Client Requirements",
      description:
        "The client required a comprehensive solution for handling their tour and travel services with an easy-to-use interface.",
    },
    {
      id: 3,
      title: "Case Study Challenges",
      description:
        "The main challenges in this case study were performance issues and an outdated technology stack.",
    },
  ];

  const cardData = [
    {
      imgSrc: "/image/ser.png",
      title: "Travel Package Search",
      description:
        "Allows users to browse and filter tours based on destination, budget, and preferences.",
    },
    {
      imgSrc: "/image/ser.png",
      title: "Detailed Itineraries",
      description:
        "Provides clear day-by-day breakdowns of trips, including activities, highlights, and inclusions.",
    },
    {
      imgSrc: "/image/ser.png",
      title: "Online Booking",
      description:
        "Offers a secure and seamless booking process with multiple payment options.",
    },
    {
      imgSrc: "/image/ser.png",
      title: "Customer Reviews",
      description:
        "Displays real feedback from previous travelers to aid in decision-making.",
    },
    {
      imgSrc: "/image/ser.png",
      title: "Itinerary Management",
      description:
        "Enables users to track and manage their bookings, with updates and reminders.",
    },
    {
      imgSrc: "/image/ser.png",
      title: "Personalized Recommendations",
      description:
        "Suggests location-based options and tailored offers based on user preferences.",
    },
  ];

  const [select, setSelect] = useState(data[0].id); // Track selected title by id
  const [selectedDescription, setSelectedDescription] = useState(
    data[0].description // Initial description
  );

  const handleTitleClick = (id, description) => {
    setSelect(id); // Set the selected title id
    setSelectedDescription(description); // Set the new description
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    countryCode: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your form has been submitted successfully!");
    console.log(formData);
  };

  return (
    <div className="container">
      {/*  hero section  */}

      <div className="bg-yellow-50 py-8 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <img
              src="/path-to-your-logo"
              alt="Logo"
              className="mx-auto md:mx-0 w-32 mb-6"
            />
            <h1 className="text-4xl font-bold mb-4">
              Building an on-demand travel booking platform that lets users
              secure their dream tours anytime, anywhere
            </h1>
            <p className="text-xl font-medium text-gray-600 mb-6">
              Adventure awaits—book your journey today. Let every moment be an
              unforgettable memory
            </p>
          </div>

          {/* Right Section */}
          <div className="relative">
            {/* Laptop image */}
            <Image
              src="/image/pic.jpeg"
              alt="Laptop"
              className="w-full max-w-md mx-auto"
              width={100}
              height={100}
            />

            {/* Mobile image on top of laptop */}
            {/* <img
              src="/path-to-mobile-image"
              alt="Mobile"
              className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-40 md:w-48"
            /> */}
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="grid grid-cols-2 md:h-36 place-items-center md:text-center sm:grid-cols-3 md:grid-cols-5 gap-4 shadow-lg py-4 px-5">
        <div className="min-w-[150px]">
          <h2 className="md:text-lg font-semibold">Use Case</h2>
          <p>Web Application Development</p>
        </div>
        <div className="min-w-[150px]">
          <h2 className="md:text-lg font-semibold">Industry</h2>
          <p>Tour & Travel</p>
        </div>
        <div className="min-w-[150px]">
          <h2 className="md:text-lg font-semibold">Headquarters</h2>
          <p>Uttrakhand</p>
        </div>
        <div className="min-w-[150px]">
          <h2 className="md:text-lg font-semibold">Product</h2>
          <p>On-Demand Tour and Travel</p>
        </div>
        <div className="min-w-[150px]">
          <h2 className="md:text-lg font-semibold">Result</h2>
          <p>End-to-End Service Providers</p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="container mx-auto py-10 bg-gray-100 p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:px-5 space-y-4">
            {data.map((item) => (
              <div
                key={item.id}
                className={`font-bold text-lg cursor-pointer ${
                  item.id === select ? "text-orange-500" : "text-black"
                }`}
                onClick={() => handleTitleClick(item.id, item.description)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="md:col-span-3">
            <div className="border-l-2 border-orange-500 pl-5 space-y-4">
              <p>{selectedDescription}</p>
            </div>
          </div>
        </div>
      </div>

      {/* section 4 */}
      <div data-aos="fade-up" className="flex flex-col items-center py-5">
        <h2 className=" text-center md:text-4xl  text-xl font-bold">
          Project Case Study with Our Solution
        </h2>
        <p className="text-gray-600 pt-3 px-5 text-center">
          With over 4 years of expertise in delivering tailored travel
          experiences, Foursteps Digital partnered with Bizare Expendtion to
          elevate the customer journey of their travel booking platform. Our
          dedicated team conducted an in-depth analysis of the client s unique
          needs and identified key opportunities for enhancing the overall user
          experience and optimizing the booking process.
        </p>
      </div>
      {/* section 5 the customer app */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-10 py-6 lg:py-10">
        {/* Left Section - Text */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            The Customer Web
          </h2>
          <p className="text-sm lg:text-base mb-4">
            A customer-facing tour and travel website serves as a comprehensive
            platform for travelers to explore and book various travel packages,
            including holiday tours, adventure trips, and weekend getaways. The
            site offers a user-friendly interface where customers can search for
            destinations, compare prices, view package details, and read
            reviews. With features like filters for travel preferences, booking
            calendars, and secure payment gateways, users can easily customize
            their trips. Additional services often include travel insurance
            options, real-time customer support, and itinerary management,
            making the entire travel planning process seamless and convenient.
          </p>
          <p className="text-sm lg:text-base font-semibold">
            The customer interface lets users browse, book, and manage travel
            packages easily.
          </p>

          {/* Cards Section */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="flex flex-col  bg-transparent p-4 cursor-pointer hover:bg-gray-100"
              >
                {/* Image and Title Section */}
                <div className="flex items-center mb-2">
                  <img
                    src={card.imgSrc}
                    alt={`${card.title} Icon`}
                    className="w-16 h-16 mr-4"
                  />
                  <h3 className="text-xl font-medium">{card.title}</h3>
                </div>

                {/* Description Section - Full Width */}
                <p className="text-gray-600 text-xs">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Image (Fixed at the top) */}
        <div className="sticky top-0 flex justify-center  items-center">
          <img
            src="/image/ab.webp"
            alt="Customer App Preview"
            className="w-full  max-w-xs lg:max-w-md h-56"
          />
        </div>
      </div>

      {/* section 6 Admin pannel */}
      <div className=" w-full  sm:px-6  ">
        <div className="grid  px-10 grid-cols-1 gap-5 md:grid-cols-2 overflow-hidden">
          <div className="order-1  md:order-2  sm:p-6">
            <h2 className="text-md sm:text-xl text-center md:text-start md:text-4xl font-bold ">
              Admin Panel
            </h2>
            <div className="order-3 md:order-3  py-2">
              <p className="text-xs hidden md:block sm:text-base md:text-md text-gray-600">
                We developed an intuitive dashboard for the admin panel,
                providing real-time insights into the operations of various tour
                packages and travel destinations worldwide. The panel offers
                detailed reports on booking trends, popular destinations, and
                high-demand seasons, helping the client optimize offerings and
                cater to customer preferences. It also tracks regional growth,
                customer satisfaction, and key performance metrics to enhance
                the travel experience.
              </p>
            </div>
          </div>
          <div className="order-2   md:order-1">
            <img
              src="/image/132.png"
              alt="Card Image"
              className="w-full h-40 sm:h-48 md:h-64 object-cover"
            />
          </div>

          <div className="order-3 md:order-3 pb-2 sm:p-6">
            <p className="text-md md:hidden block sm:text-base md:text-sm text-gray-600">
              We developed an intuitive dashboard for the admin panel, providing
              real-time insights into the operations of various tour packages
              and travel destinations worldwide. The panel offers detailed
              reports on booking trends, popular destinations, and high-demand
              seasons, helping the client optimize offerings and cater to
              customer preferences. It also tracks regional growth, customer
              satisfaction, and key performance metrics to enhance the travel
              experience.
            </p>
          </div>
        </div>
      </div>

      {/* section 7 service provider panel */}

      <div className=" w-full mt-10 sm:px-6 ">
        <div className="grid  px-10 grid-cols-1 place-items-center md:grid-cols-2 overflow-hidden">
          <div className="order-2 md:order-1  sm:p-6">
            <h2 className="text-md sm:text-xl md:block hidden md:text-4xl font-bold mb-2 md:mb-3">
              Service Provider Panel
            </h2>
            <p className=" pb-2 sm:text-base md:text-md text-gray-600">
              We designed a robust service provider panel that allows tour
              operators to manage their offerings seamlessly. This panel gives
              service providers real-time control over tour packages, schedules,
              and bookings, ensuring smooth coordination with travelers. With
              detailed insights into customer preferences, booking trends, and
              peak seasons, operators can adjust their services to match demand.
              The panel also provides tools for managing resources, tracking
              customer feedback, and optimizing the overall travel experience.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-md sm:text-xl md:text-2xl md:hidden text-center font-bold mb-2 md:mb-3">
              Service Provider Panel
            </h2>
            <img
              src="/image/132.png"
              alt="Card Image"
              className="w-full h-40 sm:h-48 md:h-64 object-cover"
            />
          </div>
        </div>
      </div>
      {/*  section 8 impact section  */}

      <div className="grid grid-cols-1 md:grid-cols-2 px-10 bg-gray-100 gap-6 py-5">
        {/* Image first on mobile, second on medium and larger screens */}
        <div className="flex justify-center items-center order-1 md:order-2">
          <img
            src="/image/zoho.jpg"
            alt="Card Image"
            className="w-56 h-56 md:w-72 md:h-72 object-cover"
          />
        </div>

        {/* Content second on mobile, first on medium and larger screens */}
        <div className="flex flex-col justify-center order-2 md:order-1">
          <h2 className="md:text-2xl text-xl font-bold mb-1">
            Impacts and Benefits of Our Tour and Travel Solution
          </h2>
          <p className="mb-4">
            Our tour and travel solution enhances customer satisfaction by
            offering personalized itineraries and seamless booking experiences.
            By automating processes, it increases operational efficiency for
            travel agencies, reducing manual work. Additionally, the solution
            promotes sustainable tourism, encouraging eco-friendly practices
            that benefit the environment. Ultimately, it supports economic
            growth by attracting global tourists and driving revenue for local
            businesses.
          </p>

          {/* Icon and text aligned properly */}

          <div className="flex items-start mb-1">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-orange-500 w-5 h-5 mr-3"
            />
            <div>
              <h3 className="text-lg font-semibold">Industry Expertise</h3>
              <p className="text-sm mt-1">
                Our travel services are backed by professionals with extensive
                knowledge and experience, guaranteeing a personalized and
                seamless experience for each traveler.
              </p>
            </div>
          </div>

          <div className="flex items-start mb-1">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-orange-500 w-5 h-5 mr-3"
            />
            <div>
              <h3 className="text-lg font-semibold">Tailored Solutions</h3>
              <p className="text-sm mt-1">
                We offer fully customized travel packages designed to meet
                individual preferences, ensuring every journey is uniquely
                suited to the traveler’s desires and budget.
              </p>
            </div>
          </div>

          <div className="flex items-start mb-1">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-orange-500 w-5 h-5 mr-3"
            />
            <div>
              <h3 className="text-lg font-semibold">
                Efficient Travel Planning
              </h3>
              <p className="text-sm mt-1">
                Our team manages all aspects of trip organization, from
                transportation to accommodations, ensuring a smooth and
                stress-free travel experience with every detail meticulously
                planned.
              </p>
            </div>
          </div>

          <div className="flex items-start mb-1">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-orange-500 w-5 h-5 mr-3"
            />
            <div>
              <h3 className="text-lg font-semibold">Scalable Solutions</h3>
              <p className="text-sm mt-1">
                Our services can easily scale to accommodate different group
                sizes, ensuring that both solo travelers and large tour groups
                enjoy a flawless and well-organized experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* tech we use in project */}
      <div>
        <TechUse />
      </div>

      {/* contact section  */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 my-5 bg-blue-100 md:p-6">
        <div className="p-4">
          <h2 className="text-3xl font-semibold mb-4">
            Want to See Your Idea as the Next Big Thing?
          </h2>
          <div className="p-2">
            <div className="flex items-start mb-4">
              <FontAwesomeIcon
                icon={faEdit}
                className="text-orange-500 w-5 h-5 mr-2"
              />
              <div>
                <h3 className="text-xl font-semibold">Fill up your details</h3>
                <p className="text-gray-600">
                  Get custom solutions, recommendations, estimates,
                  confidentiality & same day response guaranteed!
                </p>
              </div>
            </div>

            <div className="flex py-4 items-start">
              <FontAwesomeIcon
                icon={faArrowAltCircleRight}
                className="text-orange-500 w-5 h-5 mr-2 "
              />
              <div>
                <h3 className="text-xl  font-semibold">What s next?</h3>
                <p className="text-gray-600">
                  One of our account managers will contact you shortly.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-2 ">
            <div className="flex pl-4 items-center mb-4">
              <img
                src="/image/ab.webp"
                alt="Manager 1"
                className="md:w-20 md:h-20 h-14 w-14  border-2 border-blue-500 rounded-full "
              />
              <img
                src="/image/ab.webp"
                alt="Manager 2"
                className="md:w-20 md:h-20 h-14 w-14  border-2 border-blue-500 rounded-full "
              />
              <img
                src="/image/ab.webp"
                alt="Manager 3"
                className="md:w-20 md:h-20 h-14 w-14 border-2 border-blue-500 rounded-full "
              />
              <img
                src="/image/ab.webp"
                alt="Manager 4"
                className="md:w-20 md:h-20 h-14 w-14  border-2 border-blue-500 rounded-full "
              />
            </div>
            <h3 className="text-2xl font-bold md:py-4">Contact Info</h3>
            <div className="p-2">
              <div className="flex items-center mb-2">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-orange-500 w-5 h-5 mr-3"
                />
                <p className="font-semibold">+91 309-4653</p>
              </div>

              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-orange-500 w-5 h-5 mr-3"
                />
                <p className="font-semibold">4stepsdigital@.in</p>
              </div>
            </div>
          </div>
        </div>
        {/* form section */}
        <div className="md:w-2/7 w-full  bg-white rounded-lg shadow-md p-5 md:mt-0 mt-7">
          <form onSubmit={handleSubmit}>
            <label
              className="block text-gray-700 text-sm font-bold md:mb-2"
              htmlFor="name"
            >
              Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter Your Name"
              className="w-full bg-white rounded-full border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200  outline-none text-gray-900 py-1 px-4 md:leading-8 transition-colors duration-200 ease-in-out"
            />
            <div className="flex flex-col md:flex-row md:space-x-4 mt-4">
              {/* Email Field */}
              <div className="md:w-1/2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter Your Email"
                  className="w-full bg-white rounded-full border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200  outline-none text-gray-900 py-1 px-4 md:leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              {/* Company Field */}
              <div className=" md:w-1/2 w-full">
                <label
                  className="block text-gray-700 text-sm md:mt-0 mt-4 font-bold mb-2"
                  htmlFor="company"
                >
                  Company*
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  placeholder="Enter Your Company"
                  className="w-full bg-white rounded-full border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200  outline-none text-gray-900 py-1 px-4 md:leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2 mt-4"
              htmlFor="phone"
            >
              Phone Number*
            </label>
            <div className="flex items-center  mb-4 space-x-2">
              <select
                className="w-1/4 bg-white rounded-l-full border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none text-gray-900 py-2 px-4 md:leading-8 transition-colors duration-200 ease-in-out"
                id="country-code"
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                required
              >
                <option value="IN" className=" text-xs ">
                  India (+91)
                </option>
                <option value="ne" className=" text-xs ">
                  India (+94)
                </option>
                <option value="iji" className=" text-xs ">
                  Indiafsfd (+94)
                </option>
                {/* Add other country codes as needed */}
              </select>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter Your Phone Number"
                className="w-3/4 bg-white rounded-r-full border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200  outline-none text-gray-900 py-1 px-4 md:leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2 mt-4"
              htmlFor="message"
            >
              Message*
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <div className="flex justify-center w-full mt-4">
              <button
                className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Travel;
