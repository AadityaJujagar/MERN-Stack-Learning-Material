import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Product from "../components/Product";

function Home() {
  const API_URL = "https://fakestoreapi.com/products";
  const [loader, setLoader] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchData() {
    setLoader(true);
    try {
      const rawData = await fetch(API_URL);
      const data = await rawData.json();
      setPosts(data);
    } catch (error) {
      console.log(error);
      setPosts([]);
    }
    setLoader(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loader ? (
        <Loader />
      ) : posts.length > 0 ? (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {posts.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p>No posts found</p>
        </div>
      )}
    </div>
  );
}

export default Home;
