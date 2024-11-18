import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import SanityClient from "../client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../index.css";
import "./herosection.css";

const Herosection = () => {
  const [allslider, setAllSlider] = useState([]);

  useEffect(() => {
    // Fetch heroSection data from Sanity
    SanityClient.fetch(
      `*[ _type == "heroSection" ] | order(publishedAt desc)[0...12] {
        _id, 
        headline, 
        subheadline, 
        publishedAt, 
        ctaButton {
          label,
          link
        },
        backgroundImage {
          asset -> { url }
        }
      }`
    )
      .then((data) => setAllSlider(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section>
      <Swiper
        className="mySwiper"
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >
        {allslider.map((slider) => (
          <SwiperSlide key={slider._id}>
            <div className="relative">
              {/* Background Image */}
              {slider.backgroundImage?.asset?.url ? (
                <img
                  src={slider.backgroundImage.asset.url}
                  alt={slider.headline}
                  className="w-full h-[90vh] object-cover"
                />
              ) : (
                <div className="w-full h-[80vh] bg-gray-300 flex items-center justify-center">
                  <p>No Image Available</p>
                </div>
              )}

              {/* Headline and CTA */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-center">
                <h2 className="text-3xl font-bold text-white mb-4 "   style={{
                      boxShadow: "inset 20px 20px 300px red",
                      padding: "20px",
                      borderRadius:'20px'
                    }}>
                  {slider.headline}
                </h2>
                {slider.subheadline && (
                  <p
                    className="text-lg font-bold text-white mx-10 md:mx-60"
                    style={{
                      boxShadow: "inset 0px 0px 50px black",
                      borderRadius:'20px',
                      padding: "20px",
                    }}
                  >
                    {slider.subheadline}
                  </p>
                )}
                {slider.ctaButton?.link && (
                  <Link
                    to={slider.ctaButton.link}
                    target="_blank"
                    className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-500 mt-8"
                  >
                    {slider.ctaButton.label || "Learn More"}
                  </Link>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Herosection;
