import react, { useState } from "react";
import Nav from "@/Component/Header/Nav";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/Component/Resource/Hero";
export default function Resource() {
  const [showMoreIndustries, setShowMoreIndustries] = useState(false);
  const [showMoreDepartments, setShowMoreDepartments] = useState(false);
  const [showOther, setOther] = useState(false);
  const resources = [
    { href: "/resource/webinar", label: "Webinar" },
    { href: "/resource/product", label: "Product" },
    { href: "/resource/case-studies", label: "Case & studies" },
    { href: "/resource/demo-videos", label: "Demos & Videos" },
    { href: "/resource/blog", label: "Blog" },
  ];

  // Data for checkboxes (Industries and Departments)
  const industries = [
    "Banking and Financial Services",
    "Customer Experience",
    "Energy and Utilities",
    "Healthcare",
    "Hospitality",
  ];

  const departments = [
    "Contact Center",
    "Finance and Accounting",
    "Human Resources (HR)",
    "Information Technology (IT)",
    "other",
  ];

  const other = ["Marketing", "Sales", "abc", "abcd", "abcde"];

  return (
    <>
      <div>
        <Nav />
      </div>

      <div className=" container">
        <div className="container mx-auto mt-20 md:mt-0 px-4 sm:px-8 lg:px-16 py-12 sm:py-16 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16">
            {/* Text Section */}
            <div className="text-center lg:text-left lg:max-w-xl space-y-6">
              <h1 className="text-3xl sm:text-4xl font-bold text-orange-600 capitalize leading-tight">
                All Section Here
              </h1>
              <p className="mt-4 text-base sm:text-lg text-gray-700 font-light tracking-wide">
                I hated every minute of training, but I said, Dont quit. ...
              </p>
            </div>

            {/* Image Section */}
            <div className="flex justify-center lg:justify-end">
              <Image
                aria-hidden="true"
                alt="Inspiring web design"
                src="https://images.unsplash.com/photo-1621763540919-1a0477861102?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViaW5hcnxlbnwwfHwwfHx8MA%3D%3D"
                width={400}
                height={500}
                className="rounded-lg shadow-lg object-cover transform hover:scale-105 transition duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>

        <div className=" bg-[#F1F5F9]">
          <div className="flex items-center justify-center py-10 px-5 ">
            <div className="flex flex-wrap gap-4 justify-center">
              {resources.map((resource, index) => (
                <Link key={index} href={resource.href} className="btn_filter">
                  {resource.label}
                </Link>
              ))}
            </div>
          </div>

          {/* whole struture of side filter and promo page  */}
          <div className=" px-10 grid grid-cols-1 xl:grid-cols-[300px,2fr]  py-2 gap-10 relative">
            <div className="relative">
              <div className="">
                <div className="bg-white rounded-lg shadow-md p-4">
                  <h2 className="text-lg font-semibold mb-4">FILTER BY:</h2>

                  {/* Industries */}
                  <div className="mb-6 border border-gray-300 rounded p-2">
                    <h3 className="font-semibold text-md mb-2">Industries</h3>

                    {/* Display first 3 industries by default */}
                    {industries
                      .slice(0, showMoreIndustries ? industries.length : 3)
                      .map((industry, index) => (
                        <label className="flex items-center mb-1" key={index}>
                          <input
                            type="checkbox"
                            className="form-checkbox h-4 w-4 text-blue-600"
                          />
                          <span className="ml-2">{industry}</span>
                        </label>
                      ))}

                    {/* Show More/Less button */}
                    <button
                      className="text-blue-500 mt-2"
                      onClick={() => setShowMoreIndustries(!showMoreIndustries)}
                    >
                      {showMoreIndustries ? "Show less" : "Show more"}
                    </button>
                  </div>

                  {/* Departments */}
                  <div className="mb-6 border border-gray-300 rounded p-4">
                    <h3 className="font-semibold text-md mb-2">Departments</h3>

                    {/* Display first 3 departments by default */}
                    {departments
                      .slice(0, showMoreDepartments ? departments.length : 3)
                      .map((department, index) => (
                        <label className="flex items-center mb-1" key={index}>
                          <input
                            type="checkbox"
                            className="form-checkbox h-4 w-4 text-blue-600"
                          />
                          <span className="ml-2">{department}</span>
                        </label>
                      ))}

                    {/* Show More/Less button */}
                    <button
                      className="text-blue-500 mt-2"
                      onClick={() =>
                        setShowMoreDepartments(!showMoreDepartments)
                      }
                    >
                      {showMoreDepartments ? "Show less" : "Show more"}
                    </button>
                  </div>

                  {/* Other filters */}
                  <div className="mb-6 border border-gray-300 rounded p-4">
                    <h3 className="font-semibold text-md mb-2">
                      Other Section
                    </h3>
                    {/* Display other section and show only 3 departments */}
                    {other
                      .slice(0, showOther ? other.length : 3)
                      .map((otherItem, index) => (
                        <label className="flex items-center mb-1" key={index}>
                          <input
                            type="checkbox"
                            className="form-checkbox h-4 w-4 text-blue-600"
                          />
                          <span className="ml-2">{otherItem}</span>
                        </label>
                      ))}

                    <button
                      className="text-blue-500 mt-2"
                      onClick={() => setOther(!showOther)}
                    >
                      {showOther ? "Show less" : "Show more"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* side main data */}
            <div>
              {/* card 1 */}

              <div className="flex justify-center max-w-3xl pb-2 mx-auto items-center">
                <div className="bg-white shadow-lg items-center rounded-lg p-3 h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {/* Section 1: Image */}
                  <div className="flex justify-center sm:col-span-2 md:col-span-1">
                    <Image
                      src="/image/try.jpeg" // Replace with your image source
                      alt="Service"
                      height={220}
                      width={220}
                      className="rounded object-cover"
                    />
                  </div>

                  {/* Section 2: Text and Rating */}
                  <div className="flex flex-col border-t sm:border-t-0 md:border-l border-gray-300 px-3">
                    <h2 className="text-lg font-bold">Webinar Title</h2>
                    <div className="flex text-gray-800 font-normal mt-1">
                      <span className="mr-2">key points...of webinar</span>
                    </div>
                    <p className="mt-1 text-sm md:text-xs line-clamp-3 text-gray-700">
                      A paragraph is defined as “a group of sentences or a
                      single sentence that forms a...
                    </p>
                  </div>

                  {/* Section 3: Pricing and Button */}
                  <div className="flex flex-col border-t sm:border-t-0 md:border-l border-gray-300 px-4">
                    <div className="text-center md:text-left">
                      <div className="text-green-600 text-md py-1 font-semibold">
                        Speaker...vivek chauhan
                      </div>

                      <div>
                        <p className="text-gray-900 text-sm">
                          Date: 02-10-2024
                        </p>
                        <p className="text-gray-900 text-sm">time: 40min</p>
                      </div>
                    </div>
                    <button className="mt-4 w-full bg-orange-500 text-white px-4 py-2 rounded self-center md:self-start">
                      VIEW DETAILS
                    </button>
                  </div>
                </div>
              </div>

              {/* card-2 upcoming webinar  */}
              <div className="flex relative justify-center max-w-3xl mx-auto items-center  pb-8">
                <div className="bg-white shadow-lg items-center rounded-lg p-3 mt-5 h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 relative">
                  {/* Section 1: "Upcoming Webinars" Badge */}
                  <div className="absolute top-2">
                    <div className="rounded-r-sm px-2 bg-black">
                      <p className="py-1 text-xs text-white">
                        Upcoming Webinars
                      </p>
                    </div>
                  </div>

                  {/* Section 2: Image */}
                  <div className="flex justify-center sm:col-span-2 md:col-span-1">
                    <Image
                      src="/image/try.jpeg" // Replace with your image source
                      alt="Service"
                      height={220}
                      width={220}
                      className="rounded object-cover"
                    />
                  </div>

                  {/* Section 3: Text and Rating */}
                  <div className="flex flex-col border-t sm:border-t-0 md:border-l border-gray-300 px-3">
                    <h2 className="text-lg font-bold">Webinar title</h2>
                    <div className="flex text-gray-800 font-normal mt-1">
                      <span className="mr-2">key points...of webinar</span>
                    </div>
                    <p className="mt-1 text-sm md:text-xs line-clamp-3 text-gray-700">
                      A paragraph is defined as “a group of sentences or a
                      single sentence that forms a...
                    </p>
                  </div>

                  {/* Section 4: Pricing and Button */}
                  <div className="flex flex-col border-t sm:border-t-0 md:border-l border-gray-300 px-4">
                    <div className="text-center md:text-left">
                      <div className="text-green-600 text-md py-1 font-semibold">
                        Speaker...rakesh kumar
                      </div>

                      <div>
                        <p className="text-gray-900 text-sm">
                          Date: 02-10-2024
                        </p>
                        <p className="text-gray-900 text-sm">time: 40min</p>
                      </div>
                    </div>
                    <button className="mt-4 bg-orange-500 w-full text-white px-4 py-2 rounded self-center md:self-start">
                      VIEW DETAILS
                    </button>
                  </div>
                </div>
              </div>

              {/* horizontal cards ends  */}
            </div>
          </div>
          <div className="text-end p-10">Pagination page... main .........</div>
        </div>
      </div>
    </>
  );
}
