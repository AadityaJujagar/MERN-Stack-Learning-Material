import React from "react";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Blogs from "../components/Blogs";
import Paginating from "../components/Paginating";

function CategoryPage() {
  const navigation = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);

  return (
    <div>
      <Header />
      <div>
        <button onClick={() => navigation(-1)}>Back</button>
        <h2>
          Blog on <span>{category}</span>
        </h2>
      </div>
      <Blogs />
      <Paginating />
    </div>
  );
}

export default CategoryPage;
