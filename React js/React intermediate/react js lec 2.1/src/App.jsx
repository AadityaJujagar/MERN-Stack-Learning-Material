import { useState } from "react";
import "./index.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddr: "",
    city: "",
    state: "",
    zipCode: "",
    comments: false,
    candidates: false,
    offers: false,
    everything: "",
  });

  const changeHandler = (event) => {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={submitHandler}>
        <div className="flex flex-col">
          <label htmlFor="firstName">First Name</label>
          <input
            className="border"
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Aaditya"
            value={formData.firstName}
            onChange={changeHandler}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="LastName">Last Name</label>
          <input
            className="border"
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Jujagar"
            value={formData.lastName}
            onChange={changeHandler}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            className="border"
            type="text"
            name="email"
            id="email"
            placeholder="aadityajujagar@gmail.com"
            value={formData.email}
            onChange={changeHandler}
          />
        </div>

        <br />

        <div className="flex flex-col">
          <label htmlFor="country">Country</label>
          <select
            name="country"
            id="conutry"
            className="border"
            value={formData.country}
            onChange={changeHandler}
          >
            <option>India</option>
            <option>United States</option>
            <option>Germany</option>
            <option>Canada</option>
            <option>Great Britian</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="streetAddr">Street Address</label>
          <input
            className="border"
            type="text"
            name="streetAddr"
            id="streetAddr"
            placeholder="1234 central street"
            value={formData.streetAddr}
            onChange={changeHandler}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="city">City</label>
          <input
            className="border"
            type="text"
            name="city"
            id="city"
            placeholder="Pune"
            value={formData.city}
            onChange={changeHandler}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="state">State</label>
          <input
            className="border"
            type="text"
            name="state"
            id="state"
            placeholder="Maharashtra"
            value={formData.state}
            onChange={changeHandler}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="zipCode">Zip-code</label>
          <input
            className="border"
            type="text"
            name="zipCode"
            id="zipCode"
            placeholder="41****"
            value={formData.zipCode}
            onChange={changeHandler}
          />
        </div>

        <br />

        <fieldset>
          <legend>By Email</legend>
          <div className="flex">
            <input
              type="checkbox"
              id="comments"
              name="comments"
              checked={formData.comments}
              onChange={changeHandler}
            />
            <div className="flex flex-col">
              <label htmlFor="comments">Comments</label>
              <p>Get notified when someone posts a comment on a posting.</p>
            </div>
          </div>

          <div className="flex">
            <input
              type="checkbox"
              id="candidates"
              name="candidates"
              checked={formData.candidates}
              onChange={changeHandler}
            />
            <div className="flex flex-col">
              <label htmlFor="candidates">Candidates</label>
              <p>Get notified when a candidate applies for a job.</p>
            </div>
          </div>

          <div className="flex">
            <input
              type="checkbox"
              id="offers"
              name="offers"
              checked={formData.offers}
              onChange={changeHandler}
            />
            <div className="flex flex-col">
              <label htmlFor="offers">Offers</label>
              <p>Get notified when a candidate accepts or rejects an offer.</p>
            </div>
          </div>
        </fieldset>

        <br />

        <fieldset>
          <legend>Push notification</legend>
          <p>These are delivered via SMS to your mobile phone.</p>
          <div>
            <input
              type="radio"
              id="everything"
              value="everything"
              name="everything"
              onChange={changeHandler}
            />
            <label htmlFor="everything">Everything</label>
          </div>

          <div>
            <input
              type="radio"
              id="sameAsEmail"
              value="sameAsEmail"
              name="everything"
              onChange={changeHandler}
            />
            <label htmlFor="sameAsEmail">Same As Email</label>
          </div>

          <div>
            <input
              type="radio"
              id="nothing"
              value="nothing"
              name="everything"
              onChange={changeHandler}
            />
            <label htmlFor="nothing">Nothing</label>
          </div>
        </fieldset>

        <br />

        <button className="bg-blue-500 text-white py-2 px-4 font-bold rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
