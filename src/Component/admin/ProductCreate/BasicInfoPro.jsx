import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const BasicInfoPro = ({ setActiveTab, productData }) => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [topics,setTopics]=useState("");
  const [tools,setTools]=useState("");
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    subtitle: "",
    service: "",
    industry: "",
    altText: "",
  });
  useEffect(() => {
    console.log("product response is here --> ", productData);
    if (productData) {
      setFormData({
        title: productData?.[0]?.title || "",
        description: productData?.[0]?.description || "",
        subtitle: productData?.[0]?.subtitle || "",
        service: productData?.[0]?.service || "",
        industry: productData?.[0]?.industry || "",
        altText: productData?.[0]?.altText || "",
      });
      setPreview(productData?.[0]?.path || "");
      setTopics(productData?.[0]?.topics || "");
      setTools(productData?.[0]?.tools || "");
    }
  }, [productData]);
  const [serviceList, setServiceList] = useState([]);
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

  // Fetch services and industries on component mount
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("/api/global/service");
        const data = await response.json();
        if (data.success) setServiceList(data.data);
      } catch (error) {
        console.error("Failed to fetch services:", error);
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

    fetchServices();
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
    if(topics && tools){
      formDataToSend.append("topics", topics);
      formDataToSend.append("tools", tools);
    }
    else{
      alert("topics and tools is required");
      return;
    }

    try {
      const response = await fetch(
        `/api/product/${
          productData?.length > 0 ? productData?.[0]?._id : "product"
        }`,
        {
          method: productData ? "PUT" : "POST",
          body: formDataToSend,
        }
      );

      const result = await response.json();
      console.log("result is submitted data is here--> ", result);
      if (response.ok) {
        alert("Product created successfully!");
        router.push(`/admin/product/${result?.newProduct?._id}`);
        setActiveTab("Tab2");
        console.log(result);
      } else {
        alert("Error: " + result.message);
        console.error(result);
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
          <div className="mt-4">
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
        </div>

        {/* Other Form Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
              Service
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
              required
            >
              <option value="">Select a service</option>
              {serviceList.map((service) => (
                <option key={service._id} value={service.name}>
                  {service.name}
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

export default BasicInfoPro;
