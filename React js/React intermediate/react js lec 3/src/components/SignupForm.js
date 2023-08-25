import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function SignupForm({ setLoggedIn }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [accountType, setAccountType] = useState("student");

  const changeHandler = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    console.log(formData);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Password do not match");
      return;
    }

    setLoggedIn(true);
    toast.success("Account Created");

    const accountData = {
      ...formData,
    };
    const finalData = {
      ...accountData,
      accountType,
    };
    console.log(finalData);

    navigate("/dashboard");
  };

  return (
    <div>
      <div className="flex bg-slate-800 p-1 gap-x-1 rounded-full my-6 max-w-max">
        <button
          onClick={() => setAccountType("student")}
          className={`${
            accountType === "student"
              ? "bg-gray-900 text-white"
              : "bg-transparent text-gray-300"
          } py-2 px-5 rounded-full transition-all duration-200
          `}
        >
          Student
        </button>
        <button
          onClick={() => setAccountType("instructor")}
          className={`${
            accountType === "instructor"
              ? "bg-gray-900 text-white"
              : "bg-transparent text-gray-300"
          } py-2 px-5 rounded-full transition-all duration-200
          `}
        >
          Instructor
        </button>
      </div>
      <form
        className="flex flex-col w-full mt-6 gap-y-4 "
        onSubmit={submitHandler}
      >
        <div className="flex gap-4">
          <label className="w-1/2">
            <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
              First Name <sup className="text-pink-400">*</sup>
            </p>
            <input
              className="bg-gray-800 border-b-[1px] border-white p-[12px] w-full text-white rounded-[0.5rem]"
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstName}
            />
          </label>

          <label className=" w-1/2">
            <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
              Last Name <sup className="text-pink-400">*</sup>
            </p>
            <input
              className="bg-gray-800 border-b-[1px] border-white p-[12px] w-full text-white rounded-[0.5rem]"
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={formData.lastName}
            />
          </label>
        </div>

        <label className="w-full">
          <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
            Email Address <sup className="text-pink-400">*</sup>
          </p>
          <input
            className="bg-gray-800 border-b-[1px] border-white p-[12px] w-full text-white rounded-[0.5rem]"
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter Email Address"
            value={formData.email}
          />
        </label>

        <div className="flex gap-4">
          <label className="w-1/2 relative">
            <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
              Create Password <sup className="text-pink-400">*</sup>
            </p>
            <input
              className="bg-gray-800 border-b-[1px] border-white p-[12px] w-full text-white rounded-[0.5rem]"
              required
              type={showPassword1 ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder="Enter Password"
              value={formData.password}
            />
            <span
              className="absolute cursor-pointer right-3 top-[38px]"
              onClick={() => setShowPassword1((prev) => !prev)}
            >
              {showPassword1 ? (
                <AiOutlineEye fill="#fff" fontSize={24} />
              ) : (
                <AiOutlineEyeInvisible fill="#fff" fontSize={24} />
              )}
            </span>
          </label>

          <label className="w-1/2 relative">
            <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
              Confirm Password <sup className="text-pink-400">*</sup>
            </p>
            <input
              className="bg-gray-800 border-b-[1px] border-white p-[12px] w-full text-white rounded-[0.5rem]"
              required
              type={showPassword2 ? "text" : "password"}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
            />
            <span
              className="absolute cursor-pointer right-3 top-[38px]"
              onClick={() => setShowPassword2((prev) => !prev)}
            >
              {showPassword2 ? (
                <AiOutlineEye fill="#fff" fontSize={24} />
              ) : (
                <AiOutlineEyeInvisible fill="#fff" fontSize={24} />
              )}
            </span>
          </label>
        </div>
        <button className="bg-yellow-400 rounded-[8px] mt-6 px-[12px] py-[8px] font-medium text-slate-900">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
