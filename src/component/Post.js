import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SanityClient from "../client";
import { PortableText } from "@portabletext/react";


const Post = () => {
  const { slug } = useParams(); // Get slug from the URL
  const [post, setPost] = useState(null);

  console.log(slug)

  useEffect(() => {
    SanityClient.fetch(
      `*[ _type == "post"
        && slug.current == $slug
      ] {
        title,
        category,
        publishedAt,
        body,
        image {
          asset -> { url }
        }
      }`,
      { slug }
    )
      .then((data) => {
        console.log("Fetched Data:", data); // Debug fetched data
        setPost(data[0]);
      })
      .catch(console.error);
  }, [slug]);
  

  console.log(post)

  if (!post) return <div>Loading...</div>;

  return (
    <>
   

    <div className="bg-gray-900 text-white gap-5 p-5 flex h-fit">
  
      <div className="w-1/2">
      {post.image?.asset?.url && (
          <img
            src={post.image.asset.url}
            alt={post.title}
            className="w-full h-96 object-cover"
          />
        )}
      </div>
      <div className="w-1/2">
      <h1 className="text-4xl font-bold">{post.title}</h1>
        <p className="text-blue-400 mb-8">
          Published on {new Date(post.publishedAt).toLocaleDateString()}
        </p>
        <div className="text-lg leading-relaxed">
       
      </div>
      
</div>
      </div>
      <div className="bg-gray-900 w-full p-10 pt-0 text-white">
      <PortableText value={post.body} />
      </div>


        </>
  );
};

export default Post;
