import { Link } from "react-router-dom";
import SanityClient from "../client";
import React, { useEffect, useState } from "react";

const Allpost = () => {
  const [allPostData, setAllPostData] = useState([]);

  useEffect(() => {
    SanityClient.fetch(
      `*[ 
        _type == "post"  
      ] | order(publishedAt desc)[0] {
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
    <div className="bg-gray-900">
      <h1 className="text-center text-red-400"></h1>
      <main className="container mx-auto min-h-screen max-w-6xl py-10 px-0">
        <h1
          className="text-4xl font-bold mb-8 text-white"
          style={{ textShadow: "0px 0px 10px red" }}
        >
          LATEST NEWS ...
        </h1>
        <ul className="flex flex-wrap gap-4">
          {allPostData.map((post) => (
            <li className="hover:underline w-[32%]" key={post._id}>
              <Link to={`/post/${post.slug.current}`}>
                {post.image?.asset?.url && (
                  <img
                    src={post.image.asset.url}
                    alt={post.title}
                    className="w-full h-1/2 mb-4 hover:scale-105 transition-transform duration-300"
                  />
                )}
                <h2 className="text-xl font-semibold text-white capitalize">
                  {post.title}
                </h2>
                <p className="text-blue-400">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Allpost;
