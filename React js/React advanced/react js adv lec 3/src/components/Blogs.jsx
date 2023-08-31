import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Loader from "./Loader";
import "../App.css";
import BlogCard from "./BlogCard";

function Blogs() {
  const { posts, loader } = useContext(AppContext);
  console.log(posts);

  return (
    <div className="gap-y-7 mx-auto max-w-[650px] py-2 pb-2 flex flex-col ">
      {loader ? (
        <div className="mx-auto">
          <Loader />
        </div>
      ) : (
        <div>
          {posts.length === 0 ? (
            <div>
              <p>No Posts Found</p>
            </div>
          ) : (
            posts.map((post) => <BlogCard key={post.id} post={post} />)
          )}
        </div>
      )}
    </div>
  );
}

export default Blogs;
