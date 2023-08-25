import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

function LoginForm({ setLoggedIn }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const changeHandler = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
  };

  return (
    <form
      className="flex flex-col w-full mt-6 gap-y-4 "
      onSubmit={submitHandler}
    >
      <label className="w-full">
        <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
          Email Address <sup className="text-pink-400">*</sup>
        </p>
        <input
          className="bg-gray-800 border-b-[1px] border-white p-[12px] w-full text-white rounded-[0.5rem]"
          required
          type="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter Email id"
          name="email"
        />
      </label>

      <label className="relative">
        <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
          Password <sup className="text-pink-400">*</sup>
        </p>
        <input
          className="bg-gray-800 border-b-[1px] border-white p-[12px] w-full text-white rounded-[0.5rem]"
          required
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter Password"
          name="password"
        />
        <span
          className="absolute cursor-pointer right-3 top-[38px]"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          )}
        </span>
        <Link to="#">
          <p className="text-xs mt-1 text-blue-500 max-w-max ml-auto">
            Forgot Password
          </p>
        </Link>
      </label>
      <button className="bg-yellow-400 rounded-[8px] mt-6 px-[12px] py-[8px] font-medium text-slate-900">
        Sign In
      </button>
    </form>
  );
}

export default LoginForm;
