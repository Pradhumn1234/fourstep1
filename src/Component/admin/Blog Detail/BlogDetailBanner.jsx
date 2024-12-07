import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faCube } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function BlogDetailBanner({ setActiveTab, blogData }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [editorHtmlDescription, setEditorHtmlDescription] = useState("");
  const [selectTime, setSelectTime] = useState("");
  const [selectTopic, setSelectTopic] = useState("");
  const [selectDepartment, setSelectDepartment] = useState("");
  const [selectIndustry, setSelectIndustry] = useState("");
  const [selectTools, setSelectTools] = useState("");
 
  const router = useRouter();
  useEffect(() => {
    setSelectTime(blogData?.time || "");
    setTitle(blogData?.title || "");
    setDescription(blogData?.description || "");
    setPreview(blogData?.videoPath || "");
    setSubTitle(blogData?.subTitle || "");
    setSubTitle(blogData?.selectTopic || "");
    setSubTitle(blogData?.selectDepartment || "");
    setSubTitle(blogData?.selectIndustry || "");
    setSubTitle(blogData?.selectTools || "");
    setEditorHtmlDescription(blogData?.contentsummary || "");
  }, [blogData]);
  // Function to handle file input change
  function handleChange(e) {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  }

  const [toolsList, setToolsList] = useState([]); // State to hold tools data

  const fetchTools = async () => {
    try {
      const response = await fetch("/api/global/tools/toolsoftware");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setToolsList(data.data); // Update state with fetched tools data
    } catch (error) {
      console.error("Error fetching tools:", error);
    }
  };

  useEffect(() => {
    fetchTools(); // Fetch tools data when component mounts
  }, []);

  const [departmetaData, setDepartmentData] = useState([]);
  const fetchDepartment = async () => {
    const response = await fetch("/api/webinar/department/getdepartment");
    if (response.ok) {
      const data = await response.json();
      setDepartmentData(data);
    } else {
      console.error("Failed to fetch departments:", response.status); // Log an error if the fetch fails
    }
  };

  useEffect(() => {
    fetchDepartment();
  }, []);
  const [topicsList, setTopicsList] = useState([]);

  const fetchTopic = async () => {
    const response = await fetch("/api/global/topic/gettopic");
    if (response.ok) {
      const result = await response.json();
      // Set topicsList to the 'result' array
      setTopicsList(result.result); // Adjusted to access the result array
    } else {
      console.error("Failed to fetch topics:", response.status);
    }
  };

  useEffect(() => {
    fetchTopic();
  }, []);

  const [industry, setIndustry] = useState([]);

  const fetchIndustry = async () => {
    const response = await fetch("/api/global/industries/getIndustries");
    if (response.ok) {
      const result = await response.json();
      setIndustry(result.data); // Assuming result.data is an array of industries
      // console.log(".....>>>>>industry", result.data);
    } else {
      console.error("Failed to fetch industry:", response.status);
    }
  };

  useEffect(() => {
    fetchIndustry();
  }, []);

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link"],
    ],
  };
  // Function to handle image upload or update
  async function handleUpload() {
    if (!file && !isUpdating) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    if (!file && !title && !selectTopic && !selectDepartment && !selectIndustry && !selectTools) {
      alert("Please upload file and  write title");
      return;
    }

    if (file && title) {
      formData.append("file", file);
      formData.append("title", title);
      formData.append("subTitle", subTitle);
      formData.append("description", description);
      formData.append("contentsummary", editorHtmlDescription);
      formData.append("time", selectTime || blogData?.time);
      formData.append("selectTopic", selectTopic );
      formData.append("selectDepartment", selectDepartment);
      formData.append("selectIndustry", selectIndustry);
      formData.append("selectTools", selectTools);
    }
    // console.log("selectedCategories -------------> ",selectedCategories)
    try {
      const res = await fetch(
        `/api/blog/${blogData ? blogData?._id : "blogdetail"}`,
        {
          method: blogData ? "PUT" : "POST",
          body: formData,
        }
      );
      const data1 = await res.json();
      // console.log("data1--->",data1?.data?._id)
      if (res?.ok) {
        router.push("/admin/blog/itinerypost/" + data1?.data?._id);
        setActiveTab("Tab2");
        alert(`File ${blogData ? "updated" : "uploaded"} successfully`);

        // Optionally, reset form fields or update state after successful upload
      } else {
        alert(`File ${blogData ? "update" : "upload"} failed`);
      }

      // router.push("/admin/blog/itinerypost/"+data1?.data?._id);
    } catch (error) {
      console.error(
        `Error ${blogData ? "updating" : "uploading"} file:`,
        error
      );
    }
  }
  // console.log("content is here as ------>  ",editorHtmlDescription)
  return (
    <>
      <div className="p-4 mb-5 rounded-md bg-white shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)]  border-l-2 border-teal-600">
        <p className="text-base font-semibold mb-2">Blog Detail Banner</p>
        <div className="p-4">
          <div className="flex xl:flex-row flex-col md:gap-10 gap-5 items-center xl:pl-5">
            <div className=" flex flex-1 my-7">
              <input
                type="file"
                className="mb-4 ml-3"
                onChange={handleChange}
              />
              <div>
                {preview && (
                  <Image
                    className="md:w-36 w-auto h-auto shadow-md mb-4"
                    src={preview}
                    alt="Preview"
                    width={150}
                    height={200}
                  />
                )}
              </div>
            </div>
            <div className="flex-1 my-5">
              <div>
                <label htmlFor="title" className=" font-semibold">
                  Title
                </label>
                <input
                  className="py-0.5 mb-2 w-full  border rounded h-8 px-2 focus:border-primary outline-none"
                  type="text"
                  id="title"
                  value={title}
                  placeholder="Enter Title Here"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="title" className=" font-semibold">
                  Sub Title
                </label>
                <input
                  className="py-0.5 mb-2 w-full  border rounded h-8 px-2 focus:border-primary outline-none"
                  type="text"
                  id="title"
                  value={subTitle}
                  placeholder="Enter Title Here"
                  onChange={(e) => setSubTitle(e.target.value)}
                />
              </div>
              <div className="my-5 flex flex-col sm:flex-row md:items-center gap-2 mb-4 w-full">
                <label
                  htmlFor="postTypes1"
                  className="font-semibold text-para md:text-sm"
                >
                  Reading time :
                </label>
                <select
                  id="postTypes1"
                  onChange={(e) => setSelectTime(e.target.value)}
                  className="mt-1 md:ml-2 h-8  md:w-32 w-full rounded-md outline-none border-slate-500/45 cursor-pointer border text-para"
                  defaultValue={blogData?.time}
                >
                  {blogData ? (
                    <option disabled>{blogData?.time}</option>
                  ) : (
                    <option>select time </option>
                  )}
                  <option value="1">1 min</option>
                  <option value="2">2 min</option>
                  <option value="4">4 min</option>
                  <option value="5">5 min</option>
                  <option value="6">6 min</option>
                  <option value="7">7 min</option>
                  <option value="8">8 min</option>
                  <option value="9">9 min</option>
                  <option value="10">10 min</option>
                  <option value="11">11 min</option>
                  <option value="12">12 min</option>
                  <option value="13">13 min</option>
                  <option value="14">14 min</option>
                  <option value="15">15 min</option>
                  <option value="20">20 min</option>
                  <option value="25">25 min</option>
                  <option value="30">30 min</option>
                </select>
              </div>
              <div className=" grid grid-col md:gap-2 md:grid md:grid-cols-2">
                <div>
                  <label className="block my-2 text-sm font-semibold text-gray-700">
                    Tools and Software
                  </label>
                  <select
                    name="toolsAndSoftware"
                    value={selectTools}
                    onChange={(e)=>setSelectTools(e.target.value)}
                    className="mt-2 my-2 block w-full bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm p-1 focus:outline-none focus:ring focus:ring-blue-500"
                    required
                  >
                    <option value="" disabled>{blogData?blogData.selectTools:"Select an option"}</option>
                    {toolsList?.length > 0 ? (
                      toolsList?.map((tool) => (
                        <option key={tool._id} value={tool.name}>
                          {tool.name}
                        </option>
                      ))
                    ) : (
                      <option disabled>No tools available</option>
                    )}
                  </select>
                </div>
                {/* Topic */}

                <div>
                  <label className="block my-2 text-sm font-semibold text-gray-700">
                    Topics
                  </label>
                  <select
                    name="topic"
                    value={selectTopic}
                    onChange={(e)=>setSelectTopic(e.target.value)}
                    className="mt-2 block w-full my-2 bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm p-1 focus:outline-none focus:ring focus:ring-blue-500"
                    required
                  >
                    <option value="" disabled>{blogData?blogData?.selectTopic:"Select an option"}</option>
                    {topicsList?.map((topic) => (
                      <option key={topic._id} value={topic.name}>
                        {topic.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Department */}
                <div>
                  <label className="block text-sm my-2 font-semibold text-gray-700">
                    Department
                  </label>
                  <select
                    name="department"
                    value={selectDepartment}
                    onChange={(e)=>setSelectDepartment(e.target.value)}
                    className="mt-2 block w-full my-2 bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm p-1 focus:outline-none focus:ring focus:ring-blue-500"
                    required
                  >
                    <option value="" disabled>{blogData?blogData?.selectDepartment:"Select an option"}</option>

                    {departmetaData?.map((department) => (
                      <option key={department._id} value={department.name}>
                        {department.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Industry */}
                <div>
                  <label className="block text-sm font-semibold my-2 text-gray-700">
                    Industry
                  </label>
                  <select
                    name="industry"
                    value={selectIndustry}
                    onChange={(e)=>setSelectIndustry(e.target.value)}
                    className="mt-2 block w-full bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm p-1 my-2 focus:outline-none focus:ring focus:ring-blue-500"
                    required
                  >
                    <option value="" disabled>{blogData?blogData?.selectIndustry:"Select an industry"}</option>
                    {industry?.map((item) => (
                      <option key={item._id} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="textarea" className=" font-semibold">
                  Description
                </label>
                <textarea
                  name=""
                  id="textarea"
                  className="mt-1 mb-2 w-full border rounded h-28 px-2 focus:border-primary outline-none py-1"
                  placeholder="Enter Description Here"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="w-full">
            <h3 className=" font-semibold mb-2">Content Summary</h3>
            <QuillNoSSRWrapper
              className="rounded h-48 mb-16"
              theme="snow"
              value={editorHtmlDescription}
              onChange={setEditorHtmlDescription}
              placeholder="Enter Your Answer"
              modules={modules}
            />
          </div>
          <div className="flex md:flex-row flex-col md:gap-5 gap-3">
            <button
              className=" bg-black text-white px-3 py-2 w-full md:w-auto rounded"
              onClick={handleUpload}
            >
              {blogData ? "Update " : "Upload"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
