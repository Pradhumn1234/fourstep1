// import React from "react";

// const bitrix = () => {
//   return (
//     <div>
//       <h1>this is our bitrix and salseforce services</h1>
//     </div>
//   );
// };

// export default bitrix;

import React, { useState, useEffect } from "react";

// import TechUse from "@/Component/Web/TechUse";
import { Footer } from "@/Component/Footer/Footer";
import Testimonial from "@/Component/Testimonial/Testimonial";
import Choose from "@/Component/Web/Choose";
import Industry from "@/Component/Industry/Industry";
import Wework from "@/Component/Web/Wework";
import Nav from "@/Component/Header/Nav";

const Bitrix = () => {
  // bitrix services ..............
  const businesses = [
    {
      img: "/image/bit.jpg",
      alt: "Abc",
      name: "Collaboration",
    },
    {
      img: "/image/bit.jpg",
      alt: "Abc",
      name: "Tasks and projects",
    },
    {
      img: "/image/bit.jpg",
      alt: "Abc",
      name: "Contact center",
    },
    {
      img: "/image/bit.jpg",
      alt: "Abc",
      name: "HR and automation",
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
          <div className="relative z-10 text-center px-4">
            <h1 className="text-md sm:text-2xl md:text-2xl lg:text-3xl md:pt-16 pt-10 font-semibold mb-2">
              Bitrix24 Consulting
            </h1>
            <p className="text-xs sm:text-lg md:text-xl">
              Where innovation meets implementation, and your business
              transforms with seamless collaboration and unparalleled
              efficiency.
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
              <h2 className="text-md sm:text-lg md:text-2xl font-semibold mb-2 md:mb-3">
                Bitrix24 Consulting Service Agency In Delhi NCR
              </h2>
              <p className="text-sm sm:text-base md:text-sm py-5 text-gray-600">
                Empower your business in Delhi NCR with our Bitrix24 Consulting
                Services – your strategic partner in harnessing the full
                potential of Bitrix24. From seamless implementation to tailored
                solutions, our agency is committed to elevating your
                collaboration, communication, and productivity, bringing the
                power of Bitrix24 to every aspect of your organization
              </p>
              <button className="bg-blue-500 mt-4 h-8 sm:h-14 md:h-14 md:text-lg text-xs w-40 sm:w-52 md:w-56 text-white py-2 px-2 rounded">
                Book A Discover Meeting
              </button>
            </div>
          </div>
        </div>

        {/* realestate components 1 */}
        <div className=" my-6">
          <div className=" md:px-10 md:py-12 px-5 ">
            <h2 className=" font-semibold md:mb-2  text-lg md:text-xl">
              Bitrix24 SERVICES
            </h2>
            <h3 className=" md:text-4xl font-semibold  text-md">
              We provide best Bitrix24 Consulting Services for any size of
              Businesses
            </h3>
            <h3 className=" py-5 font-semibold  text-md">
              Four Steps Digital Consulting Pvt Ltd is a Bitrix24 consulting
              agency in India. Our Bitrix24 services are following{" "}
            </h3>
          </div>
          <div className="md:flex md:px-10 px-5">
            {/* Left Section (Heading and List) */}
            <div className="md:w-1/2 w-full h-auto md:pl-5 md:p-0 py-5 md:mt-0 mt-2">
              {/* Heading */}
              <div className="md:px-10  mb-5">
                <h2 className="md:text-3xl  text-xl md:text-start text-center font-semibold md:mb-3 capitalize">
                  Bitrix24 Setup and Implementation
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
                  Trust our experts to set up and implement Bitrix24 for your
                  organization. From initial configuration to user access
                  management, we handle the entire setup process, ensuring a
                  smooth transition and optimal utilization of Bitrix24
                  features.
                </p>
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
                Development & Customization
              </h2>
              <div className="order-3 md:order-3  ">
                <div className="w-full text-xs hidden md:block sm:text-base  text-gray-600 mx-auto md:px-10 ">
                  <p>
                    Tailor Bitrix24 to meet your specific business needs with
                    custom development and customization services. Whether it
                    creating custom modules, workflows, or integrating
                    additional features, our team ensures that Bitrix24 aligns
                    seamlessly with your unique requirements.
                  </p>
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
                  <p>
                    Tailor Bitrix24 to meet your specific business needs with
                    custom development and customization services. Whether it
                    creating custom modules, workflows, or integrating
                    additional features, our team ensures that Bitrix24 aligns
                    seamlessly with your unique requirements.
                  </p>
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
                  CRM data migration and integration
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
                  Seamlessly migrate your existing CRM data to Bitrix24,
                  preserving data integrity and ensuring a hassle-free
                  transition. Our integration services enable the connection of
                  Bitrix24 with other tools and systems, streamlining data flow
                  and enhancing overall efficiency.
                </p>
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
                Reporting and analytics
              </h2>
              <div className="order-3 md:order-3  ">
                <div className="w-full text-xs hidden md:block sm:text-base  text-gray-600 mx-auto md:px-10 ">
                  <p>
                    Leverage the full potential of Bitrix24 by harnessing its
                    reporting and analytics capabilities. Our services include
                    custom report creation, data analysis, and insights
                    generation, allowing you to make informed decisions based on
                    real-time data.
                  </p>
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
                  <p>
                    Leverage the full potential of Bitrix24 by harnessing its
                    reporting and analytics capabilities. Our services include
                    custom report creation, data analysis, and insights
                    generation, allowing you to make informed decisions based on
                    real-time data.
                  </p>
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
                  Bitrix24 training and support
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
                  Empower your team with comprehensive training on Bitrix24
                  features and functionalities. Our training programs cover
                  everything from basic usage to advanced features, ensuring
                  that your team is proficient in maximizing the benefits of
                  Bitrix24. Additionally, our support services are available to
                  address any queries or issues promptly.
                </p>
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

        {/* image animate bouncy section */}
        <div className="flex flex-col items-center py-5 bg-blue-300">
          <h2 className=" text-center md:text-4xl  text-xl font-semibold">
            We Offer Bitrix24 Services For Following Bitrix24 Products
          </h2>
          <p className="text-gray-600 py-5 mb-5 text-center">
            Businesses trust us because we provide them with the highest quality
            services
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:p-10 cursor-pointer">
            {businesses.slice(0, displayCount).map((business, index) => (
              <div
                key={index}
                className="grid place-items-center bg-white shadow-md rounded-lg md:p-3 p-2 border border-gray-100"
              >
                <img
                  src={business.img}
                  alt={business.alt}
                  className="w-full h-2/3 object-cover rounded-lg hover:animate-bounceY"
                />
                <p className="text-center w-full font-semibold h-1/3">
                  {business.name}
                </p>
              </div>
            ))}
          </div>
          <div class="flex justify-center items-center ">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded">
              Schedule A Discovery Meeting
            </button>
          </div>
        </div>

        {/* why choose us section */}
        <div className=" my-5">
          <div className=" md:px-12 md:py-12 px-5 ">
            <h2 className=" font-semibold  text-gray-400  text-md md:text-lg">
              Why us
            </h2>
            <h3 className=" md:text-3xl font-semibold  text-md">
              Why Choose Us For Bitrix24 Services?
            </h3>
            <h3 className=" py-2 text-md">
              Some of the following reasons to choose 4steps Digital Consulting
              Pvt Ltd for Bitrix24 consulting services
            </h3>
          </div>
          <Choose />
        </div>

        {/* contact page  */}
        <div className=" w-full my-10 sm:px-6 md:max-w-6xl mx-auto  bg-gray-200  py-10">
          <div className=" text-center  px-4">
            <h1 className="text-sm md:text-xl uppercase   font-semibold mb-2">
              READY TO GROW FASTER? Build website for your business TODAY!
            </h1>
            <div className=" items-center md:text-md text-xs justify-center flex gap-3">
              <p>✔ Affordable and Easy-To-Use Website</p>
              <p>✔ Clear All Query Regarding Zoho</p>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center text-center gap-3 md:pt-6 pt-2">
              <button className="bg-blue-500 h-10 sm:h-14 md:h-16 w-40 md:text-lg text-xs  sm:w-52 md:w-56 text-white py-2 px-3 rounded">
                call +91 9065879989
              </button>
              <button className="bg-orange-500 h-10 sm:h-14 md:h-16 md:text-lg text-xs w-40 sm:w-52 md:w-56 text-white py-2 px-3 rounded">
                Talk To Bitrix Expert
              </button>
            </div>
          </div>
        </div>

        {/* we work page */}
        <Wework />
        {/* industries we serve  */}
        <div className="">
          <Industry />
        </div>
        {/* footer section */}
        <Footer />
      </div>
    </>
  );
};

export default Bitrix;
