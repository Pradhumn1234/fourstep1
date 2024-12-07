import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
  const data = [
    { id: 1, images: "/image/ab.webp" },
    { id: 2, images: "/image/ab.webp" },
    { id: 3, images: "/image/ab.webp" },
  ];

  const texts = [
    "Website Development",
    "Zoho Consulting",
    "Hubspot Consulting",
    "Digital Marketing & Branding",
    "Digital Strategy Development",
  ];
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);

  // Effect to handle typing text letter by letter
  useEffect(() => {
    if (letterIndex < texts[index].length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + texts[index][letterIndex]);
        setLetterIndex(letterIndex + 1);
      }, 100); // Speed of typing, 100ms per letter
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        // Move to the next word after a short delay
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setCurrentText("");
        setLetterIndex(0);
      }, 2000); // Delay before typing the next word
      return () => clearTimeout(timeout);
    }
  }, [letterIndex, index, texts]);

  return (
    <div className=" container ">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 p-6   items-center">
        <div className=" ">
          <h2 className="text-xl md:text-2xl text-orange-500 py-2 font-bold">
            Digital Consulting Agency
          </h2>
          <h2 className="text-xl md:text-2xl py-4 font-semibold">
            Transform Your Business Into A Digitally-Driven Organization
          </h2>
          <div>
            <h1 className="md:text-3xl text-2xl py-4">
              <span className="font-bold">For</span> Your
              <div className="text-gray-800 font-bold">{currentText} |</div>
            </h1>
          </div>

          <div className="mt-6">
            <button className=" border border-orange-500  hover:text-primary hover:bg-white  py-2 md:py-3 px-4 md:px-5 rounded-xl bg-primary text-white">
              Read More
            </button>
            <button className="ml-4 border border-orange-500  text-primary  py-2 md:py-3 px-4 md:px-5 rounded-xl hover:bg-primary hover:text-white">
              Connect Now
            </button>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="mt-6 lg:mt-0">
          <Carousel
            showThumbs={false}
            autoPlay
            interval={3000}
            infiniteLoop
            showStatus={false}
            showArrows={false}
            showIndicators={false}
            dynamicHeight={true}
            swipeable={true}
            stopOnHover={true}
            emulateTouch={true}
            onChange={(index) => console.log(`Active index: ${index}`)}
            renderArrowPrev={(onClickHandler, hasPrev) =>
              hasPrev && (
                <button
                  className="arrow-circle left-arrow"
                  onClick={onClickHandler}
                >
                  <FontAwesomeIcon icon={faAngleLeft} />
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext) =>
              hasNext && (
                <button
                  className="arrow-circle right-arrow"
                  onClick={onClickHandler}
                >
                  <FontAwesomeIcon icon={faAngleRight} />
                </button>
              )
            }
          >
            {data.map((item) => (
              <div key={item.id}>
                <img
                  src={item.images}
                  alt={`Image ${item.id}`}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
