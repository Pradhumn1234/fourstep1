import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const BasicInfoVideo = ({ setActiveTab, videoData }) => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [videoLink, setVideoLink] = useState("");
  const [topics,setTopics]=useState("");
  const [tools,setTools]=useState("");
  const [language,setLanguage]=useState("");
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    subtitle: "",
    user: null,
    industry: "",
    altText: "",
  });
  useEffect(() => {
    console.log("product response is here --> ", videoData);
    if (videoData) {
      setFormData({
        title: videoData?.title || "",
        description: videoData?.description || "",
        subtitle: videoData?.subtitle || "",
        user: videoData?.user || null,
        industry: videoData?.industry || "",
        altText: videoData?.altText || "",
      });
      setPreview(videoData?.path || "");
      setVideoLink(videoData?.videoLink || "");
      setTopics(videoData?.topics || "");
      setTools(videoData?.tools || "");
      setLanguage(videoData?.language || "");
    }
  }, [videoData]);
  const [userList, setUserList] = useState([]); // State to hold the fetched data
  const [industryList, setIndustryList] = useState([]);

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Fetch users and industries on component mount
  useEffect(() => {
    const fetchusers = async () => {
      try {
        const response = await fetch("/api/videos"); // Fetch data from the API
        const data = await response.json(); // Parse the JSON response
        setUserList(data);
      } catch (error) {
        console.error("Failed to fetch users:", error); // Log any errors
      }
    };

    const fetchIndustries = async () => {
      try {
        const response = await fetch("/api/global/industries/getIndustries");
        const data = await response.json();
        if (data.success) setIndustryList(data.data);
      } catch (error) {
        console.error("Failed to fetch industries:", error);
      }
    };

    fetchusers();
    fetchIndustries();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    if (image) {
      formDataToSend.append("image", image);
    }
    if (videoLink) {
      formDataToSend.append("videoLink", videoLink);
    }
    if(topics && tools && language){
      formDataToSend.append("topics", topics);
      formDataToSend.append("tools", tools);
      formDataToSend.append("language", language);
    }
    else{
      alert("topics and tools is required");
      return;
    }

    try {
      const response = await fetch(
        `/api/videos/${videoData ? videoData?._id : "video"}`,
        {
          method: videoData ? "PUT" : "POST",
          body: formDataToSend,
        }
      );

      const result = await response.json();
      if (response?.ok) {
        console.log(
          "result is submitted data is here--> ",
          result?.newProduct?._id
        );

        alert(
          videoData
            ? "Video  updated successfully!"
            : "Video  created successfully!"
        );
        router.push(`/admin/demovideo/${result?.newProduct?._id}`);

        setActiveTab("Tab2");
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };
  //  for topic listing
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
  // for the tool section
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
  const [languagesList, setLanguagesList] = useState([]);

  const fetchLanguages = async () => {
    const response = await fetch("/api/global/language/getlanguages");
    if (response.ok) {
      const result = await response.json(); // Get the entire response
      if (result.success && Array.isArray(result.data)) {
        setLanguagesList(result.data); // Access the data array
      } else {
        setLanguagesList([]); // Reset to an empty array if success is false or data is not an array
      }
    } else {
      console.error("Failed to fetch languages:", response.status);
      setLanguagesList([]); // Optional: reset to empty array on error
    }
  };

  useEffect(() => {
    fetchLanguages();
  }, []);
  return (
    <div className="container mx-auto p-8 bg-gradient-to-r from-white to-gray-100 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Image Upload */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Upload Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-gray-700 file:mr-4 file:py-2 file:px-4
              file:rounded-lg file:border-0 file:text-sm file:font-semibold
              file:bg-purple-100 file:text-purple-700 hover:file:bg-purple-200"
          />
          {preview && (
            <div className="mt-4">
              <Image
                src={preview}
                alt={formData.altText || "Preview"}
                height={200}
                width={200}
                className="w-40 h-40 object-cover rounded-xl border border-gray-200 shadow-md"
              />
            </div>
          )}
        </div>

        {/* Other Form Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Alt Text
            </label>
            <input
              type="text"
              name="altText"
              value={formData.altText}
              onChange={handleChange}
              placeholder="Enter image description"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Video Link
            </label>
            <input
              type="text"
              name="videoLink"
              value={videoLink}
              onChange={(e) => setVideoLink(e.target.value)}
              placeholder="Enter video link here"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Subtitle
            </label>
            <input
              type="text"
              name="subtitle"
              value={formData.subtitle}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">
              User or video maker
            </label>
            <select
              name="user"
              value={formData.user}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
              required
            >
              <option value="">Select a user</option>

              {userList.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Industry
            </label>
            <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
              required
            >
              <option value="">Select an industry</option>
              {industryList.map((ind) => (
                <option key={ind._id} value={ind.name}>
                  {ind.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* Topic */}

        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          {/* Topics Section */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Topics
            </label>
            <select
              name="topic"
              value={topics}
              onChange={(e)=>setTopics(e.target.value)}
              className="mt-2 block w-full bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring focus:ring-blue-500"
              required
            >
              <option value="">Select an option</option>
              {topicsList.map((topic) => (
                <option key={topic._id} value={topic.name}>
                  {topic.name}
                </option>
              ))}
            </select>
          </div>

          {/* Tools and Software Section */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Tools and Software
            </label>
            <select
              name="toolsAndSoftware"
              value={tools}
              onChange={(e)=>setTools(e.target.value)}
              className="mt-2 block w-full bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring focus:ring-blue-500"
              required
            >
              <option value="">Select an option</option>
              {toolsList.length > 0 ? (
                toolsList.map((tool) => (
                  <option key={tool._id} value={tool.name}>
                    {tool.name}
                  </option>
                ))
              ) : (
                <option disabled>No tools available</option>
              )}
            </select>
          </div>
        </div>

        {/* Languages */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Languages
          </label>
          <select
            name="language"
            value={language}
            onChange={(e)=>setLanguage(e.target.value)}
            className="mt-2 block w-full bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring focus:ring-blue-500"
            required
          >
            <option value="">Select an option</option>
            {languagesList.length > 0 ? (
              languagesList.map((language) => (
                <option key={language._id} value={language.name}>
                  {language.name}
                </option>
              ))
            ) : (
              <option>No languages available</option> // Message when there are no languages
            )}
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
            required
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 shadow-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BasicInfoVideo;
