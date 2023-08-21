import React from "react";
import Testimonials from "./components/Testmonials";
import reviews from "./data";

const App = () => {
  return (
    <div className="flex w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
      <div className="text-center">
        <h1 className="text-4xl font-bold">CodeHelp | Testmonials</h1>
        <div className="bg-violet-400 h-[5px] w-1/2 mt-2.5 mx-auto"></div>
        <Testimonials reviews={reviews} />
      </div>
    </div>
  );
};

export default App;
