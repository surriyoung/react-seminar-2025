import "./App.css";
import FuncComp from "./FuncComp";
import { useState } from "react";

const App = () => {
  const [selected, setSelected] = useState("");

  return (
    <>
      {["", "FuncComp"].map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            checked={selected === option}
            onChange={(e) => setSelected(e.target.value)}
          />
          {option || "None"}
        </label>
      ))}
      {selected === "FuncComp" && <FuncComp />}
    </>
  );
};
export default App;
