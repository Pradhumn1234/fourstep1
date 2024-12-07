import React from "react";
import { Footer } from "@/Component/Footer/Footer";
import Industry from "@/Component/Industry/Industry";
import Wework from "@/Component/Web/Wework";
import Nav from "@/Component/Header/Nav";
import Calltoaction from "@/Component/Web/Calltoaction";

const ecommerce = () => {
  return (
    <>
      {/* navbar section */}
      <div className="fixed w-full z-20 top-0">
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
              E-Commerce Store
            </h1>
            <p className="text-xs sm:text-lg md:text-xl">
              Impress Your Customer with a Professional Website for Your
              Business
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center text-center gap-3 md:pt-6 pt-2">
              <button className="bg-blue-500 h-8 sm:h-10 md:h-14 w-40 md:text-lg text-xs  sm:w-52 md:w-56 text-white py-2 px-4 rounded">
                Talk To Our Experts
              </button>
              <button className="bg-orange-500 h-8 sm:h-10 md:h-14 md:text-lg text-xs w-40 sm:w-52 md:w-56 text-white py-2 px-4 rounded">
                Get a Free Proposal
              </button>
            </div>
          </div>
        </div>

        <div className="px-4 w-full sm:px-6  md:px-10 ">
          <div className="grid grid-cols-1  md:grid-cols-2 bg-gray-100 rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <h2 className="text-md sm:text-xl md:text-2xl font-semibold mb-2 md:mb-3">
                E-Commerce Development Agency In Delhi NCR
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
            <h2 className="text-md sm:text-2xl md:text-3xl lg:text-3xl md:pt-16 pt-10 font-semibold mb-2">
              Our E-Commerce Platform
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
                  Woo Commerce
                </h2>
                <p className="text-xs sm:text-base md:text-sm text-gray-600">
                  If you’re switching to HubSpot from another CRM, We can help
                  you migrate your data and integrate it with HubSpot.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-md sm:text-xl md:text-2xl md:hidden text-center font-semibold mb-2 md:mb-3">
                  Woo Commerce
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
                  shopify
                </h2>
                <div className="order-3 md:order-3  sm:p-6">
                  <p className="text-xs hidden md:block sm:text-base md:text-sm text-gray-600">
                    If you’re switching to HubSpot from another CRM, We can help
                    you migrate your data and integrate it with HubSpot.
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
                  If you’re switching to HubSpot from another CRM, We can help
                  you migrate your data and integrate it with HubSpot.
                </p>
              </div>
            </div>
          </div>

          {/* third section */}

          <div className=" w-full sm:px-6 md:max-w-6xl mx-auto   mt-10">
            <div className="grid  px-10 grid-cols-1 place-items-center md:grid-cols-2 overflow-hidden">
              <div className="order-2 md:order-1 sm:p-6">
                <h2 className="text-md sm:text-xl md:block hidden md:text-2xl font-semibold ">
                  Zoho Commerce
                </h2>
                <p className="text-xs sm:text-base md:text-sm text-gray-600">
                  If you’re switching to HubSpot from another CRM, We can help
                  you migrate your data and integrate it with HubSpot.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-md sm:text-xl md:text-2xl md:hidden text-center font-semibold ">
                  Zoho Commerce
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
                  Magento
                </h2>
                <div className="order-3 md:order-3  sm:p-6">
                  <p className="text-xs hidden md:block sm:text-base md:text-sm text-gray-600">
                    If you’re switching to HubSpot from another CRM, We can help
                    you migrate your data and integrate it with HubSpot
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
                  If you’re switching to HubSpot from another CRM, We can help
                  you migrate your data and integrate it with HubSpot
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* for contact  */}

        <div>
          <Calltoaction />
        </div>
        {/* we work section */}
        <div className=" py-3">
          <Wework />
        </div>
        {/* industry we use */}
        <div className=" pt-10">
          <Industry />
        </div>
        {/* footer section */}
        <Footer />
      </div>
    </>
  );
};

export default ecommerce;
