import AdminLayout from "@/Component/admin/AdminLayout";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const TestimonialBD = () => {
  const router = useRouter();
  const [formdata, setFormData] = useState({
    alt: "",
    name: "",
    designation: "",
    description: "",
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  // Handle image upload and preview
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Use FormData to send file data and text data together
    const formData = new FormData();
    formData.append("name", formdata.name);
    formData.append("alt", formdata.alt);
    formData.append("designation", formdata.designation);
    formData.append("description", formdata.description);
    formData.append("image", imageFile); // Append the image file

    try {
      const response = await fetch("/api/testimonial/testimonial", {
        method: "POST",
        body: formData, // Send formData instead of JSON
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Response Error Data:", errorData);
        throw new Error("Something went wrong");
      }

      const result = await response.json();
      // console.log("Form Data", result);
      alert("Testimonial added successfully");
      router.push("/admin/testimonial/list-testimonial");

      // Clear the form after submission
      setFormData({
        alt: "",
        name: "",
        designation: "",
        description: "",
      });
      setImageFile(null);
      setImagePreview(null);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <AdminLayout>
      <div className="mx-auto bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl text-center font-bold mb-4">
          Add Testimonials Here
        </h2>

        {/* Form Submission */}
        <form onSubmit={handleSubmit}>
          {/* Image Upload */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-gray-100 hover:file:bg-gray-200"
            />
          </div>

          {/* Image Preview */}
          {imagePreview && (
            <div className="mb-4">
              <Image
                src={imagePreview}
                alt="Preview"
                className="w-32 h-32 object-cover mx-auto"
                height={100}
                width={100}
              />
            </div>
          )}

          {/* Alt and Name */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Alt Text
              </label>
              <input
                type="text"
                name="alt"
                value={formdata.alt}
                onChange={handleInputChange}
                placeholder="Enter alt text"
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formdata.name}
                onChange={handleInputChange}
                placeholder="Enter name"
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
          </div>

          {/* Designation */}
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Designation
              </label>
              <input
                type="text"
                name="designation"
                value={formdata.designation}
                onChange={handleInputChange}
                placeholder="Enter designation"
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formdata.description}
              onChange={handleInputChange}
              placeholder="Enter description"
              className="w-full px-4 py-2 border rounded-lg"
              rows="4"
            />
          </div>

          {/* Submit Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default TestimonialBD;
