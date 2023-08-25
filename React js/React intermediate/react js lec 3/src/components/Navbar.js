import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { toast } from "react-hot-toast";

function Navbar(props) {
  const loggedIn = props.loggedIn;
  const setLoggedIn = props.setLoggedIn;

  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] my-4 mx-auto">
      <Link to="/">
        <img
          src={logo}
          alt="StudyNotion logo"
          width={160}
          height={32}
          loading="lazy"
        />
      </Link>
      <nav>
        <ul className="flex gap-x-6 text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contacts</Link>
          </li>
        </ul>
      </nav>

      <div className="flex gap-x-4 text-white items-center ">
        {!loggedIn && (
          <Link to="/login">
            <button className="py-[8px] px-[12px] rounded-[8px] border border-slate-700 bg-slate-800">
              Log In
            </button>
          </Link>
        )}
        {!loggedIn && (
          <Link to="/signup">
            <button className="py-[8px] px-[12px] rounded-[8px] border border-slate-700 bg-slate-800">
              Sign Up
            </button>
          </Link>
        )}
        {loggedIn && (
          <Link to="/">
            <button
              className="py-[8px] px-[12px] rounded-[8px] border border-slate-700 bg-slate-800"
              onClick={() => {
                setLoggedIn(false);
                toast.success("Logged Out");
              }}
            >
              Sign Out
            </button>
          </Link>
        )}
        {loggedIn && (
          <Link to="/dashboard">
            <button className="py-[8px] px-[12px] rounded-[8px] border border-slate-700 bg-slate-800">
              Dashboard
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
