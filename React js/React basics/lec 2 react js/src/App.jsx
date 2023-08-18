import React from "react";
import "./App.css";
import Items from "./components/Items";
import NewProduct from "./components/NewProduct/NewProduct";

const App = () => {
  let product_details = [
    {
      id: "p1",
      title: "product 1",
      price: 100,
      date: new Date(2022, 8, 11),
    },
    {
      id: "p2",
      title: "product 2",
      price: 200,
      date: new Date(2021, 9, 23),
    },
    {
      id: "p3",
      title: "product 3",
      price: 50,
      date: new Date(2021, 4, 21),
    },
    {
      id: "p4",
      title: "product 4",
      price: 1000,
      date: new Date(2023, 1, 1),
    },
  ];

  function childToParent(data) {
    console.log("data transfer succesful");
    console.log(data);
  }

  return (
    <div>
      <div className="NewProduct">
        <NewProduct printImportedData={childToParent} />
      </div>
      <div className="App">
        <Items details={product_details} />
      </div>
    </div>
  );
};

export default App;
