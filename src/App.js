import React, { useState } from "react";
import BuildTree from "./components/Tree";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  return (
    <div>
      <BuildTree input={input} setInput={setInput} />
    </div>
  );
}

export default App;
