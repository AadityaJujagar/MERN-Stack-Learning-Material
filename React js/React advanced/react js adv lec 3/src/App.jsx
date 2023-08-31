import React, { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import TagPage from "./pages/TagPage";
import CategoryPage from "./pages/CategoryPage";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";

export default function App() {
  const { fetchBlogData } = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;
    if (location.pathname.includes("tags")) {
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogData(Number(page), tag);
    } else if (location.pathname.includes("category")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogData(Number(page), null, category);
    } else {
      fetchBlogData(Number(page));
    }
  }, [location.pathname, location.search]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:blogId" element={<BlogPage />} />
      <Route path="/tags/:tag" element={<TagPage />} />
      <Route path="/categories/:category" element={<CategoryPage />} />
    </Routes>
  );
}
