import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Loader from "./Loader";
import "../App.css";

function Blogs() {
  const { posts, loader } = useContext(AppContext);
  console.log(posts);

  return (
    <div className="gap-y-7 max-w-[650px] py-2 pb-2 flex flex-col ">
      {loader ? (
        <Loader />
      ) : (
        <div>
          {posts.length === 0 ? (
            <div>
              <p>No Posts Found</p>
            </div>
          ) : (
            posts.map((post) => (
              <div key={post.id}>
                <p className="font-bold text-[20px] pt-[15px] pb-1">
                  {post.title}
                </p>
                <p className="text-[12px]">
                  By <span className="italic">{post.author}</span> on{" "}
                  <span className="underline cursor-pointer font-bold">
                    {post.category}
                  </span>
                </p>
                <p className="text-[13px] py-1">Posted on {post.date}</p>
                <p className="text-md pt-2">{post.content}</p>
                <div className="pb-[15px] pt-1 flex gap-x-2 underline cursor-pointer text-blue-600 font-bold text-[12px]">
                  {post.tags.map((tag, index) => (
                    <span key={index}>{`  #${tag}  `}</span>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default Blogs;
