import React from "react";
import { toast } from "react-hot-toast";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";

function Carditems({ item }) {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from Cart");
  };

  return (
    <div>
      <div>
        <img src={item.image} width={100} height={100} alt="" />
      </div>
      <div>
        <h1>{item.title}</h1>
        <h1>{item.description}</h1>
      </div>
      <div>
        <p>{item.price}</p>
        <button onClick={removeFromCart}>
          <RiDeleteBin5Line />
        </button>
      </div>
    </div>
  );
}

export default Carditems;
