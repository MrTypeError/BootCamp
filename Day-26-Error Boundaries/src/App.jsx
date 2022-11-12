import { Component } from "react";
import { useState } from "react";
import "./App.css";

class ErrorBoundary extends Component {
  state = { error: null };
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    const { error } = this.state;
    if (error) {
      return (
        <div>
          <pre>{error.message}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

function Breaker() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount((prev) => {
      if (prev > 2) {
        throw new Error(" BOOM !!! ");
      }
      return prev + 1;
    });
  }

  return <button onClick={handleClick}>{count}</button>;
}

function AnotherComponent() {
  return <h1>Component For displaying some other Info</h1>;
}

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Breaker />
      </ErrorBoundary>
      <AnotherComponent />
    </div>
  );
}

export default App;
