import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "40px",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        width: "300px",
        margin: "40px auto",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <h2>Counter App</h2>
      <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        Current Count: {count}
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button
          onClick={() => setCount(count + 1)}
          style={{ padding: "10px 15px", cursor: "pointer" }}
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          style={{ padding: "10px 15px", cursor: "pointer" }}
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(0)}
          style={{
            padding: "10px 15px",
            backgroundColor: "#ff4d4d",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
