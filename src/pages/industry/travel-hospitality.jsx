import React, { useState } from "react";
import { FaMapMarkedAlt, FaWifi, FaConciergeBell } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Case from "@/Component/CaseStudies/Case";
import Testimonial from "@/Component/Testimonial/Testimonial";
import Calltoaction from "@/Component/Web/Calltoaction";
import Image from "next/image";
import { Footer } from "@/Component/Footer/Footer";
import Nav from "@/Component/Header/Nav";
const features = [
  {
    id: 1,
    title: "Best Travel Guide",
    description:
      "Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet laoreet. Lorem ipsum dolor sit amet Ut blandit eu leo.",
    Icon: FaMapMarkedAlt, // Using the imported icon
  },
  {
    id: 2,
    title: "Free Wifi",
    description:
      "Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet laoreet. Lorem ipsum dolor sit amet Ut blandit eu leo.",
    Icon: FaWifi, // Using the imported icon
  },
  {
    id: 3,
    title: "Best Service",
    description:
      "Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet laoreet. Lorem ipsum dolor sit amet Ut blandit eu leo.",
    Icon: FaConciergeBell, // Using the imported icon
  },
  {
    id: 3,
    title: "Best Service",
    description:
      "Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet laoreet. Lorem ipsum dolor sit amet Ut blandit eu leo.",
    Icon: FaConciergeBell, // Using the imported icon
  },
  {
    id: 5,
    title: "Best Service",
    description: "Vidolor sit amet Ut blandit eu leo.",
    Icon: FaConciergeBell, // Using the imported icon
  },
  {
    id: 6,
    title: "Best Service",
    description:
      "Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet laoreet. Lorem ipsum dolor sit amet Ut blandit eu leo.",
    Icon: FaConciergeBell, // Using the imported icon
  },
];
// for key and features

const Travel = () => {
  const [openIndices, setOpenIndices] = useState([]);
  const [isAllOpen, setIsAllOpen] = useState(false);

  // Toggle specific section
  const handleToggle = (i) => {
    if (openIndices.includes(i)) {
      setOpenIndices(openIndices.filter((index) => index !== i));
    } else {
      setOpenIndices([...openIndices, i]);
    }
  };

  // Expand all sections
  const handleExpandAll = () => {
    setOpenIndices(faqs.map((_, i) => i));
    setIsAllOpen(true);
  };

  // Hide all sections
  const handleHideAll = () => {
    setOpenIndices([]);
    setIsAllOpen(false);
  };

  const faqs = [
    {
      question: "What is this webinar about?",
      answer:
        "This webinar covers [describe the main topics and objectives of the webinar briefly].",
    },
    {
      question: "How can I register for the webinar?",
      answer:
        "You can register by [provide the registration steps, link, or contact information].",
    },
    {
      question: "Is there a fee to attend the webinar?",
      answer:
        "The webinar is [state if free or mention any costs involved and how to pay].",
    },
    {
      question: "Will I receive a certificate after the webinar?",
      answer:
        "Yes, participants will receive a certificate upon completion of the webinar.",
    },
    {
      question: "What software do I need to join?",
      answer:
        "You will need [mention any specific software or platform required, such as Zoom or Microsoft Teams].",
    },
    {
      question: "Can I access the recording later?",
      answer:
        "The recording will be available [mention if and where the recording will be accessible].",
    },
  ];

  //  for the key and featuers of the industry
  const data = [
    {
      id: 1,
      title: "Seamless Booking Experience",
      description:
        "The client wished to build a solution that enabled business owners to quickly create an account, enlist their services, and servers to respective services to collect feedback on teams and individuals. They wish to design a feedback mechanism, a restaurant rating & hotel rating app that allows the customers to get directed to the feedback page through a simple scan of the QR assigned to each server.",
    },
    {
      id: 2,
      title: " Personalized Customer Service",
      description:
        "The client required a comprehensive solution for handling their tour and travel services with an easy-to-use interface.",
    },
    {
      id: 3,
      title: "Mobile-Optimized Solutions",
      description:
        "The main challenges in this case study were performance issues and an outdated technology stack.",
    },
    {
      id: 34,
      title: "Real-Time Availability & Updates",
      description:
        "The main challenges in this case study were performance issues and an outdated technology stack.",
    },
  ];
  const [select, setSelect] = useState(data[0].id); // Track selected title by id
  const [selectedDescription, setSelectedDescription] = useState(
    data[0].description
  ); // Initial description

  const handleTitleClick = (id, description) => {
    setSelect(id); // Set the selected title id
    setSelectedDescription(description); // Set the new description
  };

  //  for custom solution
  const custom = [
    {
      src: "/image/flight.webp",
      alt: "Plan your Trip",
      title: "Plan your Trip",
      description: "Home Flight ",
    },
    {
      src: "/image/hotel.jpg",
      alt: "Search a Hotels",
      title: "Search a Hotels",
      description: "Home Hotel ",
    },
    {
      src: "/image/bg.jpg",
      alt: "Most Popular Holidays",
      title: "Plan & Explore",
      description: "Home Holidays ",
    },
    {
      src: "/image/bg.jpg",
      alt: "Search Adventures",
      title: "Search Adventures",
      description: "Home Activity ",
    },
    {
      src: "/image/bg.jpg",
      alt: "Travel around the world",
      title: "Travel around the world",
      description: "Home All Services ",
    },
    // Add more items as needed
  ];
  return (
    <div>
      {/* headres */}
      <div className=" sticky top-0 z-20">
        <Nav />
      </div>
      <div className="font-sans container">
        {/* hero section */}
        <div className="relative  p-8 md:p-16 lg:p-24">
          <div
            className="absolute inset-0 w-full h-full bg-cover "
            style={{ backgroundImage: "url('/image/fbg.jpg')" }}
          ></div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="md:text-sm  text-[11px]  font-semibold  text-white">
              QUALITY WITH INTEGRITY
            </h2>
            <h1 className="text-xl md:text-5xl text-white font-bold mt-2">
              Unforgettable Experiences in
              <span className="text-primary"> Travel & Hospitality</span>
            </h1>
            <p className="mt-4 text-white text-sm  md:text-lg ">
              Explore world-class solutions tailored for the travel industry
            </p>

            <button className=" inline-block mt-6  px-6 py-3 rounded-lg border border-orange-500  hover:text-primary hover:bg-transparent  md:py-3 md:px-5  bg-primary text-white">
              Discover More
            </button>
          </div>
        </div>

        {/* Industry-Specific Heading & Tagline Solution  */}
        <div className="max-w-4xl text-center mx-auto px-4 md:mt-10 py-10">
          <h2 className="text-xl text-center font-bold text-primary md:mb-4">
            ABOUT
          </h2>
          <h3 className="text-2xl font-semibold text-secondary mb-2">
            Travel & Hospitality Solutions
          </h3>
          <p className=" md:px-0 text-wra px-3 text-sm mb-4">
            At <span className="font-semibold ">Four Steps Digital</span>, we
            believe that travel is not just about reaching a destination; it
            about the experiences that shape our lives. With a passion for
            creating unforgettable journeys, our dedicated team is committed to
            curating unique travel experiences that connect you with the heart
            of each destination. From breathtaking landscapes to vibrant
            cultures, we aim to immerse you in the beauty and diversity of the
            world. Our expertise in the travel and hospitality industry allows
            us to offer tailored solutions that meet your every need, ensuring
            that your journey is seamless and enjoyable. Discover new horizons
            and let us guide you on an adventure of a lifetime!
          </p>
          <button className="font-semibold text-xl px-4 py-2 border-b-2 border-primary rounded-lg hover:text-orange-500">
            Read More
          </button>
        </div>

        {/* over view */}
        <div className=" py-10 bg-[#F5FFFA]">
          <h2 className="text-2xl text-primary  font-semibold text-center">
            Industry Overview
          </h2>
          <div className="container mx-auto md:px-10 p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => {
                const IconComponent = feature.Icon; // Get the icon component

                return (
                  <div
                    key={feature.id}
                    className="bg-white p-6   rounded-lg shadow-md"
                  >
                    <div className="flex items-center mb-4">
                      <div className="text-orange-500">
                        <IconComponent className="h-6 w-6" />{" "}
                        {/* Use the icon component */}
                      </div>
                      <h2 className="text-2xl 	 font-bold ml-2">
                        {feature.title}
                      </h2>
                    </div>
                    <p className="text-gray-700 tracking-tight  text-lg py-2">
                      {feature.description}
                    </p>
                    <div className="my-4 font-semibold">
                      <button
                        href="#"
                        className=" border-b-2 border-orange-500 hover:text-orange-500  inline-block"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* trial */}

        <div className="container mx-auto p-8">
          <div className="text-center">
            <h1 className="text-orange-500 text-sm font-bold mb-2">
              SPECIFIC SOLUTIONS
            </h1>
            <h2 className="md:text-2xl  text-md font-bold mb-4">
              Your Expert in Travel Web Design Solutions
            </h2>
            <p className="mb-10 md:px-10 text-sm md:text-md text-gray-700">
              We are a popular tourism website design company with expertise in
              creating bespoke, compelling, and high-converting websites to
              boost online presence. From tour operators and travel agencies to
              hotel & online ticket booking companies, our user-friendly travel
              web page design services cater to a broad range of businesses with
              enhanced digital experience. Whether you want to build a website
              from scratch or re-design a travel website with custom features &
              functionalities, our tour and travels website design agency expert
              professionals are committed to offering you the best travel
              website design solutions at affordable prices.
            </p>
          </div>
          <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-5 ">
            {/* Image Section */}
            <div className="flex p-2 justify-center">
              <Image
                src="/image/bg.jpg"
                alt="Travel Website Designs"
                className="w-full h-auto rounded-lg shadow-md"
                height={400}
                width={500}
              />
            </div>

            {/* Text Section */}
            <div className="  p-2">
              <h1 className="text-orange-500 text-sm  font-bold mb-2">
                TOURISM WEBSITE DESIGN COMPANY
              </h1>
              <h2 className="text-2xl font-bold mb-4">
                Highlighted Features of Our Custom Travel Web Design Solutions
              </h2>
              <p className="mb-8 text-md text-gray-700">
                As a premier travel website design company, we specialize in
                providing tailored web design solutions exclusively for tour and
                travel agencies. With a team of skilled professionals, we craft
                dynamic and engaging online platforms for our clients through
                our exceptional travel agency website design services. Our
                tourism website design company meticulously crafts websites that
                reflect an aesthetic appeal to captivate the target audience.
                Our experts offer comprehensive travel web page design services,
                ensuring that they not only increase organic traffic but also
                enhance customer engagement by integrating the following
                features into your websites:
              </p>
            </div>
          </div>
        </div>

        {/* Custom Solutions */}

        <div className=" container mx-auto  md:px-20 md:py-10 py-5  bg-gray-100 ">
          <h1 className=" md:text-3xl text-md font-semibold py-4 mb-4 text-center ">
            Travel Agency Custom Solutions & Industry Resources
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 md:px-10 lg:px-20 gap-6 justify-items-center">
            {custom.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-xs flex flex-col items-center"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-40 object-cover"
                  height={200}
                  width={300}
                />
                <div className="p-4 text-center">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-zinc-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Industry-Specific key features Solutions */}

        <div className="bg-gray-50  py-8">
          <div className="text-center text-xl sm:text-2xl font-bold text-gray-800 mb-8">
            Key Features of the Industry
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-6 md:gap-10 rounded-lg shadow-lg p-6 md:p-10 bg-white">
            {/* Left Column: Titles */}
            <div className="space-y-4 md:space-y-5">
              {data.map((item) => (
                <div
                  key={item.id}
                  className={`font-semibold text-lg sm:text-xl cursor-pointer hover:text-orange-600 transition-all duration-300 ease-in-out ${
                    item.id === select ? "text-orange-500" : "text-gray-800"
                  }`}
                  onClick={() => handleTitleClick(item.id, item.description)}
                >
                  {item.title}
                </div>
              ))}
            </div>

            {/* Right Column: Description */}
            <div className="border-l-4 border-orange-500 pl-4 sm:pl-6 space-y-4 md:space-y-5">
              <p className="text-base sm:text-lg text-gray-700">
                {selectedDescription}
              </p>
            </div>
          </div>
        </div>

        {/* Success Stories / Case Studies */}
        <div className=" ">
          <Case />
        </div>
        {/* Client Logos & Testimonials */}

        <div className=" bg-gray-50">
          <div className=" py-2">
            <h2 className=" text-xl font-semibold text-primary text-center mb-3">
              Testimonials
            </h2>
            <h3 className="text-2xl pb-3 font-semibold text-center">
              Happy Clients & Feedbacks
            </h3>
          </div>
          <Testimonial />
        </div>

        {/* Call to Action */}
        <div>
          <Calltoaction />
        </div>
        {/* Resource Section */}
      </div>

      {/* this is FQA SECTION  */}
      <div className="bg-white">
        {/* section 1 */}
        <div className="flex-col  text-center md:pt-10 pb-2 md:pl-10 px-5 w-full">
          <h2 className=" text-xl font-semibold text-primary text-center mb-3">
            FAQS
          </h2>
          <p className="text-xl  font-bold">
            Frequently Asked Questions for the Industry
          </p>
        </div>
        <div className=" md:w-3/4 max-w-4xl mx-auto pb-5">
          <div className="flex justify-end items-center pb-5 md:pr-0 pr-5">
            <button
              className="underline underline-offset-[6px] text-sm px-2 py-1.5  hover:bg-slate-100 "
              onClick={isAllOpen ? handleHideAll : handleExpandAll}
            >
              {isAllOpen ? "Hide all" : "Expand all"}
            </button>
          </div>
          <div className="w-full mx-auto md:px-0 px-5">
            {faqs.map((faq, i) => (
              <div key={i} className="mb-3">
                <div
                  onClick={() => handleToggle(i)}
                  className="w-full md:h-14 h-16 flex justify-between items-center   px-5 py-2 bg-gray-100 rounded  hover:bg-gray-200 cursor-pointer"
                >
                  <p className="md:text-[15px] text-[13px] capitalize md:first-line:font-semibold font-medium mr-1 ">
                    {faq.question}
                  </p>

                  <span>
                    {openIndices.includes(i) ? (
                      <FontAwesomeIcon icon={faChevronUp} />
                    ) : (
                      <FontAwesomeIcon icon={faChevronDown} />
                    )}
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-max-height   duration-700 ease-in-out
                                ${
                                  openIndices.includes(i)
                                    ? "max-h-[1000px]"
                                    : "max-h-0"
                                }`}
                  style={{
                    maxHeight: openIndices.includes(i) ? "1000px" : "0px",
                  }}
                >
                  <div className="py-4 xl:px-10 px-7 text-xs md:text-sm">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* footer section */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Travel;
