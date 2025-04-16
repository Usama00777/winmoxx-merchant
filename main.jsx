import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: 50 }}>
      <h2>Merchant Login</h2>
      <input placeholder="Email" type="email" /><br/><br/>
      <input placeholder="Password" type="password" /><br/><br/>
      <button>Login</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);