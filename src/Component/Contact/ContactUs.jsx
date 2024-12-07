import React from "react";

const ContactUs = () => {
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.910862140821!2d77.51411137505966!3d28.48223097574713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceb07a0270cf1%3A0xef3dde7c7ebbe43e!2sFour%20Steps%20Digital%20Consulting%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1723887840924!5m2!1sen!2sin`;

  return (
    <>
      <div className="container md:p-10 p-5">
        <div className="grid md:grid-cols-2 place-items-center">
          <div className="">
            <div className="mb-4">
              <h4 className="text-2xl capitalize text-gray-800 font-bold mb-2">
                Our office address
              </h4>
              <p className="text-[15px] leading-6">
                T-3 A-1113, Nx Byte, Nx one plot No. - 17, sector -Tech zone iV,
                Greater Noida West
              </p>
              <div className="flex md:justify-start justify-center gap-7 items-center my-2">
                <div>
                  <p className="text-[15px] leading-6 md:font-semibold font-medium">
                    Write an email
                  </p>
                  <p className="hover:underline underline-offset-3 cursor-pointer text-[#136EEB]">
                    info@4stepsdigital.com
                  </p>
                </div>
                <div>
                  <p className="text-[15px] leading-6 md:font-semibold font-medium">
                    Call Us
                  </p>
                  <p className="hover:underline underline-offset-3 cursor-pointer text-[#136EEB]">
                    +91-9065879989
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-md">
              <iframe
                className="rounded-md object-cover"
                src={mapSrc}
                width="100%"
                height="250"
                allowfullscreen=""
                loading="lazy"
                // referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="md:w-2/3 w-full md:mt-0 mt-7">
            <h1 className="xl:text-2xl md:text-xl text-lg capitalize text-gray-800 font-bold md:mb-4 mb-2 text-center">
              Feel Free To Contact Us
            </h1>
            <form action="" method="post">
              <div className="md:py-3 py-2">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter Your Name"
                    className="w-full bg-white rounded-full border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-4 leading-8 transition-colors duration-200 ease-in-out "
                  />
                </div>
              </div>
              <div className="md:py-3 py-2">
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Enter Your Email"
                    className="w-full bg-white rounded-full border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-4 leading-8 transition-colors duration-200 ease-in-out "
                  />
                </div>
              </div>
              <div className="md:py-3 py-2">
                <div>
                  {/* <label htmlFor="number" class="leading-7 py-4 text-base font-medium text-gray-900">Phone Number</label> */}
                  <input
                    type="number"
                    id="number"
                    name="number"
                    required
                    placeholder="Enter Phone Number"
                    className="w-full bg-white rounded-full border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-4 leading-8 transition-colors duration-200 ease-in-out "
                  />
                </div>
              </div>
              <div className="md:py-3 py-2">
                <div>
                  {/* <label htmlFor="message" class="leading-7 py-4 text-base font-medium text-gray-900">Your Message</label> */}
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message....."
                    className="w-full bg-white rounded-lg border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 py-1 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out "
                  ></textarea>
                </div>
              </div>
              <div className="py-2 grid place-items-center">
                <button
                  type="submit"
                  className=" text-white bg-[#0170B9] hover:bg-[#4d7dca] py-3 w-full text-center rounded text-base font-medium shadow-lg"
                >
                  Send Message ✉
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
