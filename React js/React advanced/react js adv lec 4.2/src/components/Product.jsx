import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { add, remove } from "../redux/Slices/CartSlice";

function Product({ post }) {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  };
  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  };

  return (
    <div className="flex flex-col items-center justify-between hover:scale-105 transition border rounded-xl ml-5 duration-150 ease-in hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] gap-3 p-4 mt-10">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
          {post.title.split(" ").slice(0, 3).join(" ") + "..."}
        </p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-left text-[10px]">
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[180px]">
        <img src={post.image} className="h-full w-full" alt="" />
      </div>
      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <div>
          <p className="text-green-600 font-semibold">${post.price}</p>
        </div>
        {cart.some((postExists) => postExists.id === post.id) ? (
          <div>
            <button
              className="text-gray-700 border-2 border-2-gray-700 rounded-full font-semibold text-[12px] hover:bg-gray-700 hover:text-white transition duration-150 p-1 px-3 uppercase"
              onClick={removeFromCart}
            >
              Remove Item
            </button>
          </div>
        ) : (
          <button
            className="text-gray-700 border-2 border-2-gray-700 rounded-full font-semibold text-[12px] hover:bg-gray-700 hover:text-white transition duration-150 p-1 px-3 uppercase"
            onClick={addToCart}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Product;
