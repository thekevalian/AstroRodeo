import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");
  const [count, setCount] = useState(0); // 👈 counter state

  // Fetch from your backend once on load
  useEffect(() => {
    fetch("/api/hello")
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => setMessage("Error: " + err.message));
  }, []);

fetch("/api/save-counter", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ value: count })
});

  // Function to handle increment
  const increment = () => {
    setCount(prev => prev + 1);
  };

  // Function to handle decrement
  const decrement = () => {
    setCount(prev => prev - 1);
  };

  // Optional: reset to 0
  const reset = () => {
    setCount(0);
  };

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        textAlign: "center",
        marginTop: "4rem"
      }}
    >
      <h1>{message}</h1>

      {/* Counter UI */}
      <div style={{ marginTop: "2rem" }}>
        <h2>Counter: {count}</h2>
        <button onClick={decrement} style={{ margin: "0 1rem" }}>-</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment} style={{ margin: "0 1rem" }}>+</button>
      </div>
    </div>
  );
}

export default App;
