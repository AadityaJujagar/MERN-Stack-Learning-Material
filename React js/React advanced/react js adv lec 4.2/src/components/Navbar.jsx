import React from "react";
import { ImCart } from "react-icons/im";
import { NavLink } from "react-router-dom";
import "../index.css";
import { useSelector } from "react-redux";

function Navbar() {
  const { cart } = useSelector((state) => state);

  return (
    <div>
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="ml-5 ">
            <img src="../logo.png" className="h-14" alt="" />
          </div>
        </NavLink>
        <div className="flex items-center text-slate-100 mr-5 space-x-6 font-medium">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div className="relative">
              <ImCart className="text-2xl" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-green-600 text-xs h-5 flex justify-center items-center animate-bounce rounded-full w-5 text-white">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
