import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState(0);
  return (
    <div className="App">
      <button onClick={() => setValue(value + 1)}>Increase</button>
      <button
        onClick={() => {
          if (value > 0) {
            setValue(value - 1);
          }
        }}
      >
        Decrease
      </button>
      <p>{value}</p>
    </div>
  );
}
