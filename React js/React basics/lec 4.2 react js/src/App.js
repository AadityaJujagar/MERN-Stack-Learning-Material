import React, { useEffect, useState } from "react";
import { apiUrl, filterData } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { toast } from "react-toastify";
import LoadingIcon from "./components/LoadingIcon";
import "./index.css";

const App = () => {
  const [courses, setCourses] = useState(null); // [] instead of null
  const [loading, setLoader] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchingData() {
    setLoader(true);
    try {
      const fetchedRawData = await fetch(apiUrl);
      const jsonData = await fetchedRawData.json();
      setCourses(jsonData.data);
    } catch (error) {
      toast.error("error in toast");
    }
    setLoader(false);
  }

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <div className="bg-bgDark2 min-h-screen flex flex-col">
      <div>
        <Navbar />
      </div>
      <div className="bg-bgDark2">
        <div>
          <Filter
            category={category}
            setCategory={setCategory}
            filterData={filterData}
          />
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {loading ? (
            <LoadingIcon />
          ) : (
            <Cards courses={courses} category={category} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
