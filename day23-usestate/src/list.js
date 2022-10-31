import React, { useState } from "react";

function List() {
  const getItems = () => {
    console.log("%c getItems called", "color:red");
    return Array(50).fill(0);
  };

  // This syntax will call the function multiple time will can create performance hit
  //dont use this (Never Recomended)
  //   const [items, setItems] = useState(getItems());

  //initializer Function (In this case the function will be called once)
  const [items, setItems] = useState(getItems);
  //   OR (same optimization)
  // const [items, setItems] = useState(()=>getItems);

  return (
    <div className="card">
      <ul className="items">
        {items.map((items, index) => (
          <li key={index}>{index + 1}</li>
        ))}
      </ul>
      <button onClick={() => setItems([...items, 0])}>Add Item</button>
    </div>
  );
}

export default List;
