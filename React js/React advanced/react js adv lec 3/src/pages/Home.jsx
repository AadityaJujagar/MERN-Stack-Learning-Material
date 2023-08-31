import React from "react";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Paginating from "../components/Paginating";

function Home() {
  return (
    <div>
      <Header />
      <div>
        <Blogs />
        <Paginating />
      </div>
    </div>
  );
}

export default Home;
