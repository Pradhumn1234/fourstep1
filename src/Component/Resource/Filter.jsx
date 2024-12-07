import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { useAppContext } from "../Context/context";

const filterWebinarData = async (
  industry,
  department,
  tools,
  topics,
  languages,
  webinarType
) => {
  const data = await fetch(
    `/api/webinar/filterapi?industry=${industry}&department=${department}&tools=${tools}&topics=${topics}&languages=${languages}&webinarType=${webinarType}`
  );
  return await data.json();
};
const filterProductData = async (industry, tools, topics, services) => {
  const data = await fetch(
    `/api/product/filterapi?industry=${industry}&tools=${tools}&topics=${topics}&services=${services}`
  );
  return await data.json();
};
const filterCaseStudyData = async (industry, tools, topics, services) => {
  const data = await fetch(
    `/api/casestudy/filterapi?industry=${industry}&tools=${tools}&topics=${topics}&services=${services}`
  );
  return await data.json();
};
const filterVideosCaseStudyData = async (industry, tools, topics, languages) => {
  const data = await fetch(
    `/api/videos/filterapi?industry=${industry}&tools=${tools}&topics=${topics}&languages=${languages}`
  );
  return await data.json();
};
const filterBlogData = async (industry, tools, topics, department) => {
  const data = await fetch(
    `/api/blog/filterapi?industry=${industry}&tools=${tools}&topics=${topics}&department=${department}`
  );
  return await data.json();
};

const Filter = ({ filterGlobalData, Heading, }) => {
  const {setData}=useAppContext();
  const [showModal, setShowModal] = useState(false); // Modal state for mobile
  const [showMoreIndustries, setShowMoreIndustries] = useState(false);
  const [showMoreDepartments, setShowMoreDepartments] = useState(false);
  const [showTopics, setShowTopics] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [showService, setShowService] = useState(false);
  const [showWebinarType, setShowWebinarType] = useState(false);
  const [showTool, setShowTool] = useState(false);
  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [selectedService, setSelectedService] = useState([]);
  const [selectedWebinarType, setSelectedWebinarType] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState([]);
  const [selectedTool, setSelectedTool] = useState([]);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const handleIndustryChange = (industryName, isChecked) => {
    setSelectedIndustries((prevSelectedIndustries) => {
      if (isChecked) {
        return [...prevSelectedIndustries, industryName];
      } else {
        return prevSelectedIndustries.filter(
          (industry) => industry !== industryName
        );
      }
    });
  };
  const handleToolChange = (industryName, isChecked) => {
    setSelectedTool((prevSelectedIndustries) => {
      if (isChecked) {
        return [...prevSelectedIndustries, industryName];
      } else {
        return prevSelectedIndustries.filter(
          (industry) => industry !== industryName
        );
      }
    });
  };
  const handleTopicChange = (industryName, isChecked) => {
    setSelectedTopics((prevSelectedIndustries) => {
      if (isChecked) {
        return [...prevSelectedIndustries, industryName];
      } else {
        return prevSelectedIndustries.filter(
          (industry) => industry !== industryName
        );
      }
    });
  };
  const handleDepartmentChange = (industryName, isChecked) => {
    setSelectedDepartments((prevSelectedIndustries) => {
      if (isChecked) {
        return [...prevSelectedIndustries, industryName];
      } else {
        return prevSelectedIndustries.filter(
          (industry) => industry !== industryName
        );
      }
    });
  };
  const handleWebinarTypeChange = (industryName, isChecked) => {
    setSelectedWebinarType((prevSelectedIndustries) => {
      if (isChecked) {
        return [...prevSelectedIndustries, industryName];
      } else {
        return prevSelectedIndustries.filter(
          (industry) => industry !== industryName
        );
      }
    });
  };
  const handleLanguageChange = (industryName, isChecked) => {
    setSelectedLanguage((prevSelectedIndustries) => {
      if (isChecked) {
        return [...prevSelectedIndustries, industryName];
      } else {
        return prevSelectedIndustries.filter(
          (industry) => industry !== industryName
        );
      }
    });
  };
  const handleServiceChange = (industryName, isChecked) => {
    setSelectedService((prevSelectedIndustries) => {
      if (isChecked) {
        return [...prevSelectedIndustries, industryName];
      } else {
        return prevSelectedIndustries.filter(
          (industry) => industry !== industryName
        );
      }
    });
  };

  useEffect(() => {
    if (Heading === "webinar") {
      filterWebinarData(
        selectedIndustries,
        selectedDepartments,
        selectedTool,
        selectedTopics,
        selectedLanguage,
        selectedWebinarType
      ).then((res) => {
        
        if(res?.message==="No webinars found"){
          setData(["No webinars found"])
       }
       else{

         setData(res?.data || []);
       }
      });
    }
    if (Heading === "product") {
      filterProductData(
        selectedIndustries,
        selectedTool,
        selectedTopics,
        selectedService
      ).then(res=>{
        if(res?.message==="No products found"){
          setData(["No products found"])
       }
       else{

         setData(res?.data || []);
       }
      });
    }
    if (Heading === "case-studies") {
      filterCaseStudyData(
        selectedIndustries,
        selectedTool,
        selectedTopics,
        selectedService
      ).then(res=>{
        console.log("fetchAllCaseStudies filtered data is here-----> ",res);
        if(res?.message==="No products found"){
          setData(["No products found"])
       }
       else{

         setData(res?.data || []);
       }
      });
    }
    if (Heading === "demo-videos") {
      filterVideosCaseStudyData(
        selectedIndustries,
        selectedTool,
        selectedTopics,
        selectedLanguage
      ).then(res=>{
        // console.log("demo-videos filtered data is here-----> ",res);
        if(res?.message==="No products found"){
          setData(["No products found"])
       }
       else{

         setData(res?.data || []);
       }
      });
    }
    if (Heading === "blog") {
      filterBlogData(
        selectedIndustries,
        selectedTool,
        selectedTopics,
        selectedDepartments
      ).then(res=>{
        console.log("blog filtered data is here-----> ",res);
        if(res?.message==="No products found"){
           setData(["No products found"])
        }
        else{

          setData(res?.data || []);
        }
        
      });
    }
  }, [
    selectedIndustries?.length,
    selectedDepartments?.length,
    selectedLanguage?.length,
    selectedService?.length,
    selectedTopics?.length,
    selectedTool?.length,
    selectedWebinarType?.length,
    Heading,
  ]);

  const renderFilters = () => (
    <div className="bg-white rounded-lg overflow-y-auto   shadow-md p-4">
      <h2 className="text-sm font-semibold mb-2">FILTER BY:</h2>
      {Heading === "webinar" && (
        <div>
          <div className="mb-2 border border-gray-300 rounded p-2">
            <h3 className="md:text-[16px] text-[14px] font-medium">
              Industries
            </h3>
            {filterGlobalData?.industries
              .slice(
                0,
                showMoreIndustries ? filterGlobalData?.industries?.length : 3
              )
              .map((industry, index) => (
                <label className="flex items-center" key={index}>
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    checked={selectedIndustries.includes(industry?.name)}
                    onChange={(e) =>
                      handleIndustryChange(industry?.name, e.target.checked)
                    }
                  />
                  {/* <span className="ml-2 capitalize cursor-pointer text-sm"> */}
                  <span className="ml-2  capitalize cursor-pointer label-text md:text-[14px] text-[12px]">
                    {industry?.name}
                  </span>
                </label>
              ))}
            <button
              className="text-blue-500 mt-1"
              onClick={() => setShowMoreIndustries(!showMoreIndustries)}
            >
              {showMoreIndustries ? "Show less" : "Show more"}
            </button>
          </div>
          <div className="mb-2 border border-gray-300 rounded p-2">
            <h3 className="md:text-[16px] text-[14px] font-medium">
              Tools And Softwares
            </h3>
            {filterGlobalData?.tool
              .slice(0, showTool ? filterGlobalData?.tool?.length : 3)
              .map((department, index) => (
                <label className="flex items-center" key={index}>
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    checked={selectedTool.includes(department?.name)}
                    onChange={(e) =>
                      handleToolChange(department?.name, e.target.checked)
                    }
                  />
                  {/* <span className="ml-2 capitalize cursor-pointer text-sm"> */}
                  <span className="ml-2  capitalize cursor-pointer label-text md:text-[14px] text-[12px]">
                    {department?.name}
                  </span>
                </label>
              ))}
            <button
              className="text-blue-500 mt-1"
              onClick={() => setShowTool(!showTool)}
            >
              {showTool ? "Show less" : "Show more"}
            </button>
          </div>
          <div className="mb-2 border border-gray-300 rounded p-2">
            <h3 className="md:text-[16px] text-[14px] font-medium">Topics</h3>
            {filterGlobalData?.topic
              .slice(0, showTopics ? filterGlobalData?.topic?.length : 3)
              .map((topic, index) => (
                <label className="flex items-center" key={index}>
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    checked={selectedTopics.includes(topic?.name)}
                    onChange={(e) =>
                      handleTopicChange(topic?.name, e.target.checked)
                    }
                  />
                  {/* <span className="ml-2 capitalize cursor-pointer text-sm"> */}
                  <span className="ml-2  capitalize cursor-pointer label-text md:text-[14px] text-[12px]">
                    {topic?.name}
                  </span>
                </label>
              ))}
            <button
              className="text-blue-500 mt-1"
              onClick={() => setShowTopics(!showTopics)}
            >
              {showTopics ? "Show less" : "Show more"}
            </button>
          </div>
          <div className="mb-2 border border-gray-300 rounded p-2">
            <h3 className="md:text-[16px] text-[14px] font-medium">
              Departments
            </h3>
            {filterGlobalData?.department
              .slice(
                0,
                showMoreDepartments ? filterGlobalData?.department?.length : 3
              )
              .map((topic, index) => (
                <label className="flex items-center" key={index}>
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    checked={selectedDepartments.includes(topic?.name)}
                    onChange={(e) =>
                      handleDepartmentChange(topic?.name, e.target.checked)
                    }
                  />
                  {/* <span className="ml-2 capitalize cursor-pointer text-sm"> */}
                  <span className="ml-2  capitalize cursor-pointer label-text md:text-[14px] text-[12px]">
                    {topic?.name}
                  </span>
                </label>
              ))}
            <button
              className="text-blue-500 mt-1"
              onClick={() => setShowMoreDepartments(!showMoreDepartments)}
            >
              {showMoreDepartments ? "Show less" : "Show more"}
            </button>
          </div>

          <div className="mb-2 border border-gray-300 rounded p-2">
            <h3 className="md:text-[16px] text-[14px] font-medium">
              Webinar Type
            </h3>
            {filterGlobalData?.webinarType
              ?.slice(
                0,
                showWebinarType ? filterGlobalData?.webinarType?.length : 3
              )
              .map((webinarType, index) => (
                <label className="flex items-center" key={index}>
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    checked={selectedWebinarType?.includes(webinarType?.name)}
                    onChange={(e) =>
                      handleWebinarTypeChange(
                        webinarType?.name,
                        e.target.checked
                      )
                    }
                  />
                  <span className="ml-2 capitalize cursor-pointer text-sm">
                    {webinarType?.name}
                  </span>
                </label>
              ))}
            <button
              className="text-blue-500 mt-1"
              onClick={() => setShowWebinarType(!showWebinarType)}
            >
              {showWebinarType ? "Show less" : "Show more"}
            </button>
          </div>
          <div className="mb-2 border border-gray-300 rounded p-2">
            <h3 className="md:text-[16px] text-[14px] font-medium">
              Languages
            </h3>
            {filterGlobalData?.langauge
              ?.slice(0, showLanguage ? filterGlobalData?.langauge?.length : 3)
              .map((webinarType, index) => (
                <label className="flex items-center" key={index}>
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    checked={selectedLanguage?.includes(webinarType?.name)}
                    onChange={(e) =>
                      handleLanguageChange(webinarType?.name, e.target.checked)
                    }
                  />
                  <span className="ml-2 capitalize cursor-pointer text-sm">
                    {webinarType?.name}
                  </span>
                </label>
              ))}
            <button
              className="text-blue-500 mt-1"
              onClick={() => setShowLanguage(!showLanguage)}
            >
              {showLanguage ? "Show less" : "Show more"}
            </button>
          </div>
        </div>
      )}
      {Heading === "product" && (
        <div>
          <div className="mb-2 border border-gray-300 rounded p-2">
            <h3 className="md:text-[16px] text-[14px] font-medium">
              Industries
            </h3>
            {filterGlobalData?.industries
              .slice(
                0,
                showMoreIndustries ? filterGlobalData?.industries?.length : 3
              )
              .map((industry, index) => (
                <label className="flex items-center" key={index}>
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    checked={selectedIndustries.includes(industry?.name)}
                    onChange={(e) =>
                      handleIndustryChange(industry?.name, e.target.checked)
                    }
                  />
                  {/* <span className="ml-2 capitalize cursor-pointer text-sm"> */}
                  <span className="ml-2  capitalize cursor-pointer label-text md:text-[14px] text-[12px]">
                    {industry?.name}
                  </span>
                </label>
              ))}
            <button
              className="text-blue-500 mt-1"
              onClick={() => setShowMoreIndustries(!showMoreIndustries)}
            >
              {showMoreIndustries ? "Show less" : "Show more"}
            </button>
          </div>
          <div className="mb-2 border border-gray-300 rounded p-2">
            <h3 className="md:text-[16px] text-[14px] font-medium">
              Tools And Softwares
            </h3>
            {filterGlobalData?.tool
              .slice(0, showTool ? filterGlobalData?.tool?.length : 3)
              .map((department, index) => (
                <label className="flex items-center" key={index}>
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    checked={selectedTool.includes(department?.name)}
                    onChange={(e) =>
                      handleToolChange(department?.name, e.target.checked)
                    }
                  />
                  {/* <span className="ml-2 capitalize cursor-pointer text-sm"> */}
                  <span className="ml-2  capitalize cursor-pointer label-text md:text-[14px] text-[12px]">
                    {department?.name}
                  </span>
                </label>
              ))}
            <button
              className="text-blue-500 mt-1"
              onClick={() => setShowTool(!showTool)}
            >
              {showTool ? "Show less" : "Show more"}
            </button>
          </div>
          <div className="mb-2 border border-gray-300 rounded p-2">
            <h3 className="md:text-[16px] text-[14px] font-medium">Topics</h3>
            {filterGlobalData?.topic
              .slice(0, showTopics ? filterGlobalData?.topic?.length : 3)
              .map((topic, index) => (
                <label className="flex items-center" key={index}>
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    checked={selectedTopics.includes(topic?.name)}
                    onChange={(e) =>
                      handleTopicChange(topic?.name, e.target.checked)
                    }
                  />
                  {/* <span className="ml-2 capitalize cursor-pointer text-sm"> */}
                  <span className="ml-2  capitalize cursor-pointer label-text md:text-[14px] text-[12px]">
                    {topic?.name}
                  </span>
                </label>
              ))}
            <button
              className="text-blue-500 mt-1"
              onClick={() => setShowTopics(!showTopics)}
            >
              {showTopics ? "Show less" : "Show more"}
            </button>
          </div>
          <div className="mb-2 border border-gray-300 rounded p-2">
            <h3 className="md:text-[16px] text-[14px] font-medium">Services</h3>
            {filterGlobalData?.service
              ?.slice(0, showService ? filterGlobalData?.service?.length : 3)
              .map((webinarType, index) => (
                <label className="flex items-center" key={index}>
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    checked={selectedService?.includes(webinarType?.name)}
                    onChange={(e) =>
                      handleServiceChange(webinarType?.name, e.target.checked)
                    }
                  />
                  <span className="ml-2 capitalize cursor-pointer text-sm">
                    {webinarType?.name}
                  </span>
                </label>
              ))}
            <button
              className="text-blue-500 mt-1"
              onClick={() => setShowService(!showService)}
            >
              {showService ? "Show less" : "Show more"}
            </button>
          </div>
        </div>
      )}
      {Heading === "case-studies" && (
        <div>
          <div className="mb-2 border border-gray-300 rounded p-2">
            <h3 className="md:text-[16px] text-[14px] font-medium">
              Industries
            </h3>
            {filterGlobalData?.industries
              .slice(
                0,
                showMoreIndustries ? filterGlobalData?.industries?.length : 3
              )
              .map((industry, index) => (
                <label className="flex items-center" key={index}>
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    checked={selectedIndustries.includes(industry?.name)}
                    onChange={(e) =>
                      handleIndustryChange(industry?.name, e.target.checked)
                    }
                  />
                  {/* <span className="ml-2 capitalize cursor-pointer text-sm"> */}
                  <span className="ml-2  capitalize cursor-pointer label-text md:text-[14px] text-[12px]">
                    {industry?.name}
                  </span>
                </label>
              ))}
            <button
              className="text-blue-500 mt-1"
              onClick={() => setShowMoreIndustries(!showMoreIndustries)}
            >
              {showMoreIndustries ? "Show less" : "Show more"}
            </button>
          </div>
          <div className="mb-2 border border-gray-300 rounded p-2">
            <h3 className="md:text-[16px] text-[14px] font-medium">
              Tools And Softwares
            </h3>
            {filterGlobalData?.tool
              .slice(0, showTool ? filterGlobalData?.tool?.length : 3)
              .map((department, index) => (
                <label className="flex items-center" key={index}>
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    checked={selectedTool.includes(department?.name)}
                    onChange={(e) =>
                      handleToolChange(department?.name, e.target.checked)
                    }
                  />
                  {/* <span className="ml-2 capitalize cursor-pointer text-sm"> */}
                  <span className="ml-2  capitalize cursor-pointer label-text md:text-[14px] text-[12px]">
                    {department?.name}
                  </span>
                </label>
              ))}
            <button
              className="text-blue-500 mt-1"
              onClick={() => setShowTool(!showTool)}
            >
              {showTool ? "Show less" : "Show more"}
            </button>
          </div>
          <div className="mb-2 border border-gray-300 rounded p-2">
            <h3 className="md:text-[16px] text-[14px] font-medium">Topics</h3>
            {filterGlobalData?.topic
              .slice(0, showTopics ? filterGlobalData?.topic?.length : 3)
              .map((topic, index) => (
                <label className="flex items-center" key={index}>
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    checked={selectedTopics.includes(topic?.name)}
                    onChange={(e) =>
                      handleTopicChange(topic?.name, e.target.checked)
                    }
                  />
                  {/* <span className="ml-2 capitalize cursor-pointer text-sm"> */}
                  <span className="ml-2  capitalize cursor-pointer label-text md:text-[14px] text-[12px]">
                    {topic?.name}
                  </span>
                </label>
              ))}
            <button
              className="text-blue-500 mt-1"
              onClick={() => setShowTopics(!showTopics)}
            >
              {showTopics ? "Show less" : "Show more"}
            </button>
          </div>
          <div className="mb-2 border border-gray-300 rounded p-2">
            <h3 className="md:text-[16px] text-[14px] font-medium">Services</h3>
            {filterGlobalData?.service
              ?.slice(0, showService ? filterGlobalData?.service?.length : 3)
              .map((webinarType, index) => (
                <label className="flex items-center" key={index}>
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    checked={selectedService?.includes(webinarType?.name)}
                    onChange={(e) =>
                      handleServiceChange(webinarType?.name, e.target.checked)
                    }
                  />
                  <span className="ml-2 capitalize cursor-pointer text-sm">
                    {webinarType?.name}
                  </span>
                </label>
              ))}
            <button
              className="text-blue-500 mt-1"
              onClick={() => setShowService(!showService)}
            >
              {showService ? "Show less" : "Show more"}
            </button>
          </div>
        </div>
      )}
      {Heading === "demo-videos" && (
        <div>
          <div className="mb-2 border border-gray-300 rounded p-2">
            <h3 className="md:text-[16px] text-[14px] font-medium">
              Industries
            </h3>
            {filterGlobalData?.industries
              .slice(
                0,
                showMoreIndustries ? filterGlobalData?.industries?.length : 3
              )
              .map((industry, index) => (
                <label className="flex items-center" key={index}>
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    checked={selectedIndustries.includes(industry?.name)}
                    onChange={(e) =>
                      handleIndustryChange(industry?.name, e.target.checked)
                    }
                  />
                  {/* <span className="ml-2 capitalize cursor-pointer text-sm"> */}
                  <span className="ml-2  capitalize cursor-pointer label-text md:text-[14px] text-[12px]">
                    {industry?.name}
                  </span>
                </label>
              ))}
            <button
              className="text-blue-500 mt-1"
              onClick={() => setShowMoreIndustries(!showMoreIndustries)}
            >
              {showMoreIndustries ? "Show less" : "Show more"}
            </button>
          </div>
          <div className="mb-2 border border-gray-300 rounded p-2">
            <h3 className="md:text-[16px] text-[14px] font-medium">
              Tools And Softwares
            </h3>
            {filterGlobalData?.tool
              .slice(0, showTool ? filterGlobalData?.tool?.length : 3)
              .map((department, index) => (
                <label className="flex items-center" key={index}>
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    checked={selectedTool.includes(department?.name)}
                    onChange={(e) =>
                      handleToolChange(department?.name, e.target.checked)
                    }
                  />
                  {/* <span className="ml-2 capitalize cursor-pointer text-sm"> */}
                  <span className="ml-2  capitalize cursor-pointer label-text md:text-[14px] text-[12px]">
                    {department?.name}
                  </span>
                </label>
              ))}
            <button
              className="text-blue-500 mt-1"
              onClick={() => setShowTool(!showTool)}
            >
              {showTool ? "Show less" : "Show more"}
            </button>
          </div>
          <div className="mb-2 border border-gray-300 rounded p-2">
            <h3 className="md:text-[16px] text-[14px] font-medium">Topics</h3>
            {filterGlobalData?.topic
              .slice(0, showTopics ? filterGlobalData?.topic?.length : 3)
              .map((topic, index) => (
                <label className="flex items-center" key={index}>
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    checked={selectedTopics.includes(topic?.name)}
                    onChange={(e) =>
                      handleTopicChange(topic?.name, e.target.checked)
                    }
                  />
                  {/* <span className="ml-2 capitalize cursor-pointer text-sm"> */}
                  <span className="ml-2  capitalize cursor-pointer label-text md:text-[14px] text-[12px]">
                    {topic?.name}
                  </span>
                </label>
              ))}
            <button
              className="text-blue-500 mt-1"
              onClick={() => setShowTopics(!showTopics)}
            >
              {showTopics ? "Show less" : "Show more"}
            </button>
          </div>
          <div className="mb-2 border border-gray-300 rounded p-2">
            <h3 className="md:text-[16px] text-[14px] font-medium">
              Languages
            </h3>
            {filterGlobalData?.langauge
              ?.slice(0, showLanguage ? filterGlobalData?.langauge?.length : 3)
              .map((webinarType, index) => (
                <label className="flex items-center" key={index}>
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    checked={selectedLanguage?.includes(webinarType?.name)}
                    onChange={(e) =>
                      handleLanguageChange(webinarType?.name, e.target.checked)
                    }
                  />
                  <span className="ml-2 capitalize cursor-pointer text-sm">
                    {webinarType?.name}
                  </span>
                </label>
              ))}
            <button
              className="text-blue-500 mt-1"
              onClick={() => setShowLanguage(!showLanguage)}
            >
              {showLanguage ? "Show less" : "Show more"}
            </button>
          </div>
        </div>
      )}
      {Heading === "blog" && (
        <div>
          <div className="mb-2 border border-gray-300 rounded p-2">
            <h3 className="md:text-[16px] text-[14px] font-medium">
              Industries
            </h3>
            {filterGlobalData?.industries
              .slice(
                0,
                showMoreIndustries ? filterGlobalData?.industries?.length : 3
              )
              .map((industry, index) => (
                <label className="flex items-center" key={index}>
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    checked={selectedIndustries.includes(industry?.name)}
                    onChange={(e) =>
                      handleIndustryChange(industry?.name, e.target.checked)
                    }
                  />
                  {/* <span className="ml-2 capitalize cursor-pointer text-sm"> */}
                  <span className="ml-2  capitalize cursor-pointer label-text md:text-[14px] text-[12px]">
                    {industry?.name}
                  </span>
                </label>
              ))}
            <button
              className="text-blue-500 mt-1"
              onClick={() => setShowMoreIndustries(!showMoreIndustries)}
            >
              {showMoreIndustries ? "Show less" : "Show more"}
            </button>
          </div>
          <div className="mb-2 border border-gray-300 rounded p-2">
            <h3 className="md:text-[16px] text-[14px] font-medium">
              Tools And Softwares
            </h3>
            {filterGlobalData?.tool
              .slice(0, showTool ? filterGlobalData?.tool?.length : 3)
              .map((department, index) => (
                <label className="flex items-center" key={index}>
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    checked={selectedTool.includes(department?.name)}
                    onChange={(e) =>
                      handleToolChange(department?.name, e.target.checked)
                    }
                  />
                  {/* <span className="ml-2 capitalize cursor-pointer text-sm"> */}
                  <span className="ml-2  capitalize cursor-pointer label-text md:text-[14px] text-[12px]">
                    {department?.name}
                  </span>
                </label>
              ))}
            <button
              className="text-blue-500 mt-1"
              onClick={() => setShowTool(!showTool)}
            >
              {showTool ? "Show less" : "Show more"}
            </button>
          </div>
          <div className="mb-2 border border-gray-300 rounded p-2">
            <h3 className="md:text-[16px] text-[14px] font-medium">Topics</h3>
            {filterGlobalData?.topic
              .slice(0, showTopics ? filterGlobalData?.topic?.length : 3)
              .map((topic, index) => (
                <label className="flex items-center" key={index}>
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    checked={selectedTopics.includes(topic?.name)}
                    onChange={(e) =>
                      handleTopicChange(topic?.name, e.target.checked)
                    }
                  />
                  {/* <span className="ml-2 capitalize cursor-pointer text-sm"> */}
                  <span className="ml-2  capitalize cursor-pointer label-text md:text-[14px] text-[12px]">
                    {topic?.name}
                  </span>
                </label>
              ))}
            <button
              className="text-blue-500 mt-1"
              onClick={() => setShowTopics(!showTopics)}
            >
              {showTopics ? "Show less" : "Show more"}
            </button>
          </div>
          <div className="mb-2 border border-gray-300 rounded p-2">
            <h3 className="md:text-[16px] text-[14px] font-medium">
              Departments
            </h3>
            {filterGlobalData?.department
              .slice(
                0,
                showMoreDepartments ? filterGlobalData?.department?.length : 3
              )
              .map((topic, index) => (
                <label className="flex items-center" key={index}>
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    checked={selectedDepartments.includes(topic?.name)}
                    onChange={(e) =>
                      handleDepartmentChange(topic?.name, e.target.checked)
                    }
                  />
                  {/* <span className="ml-2 capitalize cursor-pointer text-sm"> */}
                  <span className="ml-2  capitalize cursor-pointer label-text md:text-[14px] text-[12px]">
                    {topic?.name}
                  </span>
                </label>
              ))}
            <button
              className="text-blue-500 mt-1"
              onClick={() => setShowMoreDepartments(!showMoreDepartments)}
            >
              {showMoreDepartments ? "Show less" : "Show more"}
            </button>
          </div>
        </div>
      )}

      {/* langauges */}
    </div>
  );

  return (
    <div>
      {/* Mobile Filter Button */}
      <div className=" pt-5 md:pt-0">
        <button
          className="md:hidden border border-orange-500     text-white  py-2  px-4  rounded-xl bg-primary "
          onClick={() => setShowModal(true)}
        >
          Filter
        </button>
      </div>

      {/* Modal for Mobile Devices */}

      {showModal && (
        <div className="fixed top-16 right-0 left-0 bottom-0 bg-black bg-opacity-50 flex justify-center z-20 overflow-y-auto">
          <div className="relative w-full md:w-2/3 lg:w-1/3    bg-gray-200 p-5 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mt-5">
              <div className="flex items-center justify-start">
                <button
                  className="px-2 py-1 bg-blue-600 text-white text-sm rounded-lg shadow-md"
                  onClick={() => setShowModal(false)}
                >
                  Apply Filters
                </button>
              </div>

              <button
                className="text-gray-500 hover:text-gray-700 text-lg"
                onClick={() => setShowModal(false)}
              >
                <FontAwesomeIcon icon={faXmarkCircle} />
              </button>
            </div>

            {/* Scrollable Filters */}
            <div className="space-y-4 max-h-[450px] overflow-y-auto">
              {renderFilters()}
            </div>
          </div>
        </div>
      )}

      {/* Inline Filters for Larger Devices */}
      <div className="hidden md:block">{renderFilters()}</div>
    </div>
  );
};

export default Filter;
