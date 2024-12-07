import React, { useState } from "react";
import AboutSection from "@/Component/About/AboutSection";
import { Footer } from "@/Component/Footer/Footer";
import Team from "@/Component/Team/Team";
import Testimonial from "@/Component/Testimonial/Testimonial";
import Image from "next/image";
// import Breadcrumbs from "@/Component/About/Breadcrumbs";

const About = () => {
  const data = [
    {
      title: "Our Mission",
      content:
        "At FourSteps Digital, our mission is to provide comprehensive IT solutions that drive innovation and efficiency. We specialize in delivering tailored technology services that help businesses optimize their operations, enhance security, and scale with confidence. From cloud computing and cybersecurity to software development and IT consulting, we are dedicated to offering cutting-edge solutions that align with our clients' goals. With a focus on reliability, innovation, and customer success, FourSteps Digital is your trusted partner in navigating the complexities of today’s IT landscape. Together, we build a future where technology powers progress.",
    },
    {
      title: "Our Vision",
      content:
        "At FourSteps Digital, our vision is to be a global leader in IT solutions, driving digital innovation that empowers businesses to thrive in a rapidly evolving technological landscape. We aspire to create a world where cutting-edge technology is accessible, seamless, and transformative, enabling companies of all sizes to unlock their full potential. Through continuous innovation, exceptional service, and a commitment to excellence, we envision shaping a future where technology fuels success, fosters growth, and brings lasting positive impact to businesses and communities worldwide.",
    },
    {
      title: "Our Goal",
      content:
        "At FourSteps Digital, our goal is to deliver top-tier IT solutions that drive business success and digital transformation. We aim to provide innovative, reliable, and scalable technology services that meet the unique needs of our clients. By fostering strong partnerships, staying at the forefront of technological advancements, and maintaining a client-centric approach, we strive to empower businesses to achieve operational excellence, enhance productivity, and stay competitive in today’s dynamic market. Our ultimate goal is to be a trusted partner, guiding our clients toward sustainable growth and long-term success through strategic IT solutions.",
    },
  ];

  const [currentdata, setCurrentData] = useState(data[0]);
  const [fade, setFade] = useState(true); // State for fade-in effect

  const handleSectionClick = (newData) => {
    if (newData.title !== currentdata.title) {
      setFade(false); // Start fade-out effect
      setTimeout(() => {
        setCurrentData(newData);
        setFade(true); // Start fade-in effect
      }, 300); // Wait for fade-out to complete
    }
  };

  const formatFirstFourWords = (content) => {
    const words = content.split(" ");
    const firstFourWords = words.slice(0, 3).join(" ");
    const remainingWords = words.slice(3).join(" ");
    return (
      <p className="text-md">
        <span className="font-bold italic">{firstFourWords}</span>{" "}
        {remainingWords}
      </p>
    );
  };

  return (
    <div className="container">
      <div className="w-100vw h-100vh">
        <div
          className="relative w-full h-80 mb-10 sm:h-96 lg:h-[32rem] flex items-center justify-center bg-cover object-cover text-white"
          style={{
            backgroundImage: 'url("/image/bg.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative  text-center md:px-4">
            <p className="text-2xl mb-5">Our Companys About Details.</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold my-2">
              We are a Corporate Business Agency
            </h1>
          </div>
        </div>
      </div>


      {/* Breadcrumbs Component */}
      <div className="w-full ">
        <div className="grid md:grid-cols-2  py-5 gap-8 items-center">
          <div className="w-full  md:px-6 px-4">
            <div className="text-center  md:text-left mb-4">
              <span className="text-red-500 bg-red-100 rounded-md px-3 py-2 text-sm">
                4steps Digital
              </span>
            </div>
            <h1 className="text-3xl font-bold text-center md:text-left mb-4 leading-snug">
              We are born to
              <br />
              <span className="text-gradient">Develop Experience</span>
            </h1>
            <p className="text-sm text-center     md:text-left">
              Back in 2020, something exciting took shape in Greater Noida – an
              agency led by the enthusiastic Mr. Amarjeet Kumar Singh. They
              started off as <b>“4steps Marketing”</b> and quickly made a name
              for themselves with their innovative ideas. But guess what? They
              have grown even more since then! They recently revamped their
              identity and are now known as
              <b>“Four Steps Digital Consulting Pvt. Ltd.”</b>
              This new name shows they are not just about marketing anymore –
              they are all about helping folks navigate the digital world and
              offering top-notch advice. Four Steps Digital Consulting Pvt Ltd
              is a digital consulting agency in India. We are dedicated to
              honesty, hard work, and results we serve small-medium size
              businesses. Our primary focus is to
              <span className=" text-blue-400">
                Zoho Consulting, HubSpot Consulting, Digital Marketing &
                Branding, and Website Designing & Development
              </span>
            </p>
          </div>
          <div className="w-full md:w-3/4 flex justify-center">
            <Image
              alt="ejf"
              src="/image/ab.webp"
              className="rounded-md shadow-md"
              height={600}
              width={600}
            />
          </div>
        </div>
      </div>

      <div>
        <div className="w-full my-5  grid place-items-center">
          <div className="grid place-items-center">
            <h1 className="text-center text-md md:text-xl lg:text-3xl tracking-wide font-semibold">
              Work For Your
              <br />
              <span className="text-gradient">Incredible Success</span>
            </h1>
          </div>
        </div>

        <div className="flex px-1 justify-around md:max-w-4xl mx-auto border py-3 bg-white rounded-full shadow-xl">
          {data.map((data, index) => (
            <span
              key={index}
              onClick={() => handleSectionClick(data)}
              className={`cursor-pointer flex items-center ${
                currentdata.title === data.title
                  ? "text-red-500"
                  : "text-zinc-800"
              }`}
            >
              <span className="text-3xl">•</span>
              <span className="ml-1 font-medium ">{data.title}</span>
            </span>
          ))}
        </div>

        <div
          className={`w-full md:max-w-4xl my-5 h-auto mx-auto grid place-items-center px-5 text-[13px] md:text-sm ${
            fade ? "fade-in" : "fade-out"
          }`}
        >
          {formatFirstFourWords(currentdata.content)}
        </div>
      </div>
      {/* Team Section */}
      <div>
        <Team />
      </div>

      {/* Extra Section */}
      <div className="w-full py-5 grid place-items-center">
        <div className="grid place-items-center">
          <h1 className="text-center text-md md:text-xl lg:text-2xl tracking-wide font-semibold">
            Access your business potentials
            <br /> today & find opportunity for
            <br />
            <span className="text-gradient">bigger success</span>
          </h1>
        </div>
      </div>
      {/* this is testimonial */}

      <div>
        <Testimonial />
      </div>
      {/*footer section  */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
