import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Paginating() {
  const { page, handlePageNumber, totalPages } = useContext(AppContext);

  return (
    <div className="w-full p-[30px] border-t-2 border-stone-400 flex justify-around items-center">
      <div className="w-[650px] flex justify-between items-center">
        <div>
          {page > 1 && (
            <button
              className="rounded-md border-2 border-stone-400 px-4 py-1"
              onClick={() => handlePageNumber(page - 1)}
            >
              Previous
            </button>
          )}{" "}
          {page < totalPages && (
            <button
              className="rounded-md border-2 border-stone-400 px-4 py-1"
              onClick={() => handlePageNumber(page + 1)}
            >
              Next
            </button>
          )}
        </div>
        <p className="font-bold text-sm">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
}

export default Paginating;
