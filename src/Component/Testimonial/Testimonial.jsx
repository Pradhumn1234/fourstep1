import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  // State for testimonials and loading status
  const [testimonial, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch testimonials on mount
  useEffect(() => {
    const fetchTestimonials = async () => {
      const response = await fetch("/api/testimonial/testimonial");
      const data = await response.json();
      setTestimonials(data);
      setLoading(false);
    };

    fetchTestimonials();
  }, []);

  // State for banner images
  const [banner, setBanner] = useState([]);

  // Fetch banner images on mount
  useEffect(() => {
    const handleBanner = async () => {
      const response = await fetch("/api/testimonial/banner-testimonial");
      const result = await response.json();
      setBanner(result);
    };

    handleBanner();
  }, []);
  const backgroundImage =
    banner.length > 0 ? `url('${banner[0].path}')` : "url('/image/bg.jpg')"; // Fallback image

  // Render loading state
  if (loading) return <p>Loading testimonials...</p>;

  return (
    <div className="container">
      <div
        className="relative bg-cover w-full h-full bg-center text-white justify-center items-center"
        style={{ backgroundImage }} // Set the dynamic background image
      >
        <div className="container py-12">
          <Slider {...settings}>
            {testimonial.map((item) => (
              <div key={item._id}>
                <div className="flex flex-col items-center justify-center py-2   max-w-md mx-auto">
                  <h2 className="md:text-4xl text-lg text-white font-bold tracking-wide mb-3">
                    Testimonial
                  </h2>
                  <img
                    src={item?.path}
                    alt={item?.name}
                    className="rounded-full mt-3 object-cover mb-2 h-36 w-36 border-4 border-gray-400"
                  />
                  <div className="flex gap-2">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                  </div>
                  <p className="italic">{item.designation}</p>
                  <p className="text-center text-xs mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
