import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faUser,
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const SideForm = () => {
  const [formData, setFormData] = useState({
    clientType: "Indian",
    name: "",
    email: "",
    city: "",
    phone: "",
    message: "",
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
    <div className="container pb-10">
      <div className="max-w-xs  mx-auto top-10 sticky bg-white p-4 rounded-lg border-solid border-2 border-[#163383]">
        <div>
          <h2 className="text-lg  py-3 font-semibold">Enquiry Now</h2>
        </div>
        <hr className="border-gray-300" />
        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <div className="flex space-x-2 relative">
              <div className="relative w-full">
                <FontAwesomeIcon
                  icon={faUser}
                  className="absolute left-2 top-3 text-sm text-[#DD9933]
                  "
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-7 py-2 bg-[#f3f2f2] border-none rounded-md focus:outline-none"
                  required
                />
              </div>
              <div className="relative w-full">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="absolute left-2 top-3 text-sm text-[#DD9933]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-7 py-2 bg-[#f3f2f2] border-none rounded-md focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>
          <div className="mb-4 relative">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="absolute left-2 top-3 text-sm text-[#DD9933]"
            />
            <input
              type="text"
              name="city"
              placeholder="City*"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-7 py-2 bg-[#f3f2f2] border-none rounded-md focus:outline-none"
              required
            />
          </div>
          <div className="mb-4 relative">
            <FontAwesomeIcon
              icon={faPhone}
              className="absolute left-2 top-3 text-sm text-[#DD9933]"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone*"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-7 py-2 bg-[#f3f2f2] border-none rounded-md focus:outline-none"
              required
            />
          </div>

          <div className="mb-4 relative">
            <FontAwesomeIcon
              icon={faComment}
              className="absolute left-2 top-3 text-sm  transform  text-[#DD9933]"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-7 py-2 bg-[#f3f2f2] border-none rounded-md focus:outline-none"
              required
              rows={3}
            />
          </div>
          <div className="pb-2">
            <button
              type="submit"
              className="mt-3 block w-full select-none rounded-full bg-gradient-to-r from-orange-500 to-red-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SideForm;
