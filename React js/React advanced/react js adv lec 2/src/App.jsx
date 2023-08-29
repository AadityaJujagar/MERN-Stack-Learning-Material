import React, { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Paginating from "./components/Paginating";

export default function App() {
  const { fetchBlogData } = useContext(AppContext);

  useEffect(() => {
    fetchBlogData();
  }, []);

  return (
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
      <Header />
      <Blogs />
      <Paginating />
    </div>
  );
}
