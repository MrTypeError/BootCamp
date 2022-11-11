import { useState } from "react";
import "./App.css";
import PizzaTopings from "./PizzaTopings";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* Rendering Lists */}
      <header>
        <h1>Reandering Lists</h1>
        <PizzaTopings />
      </header>
    </div>
  );
}

export default App;
