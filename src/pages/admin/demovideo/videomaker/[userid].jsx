import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import AdminLayout from "@/Component/admin/AdminLayout";
import Image from "next/image";

const EditUser = () => {
  const router = useRouter();
  const { userid } = router.query;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    description: "",
    jobProfile: "",
    image: null,
    alt: "",
  });

  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    if (userid) {
      const fetchUser = async () => {
        try {
          const response = await fetch(`/api/videos/videouser?id=${userid}`, {
            method: "GET",
          });
          if (response.ok) {
            const userData = await response.json();
            setFormData({
              name: userData.name,
              email: userData.email,
              phone: userData.phone,
              role: userData.role,
              description: userData.description,
              jobProfile: userData.jobProfile,
              image: userData.image,
              alt: userData.alt,
            });
            console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>userdat", userData);
            setImagePreview(userData.image?.path || null);
          } else {
            console.error("Failed to fetch user data.");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };
      fetchUser();
    }
  }, [userid]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        image: files[0],
      }));
      setImagePreview(URL.createObjectURL(files[0]));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("role", formData.role);
    form.append("description", formData.description);
    form.append("jobProfile", formData.jobProfile);
    form.append("alt", formData.alt);

    if (formData.image && typeof formData.image !== "string") {
      form.append("image", formData.image);
    }

    try {
      const response = await fetch(`/api/videos/videouser?id=${userid}`, {
        method: "PUT",
        body: form,
      });

      if (response.ok) {
        alert("User updated successfully!");
        router.push("/admin/demovideo/videomaker/listing-user");
      } else {
        alert("Failed to update user.");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      alert("An error occurred while updating the user.");
    }
  };

  return (
    <AdminLayout>
      <div className="justify-center w-full items-center">
        <h2 className="text-2xl py-3 font-semibold">Edit User</h2>
        <form
          className="bg-white p-10 shadow-lg rounded-lg w-full space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="space-y-6">
            {/* Name and Email */}
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
                  required
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
                  required
                />
              </div>
            </div>

            {/* Phone and Role */}
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
                  required
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
                  required
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                placeholder="Enter description"
                required
              ></textarea>
            </div>

            {/* Job Profile */}
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
                placeholder="Enter job profile"
              />
            </div>

            {/* Image Upload */}
            <div className="flex items-center space-x-4">
              <div>
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
              {imagePreview && (
                <div>
                  <Image
                    src={imagePreview}
                    alt="Preview"
                    className="rounded-lg object-cover"
                    width={100}
                    height={100}
                  />
                </div>
              )}
            </div>

            {/* Alt Text */}
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
                placeholder="Enter alt text"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700"
            >
              Update User
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default EditUser;
