import React from "react";
import { useState, useRef } from 'react';
import Items from "./pages/Items"
import AddItem from "./pages/addItem"
import './App.css';

let items = [];
function App() {
  const [data, setData] = useState({})
  // const [items, setItems] = useState([
  //   {
  //     id: 5,
  //     product: "chicken",
  //     quantity: 5,
  //     price: 20,
  //   },
  // ]);
  function setItems(i){
    items = i;
  }

  const addItem = (item) => {
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
    update();
  }

  const deleteTask =(id) => {
    setItems(items.filter((item) => item.id !== id));
    update();
  }

// useEffect(() => {
//     console.log("aaa");
//     fetch("/apil")
//       .then((res) => res.json())
//       .then((data) => setData(data.message));
//   }, []);
// useEffect(() => {
// fetch('/calc', {
//   method: 'POST',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({items
//   })
// })
//     .then(response => response.json())
//     .then(data => setData(data));
//   });

const update  = async() => {
    let res = await fetch('/calc', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({items
      })
    })
    let d = await res.json();
    setData(d);
  };

  return (
    <>
      <AddItem onAdd={addItem}/>
      <Items items={items} tot = {data} onDelete = {deleteTask}/>
    </>
  );
}

export default App;
