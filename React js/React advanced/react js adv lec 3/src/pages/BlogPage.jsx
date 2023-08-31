import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { apiUrl } from "../apiUrl";
import Loader from "../components/Loader";
import BlogCard from "../components/BlogCard";

function BlogPage() {
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const { loading, setLoader } = useContext(AppContext);
  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs() {
    setLoader(true);
    let url = `${apiUrl}?blogId=?${blogId}`;
    try {
      const rawData = await fetch(url);
      const data = await rawData.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch (error) {
      console.log("error");
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoader(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div>
      <Header />
      <div>
        <button onClick={() => navigation(-1)}>Back</button>
      </div>
      {loading ? (
        <Loader />
      ) : blog ? (
        <div>
          <BlogCard post={blog} />
          <h2>Related Blogs</h2>
          {relatedBlogs.map((post) => (
            <div key={post.id}>
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      ) : (
        <p>No blogs found</p>
      )}
    </div>
  );
}

export default BlogPage;
