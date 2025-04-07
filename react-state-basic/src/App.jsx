import "./App.css";
import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0);

  // console.log(useState(0));

  // return (
  //   <>
  //     <h2>Count: {count}</h2>
  //     <button onClick={() => setCount(count + 1)}>+</button>
  //     <button onClick={() => setCount(count - 1)}>-</button>
  //   </>
  // );

  const [isPinned, setPinned] = useState(false);

  const togglePinned = () => {
    setPinned(!isPinned);
  };

  return (
    <>
      <button onClick={togglePinned}>{isPinned && "📌"} Pinn This!</button>
    </>
  );
}

export default App;
