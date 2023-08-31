import React from "react";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Paginating from "../components/Paginating";
import "../App.css";

function Home() {
  return (
    <div>
      <Header />
      <div>
        <div className="max-w-[650px] flex flex-col mx-auto">
          <Blogs />
        </div>
        <Paginating />
      </div>
    </div>
  );
}

export default Home;
