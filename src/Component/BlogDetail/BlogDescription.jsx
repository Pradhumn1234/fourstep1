import React from "react";

import Image from "next/image";
import SuggestedBlog from "./SuggestedBlog";
import { Link as ScrollLink } from "react-scroll";
import BlogSideForm from "./BlogSideForm";
const BlogDescription = ({ blogPackageData,filterSuggestedBlogData }) => {
  return (
    <div>
      {/* Blog BlogDescription section start*/}
      <div className="container-wrapper py-9">
        <div className="  grid grid-cols-1  xl:grid-cols-[2fr,1fr]">
          <div className=" bg-white shadow-md px-4 py-4 ">
            <div id="ItinerarySubSection" className="">
              <p
                dangerouslySetInnerHTML={{
                  __html: blogPackageData?.contentsummary,
                }}
              ></p>
            </div>
            {blogPackageData?.blogQuestions?.map((item, i) => (
              <div key={i} className="pt-3" id={`${item?._id}`}>
                <h3 className="text-[25px] font-medium mb-2">{item?.title}</h3>
                <p className="text-base leading-relaxed">
                  <p
                    dangerouslySetInnerHTML={{ __html: item?.information }}
                  ></p>
                </p>
                {item?.blogSubQuestion?.questions?.length > 0 &&
                  item?.blogSubQuestion?.questions?.map((item1, k) => (
                    <div key={k} className="pt-7" id={`${item1?._id}st${k}`}>
                      <h3 className="text-[30px] font-medium mb-2">
                        {k + 1}
                        {"."} {item1?.title}
                      </h3>
                      <p className="text-base leading-relaxed">
                        <p
                          dangerouslySetInnerHTML={{
                            __html: item1?.information,
                          }}
                        ></p>
                      </p>
                    </div>
                  ))}
              </div>
            ))}
          </div>
          {/* for sider section  */}
          <div className="px-6  test-base">
            <div className="sticky top-0 z-10">
              <BlogSideForm />
              {/* main code by pradhumn */}
              {/* <div className="">
                {blogPackageData?.blogQuestions?.map((item, i) => (
                  <ScrollLink
                    key={i}
                    to={`${item?._id}`}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    <p className="text-md font-medium mb-2  hover:cursor-pointer hover:text-primary">
                      {item?.title}
                    </p>
                    <ol className="text-para font-normal ml-10">
                      {item?.blogSubQuestion?.questions?.length > 0 &&
                        item?.blogSubQuestion?.questions?.map((item1, k) => (
                          <ScrollLink
                            to={`${item1?._id}st${k}`}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                          >
                            {" "}
                            <li
                              key={k}
                              className="hover:cursor-pointer  hover:text-primary"
                            >
                              {item1?.title}
                            </li>
                          </ScrollLink>
                        ))}
                    </ol>
                  </ScrollLink>
                ))}
              </div> */}
              {/* content side bar subquestion and table content */}
              <p className=" text-xl pb-6 font-semibold "> Table of Content </p>
              <div className=" overflow-y-scroll h-[450px]">
                <table className="min-w-full table-auto border-collapse">
                  <tbody>
                    {blogPackageData?.blogQuestions?.map((item, i) => (
                      <React.Fragment key={i}>
                        <tr className="border-b">
                          <td className="px-4 py-2 text-md font-medium">
                            <ScrollLink
                              to={`${item?._id}`}
                              spy={true}
                              smooth={true}
                              offset={-100}
                              duration={500}
                            >
                              {item?.title}
                            </ScrollLink>
                          </td>
                        </tr>
                        {item?.blogSubQuestion?.questions?.map((item1, k) => (
                          <tr key={k} className="border-b">
                            <td className="px-4 py-2 ml-6 text-para font-normal">
                              <ScrollLink
                                to={`${item1?._id}st${k}`}
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                              >
                                <p className="hover:cursor-pointer hover:text-primary">
                                  {k + 1}- {item1?.title}
                                </p>
                              </ScrollLink>
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  Suggested Blog here*/}
      <div>
        <SuggestedBlog filterSuggestedBlogData={filterSuggestedBlogData}/>
      </div>
      {/* Blog BlogDescription section end*/}
    </div>
  );
};

export default BlogDescription;
