import Loader from "./Loader";
import React from "react";
import useGif from "../hooks/useGif";

function Random() {
  const { gif, loader, fetchData } = useGif();

  return (
    <div className="w-1/2 gap-y-5 mt-[15px] rounded-lg flex flex-col items-center border border-black bg-green-500">
      <h1 className="text-2xl mt-[15px] underline uppercase font-bold">
        Random GIF
      </h1>
      {loader ? <Loader /> : <img src={gif} width={450} alt="" />}
      <button
        className="mb-[20px] w-10/12 rounded-lg text-lg py-2 opacity-80 bg-white"
        onClick={() => fetchData()}
      >
        Generate
      </button>
    </div>
  );
}

export default Random;
