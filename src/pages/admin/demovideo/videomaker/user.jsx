import AdminLayout from "@/Component/admin/AdminLayout";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

const User = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
    role: "",
    jobProfile: "",
    image: null,
    alt: "",
  });
  const router = useRouter();
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    // Append all form data to FormData object
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await fetch("/api/videos/videouser", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Success:", result);
        alert("Form submitted successfully!");

        router.push("/admin/demovideo/videomaker/listing-user");

        setFormData({
          name: "",
          email: "",
          phone: "",
          description: "",
          role: "",
          jobProfile: "",
          image: null,
          alt: "",
        });
      } else {
        console.error("Failed to submit form");
        alert("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  const imagePreview = formData.image
    ? URL.createObjectURL(formData.image)
    : null;

  return (
    <AdminLayout>
      <div className="justify-center w-full items-center">
        <h2 className="text-2xl py-3 font-semibold">Video Maker Information</h2>
        <form
          className="bg-white p-10 shadow-lg rounded-lg w-full space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Role
                </label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  placeholder="Enter your role"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                placeholder="Brief description"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Job Profile
              </label>
              <input
                type="text"
                name="jobProfile"
                value={formData.jobProfile}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                placeholder="Enter your job profile"
              />
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">
                  Upload Image
                </label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  className="w-96 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                />
              </div>
              <div>
                <span>Preview:</span>
                {imagePreview && (
                  <div>
                    <Image
                      src={imagePreview}
                      alt="Preview"
                      className="rounded-lg object-cover"
                      width={300}
                      height={300}
                    />
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Alt Text
              </label>
              <input
                type="text"
                name="alt"
                value={formData.alt}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                placeholder="Enter alt text for image"
              />
            </div>

            <button
              type="submit"
              className="bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default User;
