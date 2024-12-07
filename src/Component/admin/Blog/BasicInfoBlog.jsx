import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const BasicInfoBlog = ({ setActiveTab, blogData }) => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    subtitle: "",
    altText: "",
  });

  useEffect(() => {
    if (blogData && blogData[0]) {
      setFormData({
        title: blogData[0]?.title || "",
        description: blogData[0]?.description || "",
        subtitle: blogData[0]?.subtitle || "",
        altText: blogData[0]?.altText || "",
      });
      setPreview(blogData[0]?.path || "");
    }
  }, [blogData]);

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

    try {
      const response = await fetch("/api/blog/promoblog", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();
      if (response.ok) {
        alert("Blog  created successfully!");
        router.push(`/admin/blog/${result?.data?._id}`);
        setActiveTab("Tab2");
        console.log(result);
      } else {
        alert("Error: " + result.message);
        console.error(result);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-8 bg-gradient-to-r from-white to-gray-100 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Image Upload */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Upload Image for the Blog
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

        {/* Form Fields */}
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

        {/* Submit Button */}
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

export default BasicInfoBlog;
