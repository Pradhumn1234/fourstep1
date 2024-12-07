import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import AdminLayout from "@/Component/admin/AdminLayout";
import Image from "next/image";
import { useAppContext } from "@/Component/Context/context";

const EditUser = () => {
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
  const { users, setUsers } = useAppContext();
  const [imagePreview, setImagePreview] = useState(null);
  const router = useRouter();
  const { id } = router.query; // Extract userId from the URL

  useEffect(() => {
    if (id) {
      // Fetch the user data when the component mounts or when the id changes
      const fetchUserData = async () => {
        const response = await fetch(`/api/user/user?id=${id}`);
        if (response.ok) {
          const userData = await response.json();
          console.log("userData---------->",userData);
          setFormData({
            name: userData?.[0].name,
            email: userData?.[0].email,
            phone: userData?.[0].phone,
            role: userData?.[0].role,
            description: userData?.[0].description,
            jobProfile: userData?.[0].jobProfile,
            alt: userData?.[0].alt,
            image: userData?.[0].image,
          });
          if (userData?.[0].image) {
            setImagePreview(userData?.[0].image.path); // Set the image preview if it exists
          }
        }
      };
      fetchUserData();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prevState) => ({
        ...prevState,
        image: files[0],
      }));
      setImagePreview(URL.createObjectURL(files[0])); // Set preview for the selected file
    } else {
      setFormData((prevState) => ({
        ...prevState,
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
    if (formData.image) {
      form.append("image", formData.image);
    }

    const response = await fetch(`/api/user/user?id=${id}`, {
      method: "PUT",
      body: form,
    });

    if (response.ok) {
      alert("User updated successfully!");
      router.push("/admin/user/list-user");
    } else {
      alert("Failed to update user.");
    }
  };

  return (
    <AdminLayout>
      <div className="justify-center w-full items-center">
        <h2 className="text-2xl py-3 font-semibold">Edit User Information</h2>
        <form
          className="bg-white p-10 shadow-lg rounded-lg w-full space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="space-y-6">
            {/* Name, Email, Phone, Role, Description, Job Profile Input Fields */}
            {/* Populate these inputs with formData values */}
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

            {/* Image Preview */}
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

            {/* Alt Text Field */}
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

export default EditUser;
