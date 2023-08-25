import React from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import frameImg from "../assets/frame.png";
import { FcGoogle } from "react-icons/fc";

function Template({ title, desc1, desc2, formtype, image, setLoggedIn }) {
  return (
    <div className="flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0">
      <div className="flex w-11/12 max-w-[450px] flex-col">
        <h1 className="text-white font-semibold text-[1.875rem] leading-[2.375rem]">
          {title}
        </h1>
        <p className="flex flex-col text-[1.125rem] leading-[1.625rem] mt-4">
          <span className="text-white">{desc1}</span>
          <span className="text-blue-500 italic">{desc2}</span>
        </p>
        {formtype === "signup" ? (
          <SignupForm setLoggedIn={setLoggedIn} />
        ) : (
          <LoginForm setLoggedIn={setLoggedIn} />
        )}
        <div className="flex w-full items-center my-4 gap-x-2">
          <div className="h-[1px] w-full bg-slate-600"></div>
          <p className="text-slate-600">OR</p>
          <div className="h-[1px] w-full bg-slate-600"></div>
        </div>
        <button className="w-full flex justify-center items-center rounded-[8px] font-medium border px-[12px] py-[8px] mt-2 gap-x-2 border-slate-700 text-white">
          <FcGoogle fontSize={22} />
          <p>Sign in with Google</p>
        </button>
      </div>
      <div className="relative w-11/12 max-w-[450px]">
        <img
          className="absolute -top-4 right-4"
          src={image}
          width={540}
          height={500}
          loading="lazy"
          alt="students"
        />
        <img
          className=""
          src={frameImg}
          width={558}
          height={504}
          loading="lazy"
          alt="frame pattern"
        />
      </div>
    </div>
  );
}

export default Template;
