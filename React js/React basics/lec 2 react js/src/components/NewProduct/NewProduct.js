import "./NewProduct.css";
import { useState } from "react";

function NewProduct(importData) {
  // 2. new single use case, multiple states
  const [newTitle, setTitle] = useState("");
  const [newDate, setDate] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    // console.log(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    // console.log(event.target.value);
    console.log(newTitle);
    console.log(newDate);
  };

  function submitHandler(event) {
    event.preventDefault();
    const productData = {
      title: newTitle,
      date: newDate,
    };
    console.log(productData);

    // 3.
    importData.printImportedData(productData);

    setTitle("");
    setDate("");
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="newProductTitle">
          <label>Title : </label>
          <input
            type="text"
            value={newTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="newProductDate">
          <label>Date : </label>
          <input
            value={newDate}
            type="date"
            onChange={dateChangeHandler}
            min="2023-01-01"
            max="2023-12-12"
          ></input>
        </div>
        <div className="newProductButton">
          <button type="submit">Add Product</button>
        </div>
      </form>
    </div>
  );
}

export default NewProduct;
