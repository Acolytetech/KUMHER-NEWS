import { Link } from "react-router-dom";
import SanityClient from "../client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../index.css";
import "./herosection.css";

const Allpost = () => {
  const [allPostData, setAllPostData] = useState([]);

  useEffect(() => {
    // Fetch data from Sanity CMS
    SanityClient.fetch(
      `*[ 
        _type == "post"  
      ] | order(publishedAt desc)[0...10] {
        _id, 
        title, 
        category,
        slug, 
        publishedAt, 
        body,
        image {
          asset -> { url }
        }
      }`
    )
      .then((data) => setAllPostData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="w-full bg-gray-900">
      <main className="mx-auto min-h-screen max-w-8xl py-10 px-10">
        <div className="flex justify-between">
        <h1
          className="text-4xl font-bold mb-8 text-white"
          style={{ textShadow: "0px 0px 10px red" }}
        >
          LATEST NEWS ...
        </h1>
        <h1
          className="text-xl font-bold mb-8 text-white hover:text-blue-300"
          style={{ textShadow: "0px 0px 10px blue", cursor:'pointer' }}
          onClick={() => window.open('/latestnews')}
          >
         View All ➡️
        </h1>
          </div>
        
        <Swiper
          className="mySwiper"
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={4}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          // navigation={flase}
          pagination={{ clickable: true }}
          loop={true}
        >
          {allPostData.map((post) => (
            <SwiperSlide key={post._id} className="w-full sm:w-1/2 lg:w-1/4 xl:w-1/5">
              <Link to={`/post/${post.slug.current}`} className="block">
                {post.image?.asset?.url && (
                  <img
                    src={post.image.asset.url}
                    alt={`Image for ${post.title}`}
                    className="w-full h-60 object-cover mb-4 hover:scale-105 transition-transform duration-300"
                  />
                )}
                <h2 className="text-lg font-semibold text-white capitalize mb-2">
                  {post.title}
                </h2>
                <p className="text-blue-400">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </div>
  );
};

export default Allpost;
