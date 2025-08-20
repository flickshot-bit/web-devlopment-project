import React, { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(input).toString();
      setHistory([...history, `${input} = ${result}`]);
      setInput(result);
    } catch {
      setInput("Error");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "100vh",
        padding: "20px",
        background: "#1e293b",
        gap: "20px",
      }}
    >
      {/* Calculator */}
      <div
        style={{
          background: "#334155",
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
          width: "260px",
        }}
      >
        <h2 style={{ color: "white", textAlign: "center", marginBottom: "10px" }}>
          React Calculator
        </h2>
        <input
          type="text"
          value={input}
          readOnly
          style={{
            width: "100%",
            height: "40px",
            marginBottom: "15px",
            textAlign: "right",
            fontSize: "20px",
            borderRadius: "8px",
            padding: "5px",
            border: "none",
          }}
        />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
          {["7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+"].map((btn, i) => (
            <button
              key={i}
              onClick={() => (btn === "=" ? handleCalculate() : handleClick(btn))}
              style={{
                padding: "15px",
                fontSize: "18px",
                borderRadius: "8px",
                border: "none",
                background: "#475569",
                color: "white",
                cursor: "pointer",
              }}
            >
              {btn}
            </button>
          ))}

          <button
            onClick={handleClear}
            style={{
              gridColumn: "span 2",
              padding: "15px",
              fontSize: "18px",
              borderRadius: "8px",
              border: "none",
              background: "#dc2626",
              color: "white",
              cursor: "pointer",
            }}
          >
            C
          </button>
          <button
            onClick={handleBackspace}
            style={{
              gridColumn: "span 2",
              padding: "15px",
              fontSize: "18px",
              borderRadius: "8px",
              border: "none",
              background: "#f59e0b",
              color: "white",
              cursor: "pointer",
            }}
          >
            ⌫
          </button>
        </div>
      </div>

      {/* History Panel */}
      <div
        style={{
          background: "#475569",
          padding: "20px",
          borderRadius: "15px",
          width: "200px",
          color: "white",
          height: "fit-content",
          maxHeight: "400px",
          overflowY: "auto",
        }}
      >
        <h3 style={{ textAlign: "center", marginBottom: "10px" }}>History</h3>
        {history.length === 0 ? (
          <p style={{ textAlign: "center", color: "#cbd5e1" }}>No history yet</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {history.map((item, index) => (
              <li key={index} style={{ marginBottom: "8px", fontSize: "16px" }}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
