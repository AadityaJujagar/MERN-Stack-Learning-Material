import React, { createContext, useState } from "react";
import { apiUrl } from "../apiUrl";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loader, setLoader] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  async function fetchBlogData(page = 1) {
    setLoader(true);
    let url = `${apiUrl}?page=${page}`;
    try {
      const result = await fetch(url);
      const data = await result.json();
      console.log(data);
      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log(error);
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }
    setLoader(false);
  }

  function handlePageNumber(page) {
    setPage(page);
    fetchBlogData(page);
  }

  const contextValue = {
    loader,
    setLoader,
    posts,
    setPosts,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogData,
    handlePageNumber,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
