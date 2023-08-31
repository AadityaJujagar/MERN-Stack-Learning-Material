import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Loader from "./Loader";
import "../App.css";
import BlogCard from "./BlogCard";

function Blogs() {
  const { posts, loader } = useContext(AppContext);
  console.log(posts);

  return (
    <div className="flex flex-col gap-y-10 my-4">
      {loader ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <Loader />
        </div>
      ) : posts.length === 0 ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <p className="text-center font-bold text-3xl">No Posts Found</p>
        </div>
      ) : (
        posts.map((post) => <BlogCard key={post.id} post={post} />)
      )}
    </div>
  );
}

export default Blogs;
