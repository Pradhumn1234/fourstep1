import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useAppContext } from "../Context/context";
import Pagination from "react-js-pagination";

//  for the webinar section api calling
const fetchAllWebinar = async () => {
  return await (await fetch("/api/webinar/webinar", { method: "GET" })).json();
};

// for the product section api calling

const fetchAllProduct = async () => {
  try {
    const response = await fetch("/api/product/product", { method: "GET" });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching product data:", error);
    return [];
  }
};
// api calling  for the case&Studies

const fetchAllCaseStudies = async () => {
  try {
    const response = await fetch("/api/casestudy/casestudy", { method: "GET" });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("error fetching the case study data", error);
    return [];
  }
};

const fetchBlog = async () => {
  try {
    const response = await fetch("/api/blog/blogdetail", { method: "GET" });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("error fetching the case study data", error);
  }
};
const fetchDemoAndVideos = async () => {
  try {
    const response = await fetch("/api/videos/video", { method: "GET" });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("error fetching the demoes and videos data", error);
  }
};

const MainData = ({ Heading }) => {
  const router = useRouter();
  const [allTypeData, setAllTypeData] = useState([]);
  const { data } = useAppContext();
  // console.log("data of context here---> ", data);
  useEffect(() => {
    fetchAllWebinar().then((res) => {
      setAllTypeData(res || []);
    });
  }, []);

  const [allProductData, setAllProductData] = useState([]);

  useEffect(() => {
    fetchAllProduct().then((res) => {
      setAllProductData(res.data || []);
    });
  }, []);

  const [allCaseStudy, setAllCaseStudy] = useState([]);
  const [paginationPackages,setPaginationPackages]=useState([]);

  useEffect(() => {
    fetchAllCaseStudies().then((res) => {
      setAllCaseStudy(res.data || []);
    });
  }, []);

  const [allBlog, setAllBlog] = useState([]);
  useEffect(() => {
    fetchBlog().then((res) => {
      setAllBlog(res.data || []);
      
    });
  }, []);

  const [allvideo, setAllVideos] = useState([]);

  useEffect(() => {
    fetchDemoAndVideos().then((res) => {
      setAllVideos(res.data || []);
    });
  }, []);
  useEffect(() => {
    if (Heading === "webinar") {
      if (data?.length > 0) {
        setAllTypeData(data);
        setPaginationPackages(data);
      } else {
        fetchAllWebinar().then((res) => {
          setAllTypeData(res || []);
          setPaginationPackages(res|| []);
        });
      }
    }
    if (Heading === "product") {
      if (data?.length > 0) {
        setAllProductData(data);
        setPaginationPackages(data);
      } else {
        fetchAllProduct().then((res) => {
          setAllProductData(res.data || []);
          setPaginationPackages(res?.data|| []);
        });
      }
    }

    if (Heading === "case-studies") {
      if (data?.length > 0) {
        setAllCaseStudy(data);
        setPaginationPackages(data);
      } else {
        fetchAllCaseStudies().then((res) => {
          setAllCaseStudy(res.data || []);
          setPaginationPackages(res?.data|| []);
        });
      }
    }
    if (Heading === "demo-videos") {
      if (data?.length > 0) {
        setAllVideos(data);
        setPaginationPackages(data);
      } else {
        fetchDemoAndVideos().then((res) => {
          setAllVideos(res.data || []);
          setPaginationPackages(res?.data|| []);
        });
      }
    }
    if (Heading === "blog") {
      if (data?.length > 0) {
        setAllBlog(data);
        setPaginationPackages(data);
      } else {
        fetchBlog().then((res) => {
          setAllBlog(res.data || []);
          setPaginationPackages(res?.data|| []);
        });
      }
    }
  }, [data?.length, Heading]);


  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);


  

 
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    const windowHeight = window.innerHeight;
    const middleOfWindow = windowHeight / 2;
    window.scrollTo({ top: middleOfWindow, behavior: "smooth" });
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = paginationPackages?.slice(indexOfFirstItem, indexOfLastItem);
  const totalItems = paginationPackages?.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <>
      <div>
        {/*  for webinar section  done  */}
        {allTypeData?.[0] === "No webinars found" ? (
          <p className=" text-center font-bold mt-10">No records founds</p>
        ) : (
          <div>
            {Heading === "webinar" &&
              currentItems?.map((item, i) => (
                <div
                  key={i}
                  className="flex relative justify-center max-w-3xl mx-auto items-center  pb-3"
                >
                  <div className="bg-white shadow-md items-center rounded-lg p-3  h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 relative">
                    {(item?.selectType === "upcoming" ||
                      item?.selectType === "on-demond") && (
                      <div className="absolute top-2">
                        <div className="rounded-r-sm px-2 bg-black">
                          <p className="py-1 text-xs text-white">
                            Upcoming Webinars
                          </p>
                        </div>
                      </div>
                    )}
                    <div className="flex justify-center sm:col-span-2 md:col-span-1">
                      <Image
                        src={item?.path}
                        alt="Service"
                        height={400}
                        width={400}
                        className="rounded object-cover max-w-[200px] max-h-[100px]"
                      />
                    </div>

                    <div className="flex flex-col border-t sm:border-t-0 md:border-l border-gray-300 px-3">
                      <h2 className="text-md capitalize font-semibold">
                        {item?.title}
                      </h2>
                      <div className="flex text-gray-800 font-normal mt-1">
                        <span className="mr-1 capitalize py-1 text-[14px] line-clamp-2">
                          {item?.subtitle}
                        </span>
                      </div>
                      <p className="mt-1 text-sm md:text-xs line-clamp-3 text-gray-700">
                        {item?.description}
                      </p>
                    </div>

                    <div className="flex flex-col border-t sm:border-t-0 md:border-l border-gray-300 px-4">
                      <div className="text-center md:text-left">
                        <div className="text-primary capitalize text-md py-1 font-semibold">
                          {item?.speaker?.name}
                        </div>

                        <div className=" ">
                          <p className="text-gray-900 text-sm">
                            Date: {item?.date}
                          </p>
                          <p className="text-gray-900 text-sm">
                            time: {item?.time}min
                          </p>
                        </div>
                      </div>
                      <Link href={`/resource/${Heading}/${item.title}`}>
                        <button className="mt-3 block w-full select-none rounded-lg bg-gradient-to-r from-orange-500 to-red-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none">
                          VIEW DETAILS
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}

        {/* for the product section  */}
        {allProductData?.[0] === "No products found" ? (
          <p className=" text-center font-bold mt-10">No records founds</p>
        ) : (
          <div>
            {Heading === "product" &&
              currentItems?.length > 0 &&
              currentItems?.map((product, i) => (
                <div
                  key={i}
                  className="flex justify-center max-w-3xl pb-3 mx-auto items-center"
                >
                  <div className="bg-white shadow-lg items-center rounded-lg p-3 h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="flex justify-center sm:col-span-2 md:col-span-1">
                      <Image
                        src={product?.path}
                        alt="Service"
                        height={400}
                        width={400}
                        className="rounded object-cover max-w-[200px] max-h-[100px]"
                      />
                    </div>

                    <div className="flex flex-col border-t sm:border-t-0 md:border-l border-gray-300 px-3">
                      <h2 className="text-md capitalize font-semibold">
                        {product?.title}
                      </h2>
                      <div className="flex text-gray-800 font-normal mt-1">
                        <span className="mr-1 capitalize py-1 text-[14px] line-clamp-2">
                          {product?.subtitle}
                        </span>
                      </div>
                      <p className="mt-1 text-sm md:text-xs line-clamp-3 text-gray-700">
                        {product?.description}
                      </p>
                    </div>

                    <div className="flex flex-col border-t sm:border-t-0 md:border-l border-gray-300 px-4">
                      <div className="text-center md:text-left">
                        <div className="text-primary   text-base  base-1 py-2 font-semibold">
                          {/* services: zoho consulting */}
                          {product.service}
                        </div>

                        <div>
                          <p className="text-gre-500    text-base">
                            {/* Industry:industry */}
                            {product?.industry}
                          </p>
                        </div>
                      </div>

                      <Link href={`/resource/${Heading}/${product.title}`}>
                        <button className="mt-3 block w-full select-none rounded-lg bg-gradient-to-r from-orange-500 to-red-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-semibold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none">
                          VIEW DETAILS
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}

        {/*  for the Case-studies section */}

        {allCaseStudy?.[0] === "No products found" ? (
          <p className=" text-center font-bold mt-10">No records founds</p>
        ) : (
          <div>
            {Heading === "case-studies" &&
              currentItems?.length > 0 &&
              currentItems?.map((casestudy, i) => (
                <div
                  key={i}
                  className="flex justify-center max-w-3xl pb-3 mx-auto items-center"
                >
                  <div className="bg-white shadow-lg items-center rounded-lg p-3 h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="flex justify-center sm:col-span-2 md:col-span-1">
                      <Image
                        src={casestudy?.path}
                        alt="Service"
                        height={400}
                        width={400}
                        className="rounded object-cover max-w-[200px] max-h-[100px]"
                      />
                    </div>

                    <div className="flex flex-col border-t sm:border-t-0 md:border-l border-gray-300 px-3">
                      <h2 className="text-md capitalize font-semibold">
                        {casestudy?.title}
                      </h2>
                      <div className="flex text-gray-800 font-normal mt-1">
                        <span className="mr-1 capitalize py-1 text-[14px] line-clamp-2">
                          {casestudy?.subtitle}
                        </span>
                      </div>
                      <p className="mt-1 text-sm md:text-xs line-clamp-3 text-gray-700">
                        {casestudy?.description}
                      </p>
                    </div>

                    <div className="flex flex-col border-t sm:border-t-0 md:border-l border-gray-300 px-4">
                      <div className="text-center md:text-left">
                        <div className="text-primary   text-base  base-1 py-2 font-semibold">
                          {/* services: zoho consulting */}
                          {casestudy.service}
                        </div>

                        <div>
                          <p className="text-gre-500    text-base">
                            {/* Industry:industry */}
                            {casestudy?.industry}
                          </p>
                        </div>
                      </div>
                      <Link
                        href={`/resource/${Heading}/${casestudy?.title
                          ?.split(" ")
                          ?.join("-")}`}
                      >
                        <button className="mt-3 block w-full select-none rounded-lg bg-gradient-to-r from-orange-500 to-red-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none">
                          VIEW DETAILS
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          
          </div>
        )}
      

        {allvideo?.[0] === "No products found" ? (
          <p className=" text-center font-bold mt-10">No records founds</p>
        ) : (
          <div>
            {/* demoes and videos */}
            {Heading === "demo-videos" &&
              currentItems?.map((video, i) => (
                <div
                  key={i}
                  className="flex justify-center max-w-3xl pb-3 mx-auto items-center"
                >
                  <div className="bg-white shadow-lg items-center rounded-lg p-3 h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="flex justify-center sm:col-span-2 md:col-span-1">
                      <Image
                        src={video?.path}
                        alt={video?.altText}
                        height={400}
                        width={400}
                        className="rounded object-cover max-w-[200px] max-h-[100px]"
                      />
                    </div>

                    <div className="flex flex-col border-t sm:border-t-0 md:border-l border-gray-300 px-3">
                      <h2 className="text-md capitalize font-semibold">
                        {video?.title}
                      </h2>
                      <div className="flex text-gray-800 font-normal mt-1">
                        <span className="mr-1 capitalize py-1 text-[14px] line-clamp-2">
                          {video?.subtitle}
                        </span>
                      </div>
                      <p className="mt-1 text-sm md:text-xs line-clamp-3 text-gray-700">
                        {video?.description}
                      </p>
                    </div>

                    <div className="flex flex-col border-t sm:border-t-0 md:border-l border-gray-300 px-4">
                      <div className="text-center md:text-left">
                        <div className="text-primary   text-base  base-1 py-2 font-semibold">
                          {video?.user?.name}
                        </div>

                        <div>
                          <p className="text-gre-500    text-base">
                            {video?.industry}
                          </p>
                        </div>
                      </div>
                      <Link href={`/resource/${Heading}/${video?.title}`}>
                        {/* ?.split(" ")
                     .join("-") */}
                        <button className="mt-3 block w-full select-none rounded-lg bg-gradient-to-r from-orange-500 to-red-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none">
                          VIEW DETAILS
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}

        {/*  for the blog section   */}

        {currentItems?.[0] === "No products found" ? (
          <p className=" text-center font-bold mt-10">No records founds</p>
        ) : (
          <div>
            {Heading === "blog" &&
              currentItems?.map((blog, i) => (
                <div
                  key={i}
                  className="flex justify-center max-w-3xl pb-2 mx-auto items-center"
                >
                  <div className="bg-white shadow-lg items-center rounded-lg p-3 h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="flex justify-center sm:col-span-2 md:col-span-1">
                      <Image
                        src={blog?.videoPath}
                        alt="Service"
                        height={220}
                        width={220}
                        className="rounded object-cover max-w-[200px] max-h-[100px]"
                      />
                    </div>

                    <div className="flex flex-col border-t sm:border-t-0 md:border-l border-gray-300 px-3">
                      <h2 className="text-md capitalize font-semibold">
                        {blog?.title}
                      </h2>
                      <div className="flex text-gray-800 font-normal mt-1">
                        <span className="mr-1 capitalize py-1 text-[14px] line-clamp-2">
                          {blog?.subTitle}
                        </span>
                      </div>
                      <p className="mt-1 text-sm md:text-xs line-clamp-3 text-gray-700">
                        {blog?.description}
                      </p>

                      <div>
                        <p className="text-gray-900 pt-3 text-sm">
                          Date: 02-10-2024
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col border-t sm:border-t-0 md:border-l border-gray-300 px-4">
                      <div className="text-center md:text-left"></div>
                      <Link
                        href={`/resource/${Heading}/${blog?.title
                          ?.split(" ")
                          ?.join("-")}`}
                      >
                        <button className="mt-3 block w-full select-none rounded-lg bg-gradient-to-r from-orange-500 to-red-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none">
                          VIEW DETAILS
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
            <div className="flex justify-end my-5 list-none">
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={itemsPerPage}
          totalItemsCount={paginationPackages?.length}
          onChange={handlePageChange}
          itemClass="pagination-item"
          linkClass="pagination-link"
          prevPageText="Previous"
          nextPageText="Next"
          firstPageText="1"
          lastPageText={`...${totalPages}`}
          innerClass="pagination"
        />
      </div>
      </div>
    </>
  );
};

export default MainData;
