import React, { useState, useEffect } from "react";

// import TechUse from "@/Component/Web/TechUse";
import { Footer } from "@/Component/Footer/Footer";
import Testimonial from "@/Component/Testimonial/Testimonial";
import Choose from "@/Component/Web/Choose";
import Industry from "@/Component/Industry/Industry";
import AOS from "aos";
import "aos/dist/aos.css";
import Wework from "@/Component/Web/Wework";
import Nav from "@/Component/Header/Nav";
import Calltoaction from "@/Component/Web/Calltoaction";

const Salseforce = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 100, // Offset from the original trigger point (in pixels)
      easing: "ease-in-out", // Easing function for the animation
      once: true, // If true, animation occurs only once as you scroll
      mirror: false, // If false, animation will not re-appear when scrolling back up
    });
  }, []);
  // bitrix services ..............
  const businesses = [
    {
      img: "/image/sale.jpg",
      alt: "Abc",
      name: "Collaboration",
    },
    {
      img: "/image/sale.jpg",
      alt: "Abc",
      name: "Tasks and projects",
    },
    {
      img: "/image/sale.jpg",
      alt: "Abc",
      name: "Contact center",
    },
    {
      img: "/image/sale.jpg",
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
          <div data-aos=" fade-up" className="relative z-10 text-center px-4">
            <h1 className="text-md sm:text-lg md:text-xl lg:text-3xl md:pt-16 pt-10 font-semibold mb-2">
              Salseforce Services
            </h1>
            <p className="text-xs sm:text-lg md:text-xl">
              Skyrocket Your Success with Salesforce Excellence: Where
              Innovation Meets Precision!
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center text-center  md:pt-6 pt-2">
              <button className="bg-blue-500 h-10 sm:h-14 md:h-16 w-40 md:text-lg text-xs  sm:w-52 md:w-56 text-white py-2 px-4 rounded">
                Get a Demo
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
                Salesforce Consulting Service Agency In Delhi NCR
              </h2>
              <p className="text-sm sm:text-base md:text-sm py-5 text-gray-600">
                “Unlock the full potential of Salesforce with our comprehensive
                suite of consulting services. Salesforce is a world’s no 1
                customer relationship management software that offers a wide
                range of tools to help businesses streamline their Sales,
                Marketing, Customer service process and improve their
                performance. Four Steps Digital Consulting Pvt Ltd is a
                Salesforce Consulting service agency in Delhi NCR.
              </p>
              <button className="bg-blue-500 mt-4 h-8 sm:h-14 md:h-14 md:text-lg text-xs w-40 sm:w-52 md:w-56 text-white py-2 px-2 rounded">
                Book A Discover Meeting
              </button>
            </div>
          </div>
        </div>
        {/* realestate components 1 */}
        <div data-aos="fade-up" className=" my-6">
          <div className=" md:px-10 md:py-12 px-5 ">
            <h2 className=" font-semibold md:mb-2  text-gray-400 text-sm md:text-lg">
              SALESFORCE SERVICES
            </h2>
            <h3 className=" md:text-3xl  font-semibold  text-sm">
              We provide best Salesforce Consulting Services for any size of
              Businesses
            </h3>
            <h3 className=" py-4  text-xs md:text-lg">
              Four Steps Digital Consulting Pvt Ltd is a Salesforce consulting
              agency in India. Our Salesforce services are following
            </h3>
          </div>
          <div className="md:flex md:px-10 px-5">
            {/* Left Section (Heading and List) */}
            <div className="md:w-1/2 w-full h-auto md:pl-5 md:p-0 py-5 md:mt-0 mt-2">
              {/* Heading */}
              <div className="md:px-10  mb5">
                <h2 className="md:text-3xl  text-lg md:text-start text-center font-semibold md:mb-3 capitalize">
                  Salesforce implementation
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
                  Experience the power of effortless Salesforce implementation
                  with our expert services. From setup to launch, we streamline
                  the process, ensuring a quick and smooth transition to
                  Salesforce. Transform your business now!
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

        {/* realestate components 2 */}
        <div className=" w-full sm:px-6  mx-auto  ">
          <div className="grid   grid-cols-1 place-items-center md:grid-cols-2 overflow-hidden">
            <div className="order-1 md:order-2  ">
              <h2 className="md:text-3xl my-4  text-xl md:text-start text-center font-semibold md:mb-3 capitalize">
                Salesforce Optimization​
              </h2>
              <div className="order-3 md:order-3  ">
                <div className="w-full text-xs hidden md:block sm:text-base  text-gray-600 mx-auto md:px-10 ">
                  <p>
                    Unleash the full power of Salesforce with our Optimization
                    Services. Streamline processes, boost efficiency, and
                    maximize ROI effortlessly. Elevate your business performance
                    – start optimizing with us today!.
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
                  <p></p>
                </div>
                Unleash the full power of Salesforce with our Optimization
                Services. Streamline processes, boost efficiency, and maximize
                ROI effortlessly. Elevate your business performance – start
                optimizing with us today!.
              </div>
            </div>
          </div>
        </div>

        {/* realestate components 3 */}

        <div data-aos="fade-up" className="my-6">
          <div className="md:flex md:px-10 px-5">
            {/* Left Section (Heading and List) */}
            <div className="md:w-1/2 w-full h-auto md:pl-5 md:p-0 py-5 md:mt-0 mt-2">
              {/* Heading */}
              <div className="md:px-10  mb-5">
                <h2 className="md:text-3xl  text-xl md:text-start text-center font-semibold md:mb-3 capitalize">
                  Salesforce Consulting
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
                  Empower your business with our Salesforce Consulting Services.
                  Tailored solutions, expert guidance, and streamlined success.
                  Maximize your Salesforce investment – consult with us today
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
                Salesforce Integration
              </h2>
              <div className="order-3 md:order-3  ">
                <div className="w-full text-xs hidden md:block sm:text-base  text-gray-600 mx-auto md:px-10 ">
                  <p>
                    Unlock the power of unified data and streamlined workflows
                    with our Salesforce Integration Services. Our experts ensure
                    a seamless connection between Salesforce and your existing
                    systems, third-party applications like Whatsapp, custom
                    applications,s, etc through API integration.
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
                    Unlock the power of unified data and streamlined workflows
                    with our Salesforce Integration Services. Our experts ensure
                    a seamless connection between Salesforce and your existing
                    systems, third-party applications like Whatsapp, custom
                    applications,s, etc through API integration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* realestate components 5 */}

        <div data-aos="fade-up" className=" my-6">
          <div className="md:flex md:px-10 px-5">
            {/* Left Section (Heading and List) */}
            <div className="md:w-1/2 w-full h-auto md:pl-5 md:p-0 py-5 md:mt-0 mt-2">
              {/* Heading */}
              <div className="md:px-10  mb-5">
                <h2 className="md:text-3xl  text-xl md:text-start text-center font-semibold md:mb-3 capitalize">
                  Data migration
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
                  Experience a frictionless transition with our Salesforce Data
                  Migration Services. We specialize in seamlessly transferring
                  your data, ensuring accuracy, integrity, and a smooth
                  transition to Salesforce.
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
        {/* salseforce components 6 */}

        <div className=" w-full sm:px-6  py-4 mx-auto    mt-10">
          <div className="grid   grid-cols-1 place-items-center md:grid-cols-2 overflow-hidden">
            <div className="order-1 md:order-2  ">
              <h2 className="md:text-3xl my-4  text-xl md:text-start text-center font-semibold md:mb-3 capitalize">
                Salesforce Training & Support
              </h2>
              <div className="order-3 md:order-3  ">
                <div className="w-full text-xs hidden md:block sm:text-base  text-gray-600 mx-auto md:px-10 ">
                  <p>
                    Elevate your team s Salesforce skills effortlessly with our
                    tailored Training & Support services. From hands-on
                    workshops to on-demand assistance, we ve got your back at
                    every step. Empower your workforce, enhance productivity,
                    and unlock the full potential of Salesforce with our expert
                    guidance. Seamless training, reliable support – your
                    Salesforce success simplified.
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
              <div className=" md:hidden w-full mx-auto md:px-10 px-0 block ">
                <div className=" w-full mx-auto md:px-0 px-4">
                  <p></p>
                </div>
                Elevate your team s Salesforce skills effortlessly with our
                tailored Training & Support services. From hands-on workshops to
                on-demand assistance, we ve got your back at every step. Empower
                your workforce, enhance productivity, and unlock the full
                potential of Salesforce with our expert guidance. Seamless
                training, reliable support – your Salesforce success simplified.
              </div>
            </div>
          </div>
        </div>

        {/* image animate bouncy section */}
        <div
          data-aos="fade-up"
          className="flex flex-col items-center py-5 bg-blue-300"
        >
          <h2 className=" text-center md:text-3xl px-3  text-xl font-semibold">
            We Offer Salesforce Services For Following Salesforce Products​
          </h2>
          <p className="text-gray-600 px-3 pt-3 text-center">
            Do you want to Streamline your business process using Salesforce
            products? if yes
          </p>
          <div className="grid grid-cols-2 px-3 pb-2 md:grid-cols-4 gap-10 md:p-10 cursor-pointer">
            {businesses.slice(0, displayCount).map((business, index) => (
              <div
                key={index}
                className="grid place-items-center bg-white shadow-md rounded-lg  p-5 border border-gray-100"
              >
                <img
                  src={business.img}
                  alt={business.alt}
                  className="w-full h-2/5 object-cover rounded-lg hover:animate-bounceY"
                />
                <p className="text-center w-full text-blue-500  ">
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
        <div data-aos="fade-up" className=" my-5">
          <div className=" md:px-12 md:py-12 px-5 ">
            <h2 className=" font-semibold  text-gray-400  text-md md:text-lg">
              Why us
            </h2>
            <h3 className=" md:text-3xl font-semibold  text-md">
              Why Choose Us For salesforce Services?
            </h3>
            <h3 className=" py-2 text-md">
              Some of the following reasons to choose 4steps Digital Consulting
              Pvt Ltd for Salesforce consulting services
            </h3>
          </div>
          <Choose />
        </div>

        {/* contact page  */}
        <div data-aos="fade-up" className="  my-10    bg-gray-200  py-10">
          <Calltoaction />
        </div>
        {/* how we work section */}
        <div className=" my-5">
          <Wework />
        </div>

        {/* industries we serve  */}
        <div data-aos="fade-up" className="">
          <Industry />
        </div>
        {/* footer section */}
        <Footer />
      </div>
    </>
  );
};

export default Salseforce;
