import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const BlogSideForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container  pb-4 flex justify-center items-center ">
      <div className="max-w-sm w-full bg-white p-3 rounded-lg shadow-md border border-blue-400">
        <h2 className="text-center text-2xl font-semibold text-blue-600 mb-2">
          Get in Touch
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2 relative">
            <FontAwesomeIcon
              icon={faUser}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 text-lg"
            />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-10 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-4 relative">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 text-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full mt-2 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogSideForm;
