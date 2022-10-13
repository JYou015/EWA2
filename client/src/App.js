import React from "react";
import { useState, useEffect } from 'react';
import Items from "./pages/Items"
import AddItem from "./pages/addItem"
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [items, setItems] = useState([
    {
      id: 5,
      product: "chicken",
      quantity: 5,
      price: 20,
    },
  ]);

  const addItem = async (item) => {
    // const res = await fetch('http://localhost:5000/items', {
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    //   body: JSON.stringify(item),
    // })
    // const data = await res.json()
    const id = Math.floor(Math.random()*10000) + 1;
    const newItem = {id, ...item};
    setItems([...items, newItem]);

  }

useEffect(() => {
    console.log("aaa");
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <>
      <div>{!data ? "Loading..." : data}</div>
      <AddItem onAdd={addItem}/>
      <Items items={items}/>
    </>
  );
}

export default App;
