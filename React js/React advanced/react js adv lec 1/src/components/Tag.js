import Loader from "./Loader";
import React, { useState } from "react";
import useGif from "../hooks/useGif";

function Tag() {
  const [tag, setTag] = useState("");
  const { gif, loader, fetchData } = useGif();

  const changeHandler = (event) => {
    // corrosponding changes done in input tag
    // or wherever the function is called
    // setTag will fetch all the same data
    setTag(event.target.value);
  };

  return (
    <div className="w-1/2 gap-y-5 mt-[15px] rounded-lg flex flex-col items-center border border-black bg-blue-500">
      <h1 className="text-2xl mt-[15px] underline uppercase font-bold">
        Search GIF
      </h1>
      {loader ? <Loader /> : <img src={gif} width={450} alt="" />}
      <input
        onChange={changeHandler}
        placeholder="Search your gif here..."
        value={tag}
        className="w-10/12 mb-[5px] text-center rounded-lg text-lg py-2 opacity-80"
      />
      <button
        className="mb-[20px] w-10/12 rounded-lg text-lg py-2 opacity-80 bg-white"
        onClick={() => fetchData(tag)}
      >
        Generate
      </button>
    </div>
  );
}

export default Tag;
