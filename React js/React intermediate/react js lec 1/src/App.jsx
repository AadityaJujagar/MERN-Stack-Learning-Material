import { useState } from "react";
import "./index.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    checkbox: false,
    mode: "",
    favCar: "",
  });

  console.log(formData.email);
  console.log(formData);

  const changeHandler = (event) => {
    // destructuring the values
    const { name, value, checked, type } = event.target;

    setFormData((prevFromData) => {
      return {
        // suppose u just wanna update email
        // and u wanna let previous values like Fn, Ln
        // to be as they are is why previous data is cloned
        ...prevFromData,

        // no destructuring
        // [event.target.name]: event.target.value,

        // for destructured values up there, for checkbox
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("printing formData on clicking submit button");
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={submitHandler} className="flex flex-col">
        <input
          className="border"
          name="firstName"
          type="text"
          placeholder="First Name"
          onChange={changeHandler}
          // stores re-rendered data in input tag as well
          value={formData.firstName}
        />
        <input
          className="border"
          name="lastName"
          type="text"
          placeholder="Last Name"
          onChange={changeHandler}
          value={formData.lastName}
        />
        <input
          className="border"
          name="email"
          type="text"
          placeholder="Email Id"
          onChange={changeHandler}
          value={formData.email}
        />

        <textarea
          className="border"
          placeholder="enter a comment"
          name="comment"
          onChange={changeHandler}
        />

        <div>
          <input
            type="checkbox"
            checked={formData.checkbox}
            onChange={changeHandler}
            name="checkbox"
          />
          <label htmlFor="checkbox">Am I visible?</label>
        </div>

        <fieldset>
          <legend>Select Mode:</legend>
          {/* use same name on radio names for ticking only 1 button */}
          <input
            type="radio"
            name="mode"
            id="online mode"
            value="online mode"
            onChange={changeHandler}
            // handing checked value as true on it
            checked={formData.mode === "online mode"}
          />
          <label htmlFor="online mode">online mode</label>

          <br />

          <input
            type="radio"
            name="mode"
            id="offline mode"
            value="offline mode"
            onChange={changeHandler}
            checked={formData.mode === "offline mode"}
          />
          <label htmlFor="offline mode">offline mode</label>
        </fieldset>

        {/* dropdown menu using react.js */}
        <label htmlFor="favCar">Select ur fav car</label>
        <select
          onChange={changeHandler}
          id="favCar"
          value={formData.favCar}
          name="favCar"
        >
          <option value="scopio">scopio</option>
          <option value="audi">audi</option>
          <option value="bmw">bmw</option>
          <option value="roles royce">roles royce</option>
          <option value="ford">ford</option>
        </select>

        {/* by default its a submit button in case of form */}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
