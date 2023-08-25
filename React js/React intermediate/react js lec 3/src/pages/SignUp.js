import React from "react";
import Template from "../components/Templates";
import signup from "../assets/signup.png";

function SignUp({ setLoggedIn }) {
  return (
    <Template
      title="Join the millions learing to code with StudyNotion for free"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={signup}
      formtype="signup"
      setLoggedIn={setLoggedIn}
    />
  );
}

export default SignUp;
