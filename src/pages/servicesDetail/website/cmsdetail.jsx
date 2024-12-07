import React from "react";
// import TechUse from "@/Component/Web/TechUse";
import { Footer } from "@/Component/Footer/Footer";
import Wework from "@/Component/Web/Wework";
import Nav from "@/Component/Header/Nav";
import Calltoaction from "@/Component/Web/Calltoaction";

const cmsdetail = () => {
  return (
    <>
      {/* navbar section */}
      <div className="  w-full z-20 fixed top-0">
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
            <h1 className="text-md sm:text-xl md:text-2xl lg:text-3xl md:pt-16 pt-10 font-semibold mb-2">
              CMS Web Development
            </h1>
            <p className="text-xs sm:text-lg md:text-xl">
              Impress Your Customer with a Professional Website for Your
              Business
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center text-center gap-3 md:pt-6 pt-2">
              <button className="bg-blue-500 h-10 sm:h-14 md:h-16 w-40 md:text-lg text-xs  sm:w-52 md:w-56 text-white py-2 px-4 rounded">
                Talk To Our Experts
              </button>
              <button className="bg-orange-500 h-10 sm:h-14 md:h-16 md:text-lg text-xs w-40 sm:w-52 md:w-56 text-white py-2 px-4 rounded">
                Get a Free Proposal
              </button>
            </div>
          </div>
        </div>

        {/* card after hero  absolute  top-[35%] sm:top-[75%] md:top-[70%] lg:top-[65%]*/}
        {/* flex and grid both */}
        {/* <div className=" px-4 w-full  sm:px-6 md:px-10  ">
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

        <div className="px-4 w-full sm:px-6  md:px-10 ">
          <div className="grid grid-cols-1  md:grid-cols-2 bg-gray-100 rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <h2 className="text-md sm:text-lg md:text-xl font-semibold mb-2 md:mb-3">
                Website Development Agency In Delhi NCR
              </h2>
              <p className="text-sm sm:text-base md:text-sm text-gray-600">
                Four Steps Digital Consulting Pvt Ltd is a website development
                company in Delhi NCR. We offer CMS website development services
                including WordPress website, Zoho site, Zoho e-commerce website,
                and Shopify website for small and medium businesses. We Build
                <b>Affordable, Easy-To-Use & Mobile Friendly websites </b> for
                your business that will help to attract 10x more new customers.
              </p>
              <button className="bg-blue-500 mt-4 h-8 sm:h-14 md:h-14 md:text-lg text-xs w-40 sm:w-52 md:w-56 text-white py-2 px-2 rounded">
                Get a Free Consulting
              </button>
            </div>
            <div className="py-5">
              <img
                src="/image/132.png"
                alt="Card Image"
                className="w-full h-40 sm:h-48 md:h-64 object-cover"
              />
            </div>
          </div>
        </div>

        {/*  detail page design  */}

        <div>
          <div className=" text-center px-4">
            <h2 className="text-md sm:text-xl md:text-2xl lg:text-2xl md:pt-16 pt-10 font-semibold mb-2">
              Our CMS Platform
            </h2>
            <p className="text-xs sm:text-lg md:text-base">
              We offer local & national SEO services for small business for
              Google search engine. Our search engine optimization(SEO) services
              include
            </p>
          </div>
          {/* first section */}

          <div className=" w-full sm:px-6 md:max-w-6xl mx-auto    mt-10">
            <div className="grid  px-10 grid-cols-1 place-items-center md:grid-cols-2 overflow-hidden">
              <div className="order-2 md:order-1  sm:p-6">
                <h2 className="text-md sm:text-xl md:block hidden md:text-2xl font-semibold mb-2 md:mb-3">
                  WordPress Website
                </h2>
                <p className="text-xs sm:text-base md:text-sm text-gray-600">
                  Under this service, we design & develop business websites
                  using WordPress. We use free and premium WordPress themes per
                  your website’s feature requirements.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-md sm:text-xl md:text-2xl md:hidden text-center font-semibold mb-2 md:mb-3">
                  WordPress Website
                </h2>
                <img
                  src="/image/132.png"
                  alt="Card Image"
                  className="w-full h-40 sm:h-48 md:h-64 object-cover"
                />
              </div>
            </div>
          </div>
          {/* second section */}

          <div className=" w-full sm:px-6 md:max-w-6xl mx-auto    mt-10">
            <div className="grid  px-10 grid-cols-1 place-items-center md:grid-cols-2 overflow-hidden">
              <div className="order-1 md:order-2  sm:p-6">
                <h2 className="text-md sm:text-xl md:text-2xl font-semibold ">
                  Hubspot CMS Website
                </h2>
                <div className="order-3 md:order-3  sm:p-6">
                  <p className="text-xs hidden md:block sm:text-base md:text-sm text-gray-600">
                    Under this service we set up Zoho Apps like Zoho CRM, Zoho
                    Books, etc for your business, configuring them according to
                    your needs, and customizing them to your brand and goals.
                  </p>
                </div>
              </div>

              <div className="order-2 md:order-1">
                <img
                  src="/image/132.png"
                  alt="Card Image"
                  className="w-full h-40 sm:h-48 md:h-64 object-cover"
                />
              </div>

              <div className="order-3 md:order-3 p-5 sm:p-6">
                <p className="text-xs md:hidden block sm:text-base md:text-sm text-gray-600">
                  Under this service we set up Zoho Apps like Zoho CRM, Zoho
                  Books, etc for your business, configuring them according to
                  your needs, and customizing them to your brand and goals.
                </p>
              </div>
            </div>
          </div>

          {/* third section */}

          <div className=" w-full sm:px-6 md:max-w-6xl mx-auto   mt-10">
            <div className="grid  px-10 grid-cols-1 place-items-center md:grid-cols-2 overflow-hidden">
              <div className="order-2 md:order-1 sm:p-6">
                <h2 className="text-md sm:text-xl md:block hidden md:text-2xl font-semibold ">
                  Zoho Site
                </h2>
                <p className="text-xs sm:text-base md:text-sm text-gray-600">
                  Under this service we set up Zoho Apps like Zoho CRM, Zoho
                  Books, etc for your business, configuring them according to
                  your needs, and customizing them to your brand and goals.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-md sm:text-xl md:text-2xl md:hidden text-center font-semibold ">
                  Zoho Site
                </h2>
                <img
                  src="/image/132.png"
                  alt="Card Image"
                  className="w-full h-40 sm:h-48 md:h-64 object-cover"
                />
              </div>
            </div>
          </div>
          {/*  fourth section */}
          <div className=" w-full sm:px-6 md:max-w-6xl mx-auto    mt-10">
            <div className="grid  px-10 grid-cols-1 place-items-center md:grid-cols-2 overflow-hidden">
              <div className="order-1 md:order-2  sm:p-6">
                <h2 className="text-md sm:text-xl md:text-2xl font-semibold ">
                  Bitrix24 Website
                </h2>
                <div className="order-3 md:order-3  sm:p-6">
                  <p className="text-xs hidden md:block sm:text-base md:text-sm text-gray-600">
                    nder this service we set up Zoho Apps like Zoho CRM, Zoho
                    Books, etc for your business, configuring them according to
                    your needs, and customizing them to your brand and goals.
                  </p>
                </div>
              </div>

              <div className="order-2 md:order-1">
                <img
                  src="/image/132.png"
                  alt="Card Image"
                  className="w-full h-40 sm:h-48 md:h-64 object-cover"
                />
              </div>

              <div className="order-3 md:order-3 p-5 sm:p-6">
                <p className="text-xs md:hidden block sm:text-base md:text-sm text-gray-600">
                  nder this service we set up Zoho Apps like Zoho CRM, Zoho
                  Books, etc for your business, configuring them according to
                  your needs, and customizing them to your brand and goals.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* technology we use */}
        <div className=" py-10">
          <Wework />
        </div>
        {/* for contact  */}

        {/* <div className=" w-full mt-6 sm:px-6 md:max-w-6xl mx-auto  bg-gray-200  py-10">
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
              call +1234 35987
            </button>
            <button className="bg-orange-500 h-10 sm:h-14 md:h-16 md:text-lg text-xs w-40 sm:w-52 md:w-56 text-white py-2 px-3 rounded">
              Talk To Zoho Expert
            </button>
          </div>
        </div>
      </div> */}
        <div>
          <Calltoaction />
        </div>
        {/* footer section */}
        <Footer />
      </div>
    </>
  );
};

export default cmsdetail;
