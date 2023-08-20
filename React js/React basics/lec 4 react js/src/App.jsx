import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  // 1. use of useEffect hook: every render
  // useEffect(() => {
  //   console.log("UI rendered");
  // });

  // 2. use of useEffect hook: first render
  // useEffect(() => {
  //   console.log("UI rendered only for once");
  // }, []);

  // 3. use of useEffect hook: first render + on dependency change
  // useEffect(() => {
  //   console.log("On dependancy change");
  // }, [text]);
  // here dependancy is `text`
  // which could be any other one

  // 4. to handle component's unmounting
  useEffect(() => {
    // executes after return function
    console.log("listener added");
    // executes first
    return () => {
      console.log("listener removed");
    };
  }, [text]);

  // alt of the code below is at above
  const changeHandler = (event) => {
    console.log(text);
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={changeHandler} />
    </div>
  );
}

export default App;
