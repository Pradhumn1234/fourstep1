import ContactUs from "@/Component/Contact/ContactUs";
import { Footer } from "@/Component/Footer/Footer";
import React from "react";

const Contact = () => {
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.910862140821!2d77.51411137505966!3d28.48223097574713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceb07a0270cf1%3A0xef3dde7c7ebbe43e!2sFour%20Steps%20Digital%20Consulting%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1723887840924!5m2!1sen!2sin`;

  return (
    <div className="container">
      <div className="w-100vw  h-auto">
        <div
          className="relative w-full h-80 sm:h-96 lg:h-[32rem] flex items-center justify-center bg-cover object-cover text-white"
          style={{
            backgroundImage:
              'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTS6Cbkx9E9yIP8ihE6TSSoIZ0jPavCEVnoA&s")',
          }} // Update with your image path
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
              Welcome To Our Contact Page
            </h1>
            <p className="text-sm sm:text-lg">For explorers everywhere.</p>
          </div>
        </div>
        <div className="md:p-10 p-5">
          <h3 className="md:text-4xl text-2xl font-semibold text-center mb-5">
            Get In <span className="text-gradient">Touch</span>
          </h3>
          <p className=" leading-6 md:text-base text-sm text-center">
            We will contact again after receive your request in 24h
          </p>
          <div className="md:flex items-center justify-around bg-white md:shadow-md md:rounded-full xl:py-10 md:py-3 px-6 xl:mt-16 md:mt-14  mt-5 md:border">
            <div className="flex items-center space-x-2">
              <img
                src="/path/to/email-icon.png"
                alt="Email Icon"
                className="w-6 h-6"
              />
              <span className="text-base font-medium">
                info@4stepsdigital.com
              </span>
            </div>
            <div className="md:border-l h-8 mx-4"></div>
            <div className="flex items-center space-x-2">
              <img
                src="/path/to/location-icon.png"
                alt="Location Icon"
                className="w-6 h-6"
              />
              <span className="text-base font-medium ">
                T-3 A-1113, NX Byte, NX One Plot No. - 17, <br /> Sector - Tech
                Zone IV, Greater Noida West, 201310
              </span>
            </div>
            <div className="md:border-l h-8 mx-4"></div>
            <div className="flex items-center space-x-2">
              <img
                src="/path/to/phone-icon.png"
                alt="Phone Icon"
                className="w-6 h-6"
              />
              <span className="text-base font-medium">+91-9065879989</span>
            </div>
          </div>
        </div>
        <div className=" md:p-10 p-5 md:gap-10">
          <div className="rounded-md w-full xl:h-[500px] md:h-[400px] h-[250px]">
            <iframe
              className="rounded-md object-cover"
              src={mapSrc}
              width="100%"
              height="100%"
              allowFullScreen // Correct case here
              loading="lazy"
            ></iframe>
          </div>

          <div className="md:mt-10 mt-7 bg-zinc-100 rounded-md shadow-md grid place-items-center">
            <div className="xl:w-2/3 w-full  xl:py-16 xl:p-0 md:p-7 p-5">
              <h3 className="xl:text-2xl md:text-xl text-lg capitalize text-gray-800 font-bold md:mb-4 mb-2 text-center">
                Feel Free To Contact Us
              </h3>
              <form action="" method="post">
                <div className="md:grid grid-cols-2 gap-5">
                  <div className="md:py-3 py-2">
                    <div>
                      {/* <label htmlFor="name" class="leading-7 py-4 text-base font-medium text-gray-900">Your Name</label> */}
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
                      {/* <label htmlFor="email" class="leading-7 py-4 text-base font-medium text-gray-900">Your Email</label> */}
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
                </div>
                <div className="md:grid grid-cols-2 gap-5">
                  <div className="py-3">
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
                      {/* <label htmlFor="text" class="leading-7 py-4 text-base font-medium text-gray-900">Your website</label> */}
                      <input
                        type="text"
                        id="text"
                        name="text"
                        placeholder="Your website (optional)"
                        className="w-full bg-white rounded-full border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-4 leading-8 transition-colors duration-200 ease-in-out "
                      />
                    </div>
                  </div>
                </div>
                <div className="md:py-3 py-2">
                  <div>
                    {/* <label htmlFor="services" className="leading-7 py-4 text-base font-medium text-gray-900">Service</label> */}
                    <select
                      id="services"
                      name="services"
                      className="w-full bg-white rounded-full border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-2.5 px-4 leading-8 transition-colors duration-200 ease-in-out"
                    >
                      <option value="" disabled selected>
                        Select Your service
                      </option>
                      <option value="Website Development">
                        Website Development
                      </option>
                      <option value="Zoho Services">Zoho Services</option>
                      <option value="Hubsport Services">
                        Hubsport Services
                      </option>
                      <option value="Digital Marketing">
                        Digital Marketing
                      </option>
                      <option value="Bitrix24 Service">Bitrix24 Service</option>
                    </select>
                  </div>
                </div>
                <div className="md:py-3 py-2">
                  <div>
                    {/* <label htmlFor="message" class="leading-7 py-4 text-base font-medium text-gray-900">Your Message</label> */}
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Your Message....."
                      className="w-full bg-white rounded-lg border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out "
                    ></textarea>
                  </div>
                </div>
                <div className="py-2 grid place-items-center">
                  <button
                    type="submit"
                    class=" text-white bg-[#0170B9] hover:bg-[#4d7dca] py-3 w-full text-center rounded text-base font-medium shadow-lg"
                  >
                    Send Message ✉
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="w-full md:h-[300px] h-[200px] grid place-items-center">
          <div className="grid place-items-center">
            <h1 className="text-center text-md md:text-2xl lg:text-4xl tracking-wide font-semibold ">
              Access your business potentials
              <br /> today & find opportunity for
              <br />
              <span className="text-gradient">bigger success</span>
            </h1>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
