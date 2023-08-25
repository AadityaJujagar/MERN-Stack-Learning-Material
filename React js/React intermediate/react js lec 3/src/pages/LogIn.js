import React from "react";
import Template from "../components/Templates";
import login from "../assets/login.png";

function LogIn({ setLoggedIn }) {
  return (
    <Template
      title="Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond"
      desc2="Education to future-proof your career"
      image={login}
      formtype="login"
      setLoggedIn={setLoggedIn}
    />
  );
}

export default LogIn;
