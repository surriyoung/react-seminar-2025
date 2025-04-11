import "./App.css";
import { useState, useMemo, useCallback } from "react";
import Child from "./Child";

function App() {
  // useMemo
  // const [count1, setCount1] = useState(0);
  // const [count2, setCount2] = useState(0);

  // const heavyCalculation = (num) => {
  //   console.log("Calculating...");
  //   let result = 0;
  //   for (let i = 0; i < 1000000000; i++) {
  //     result += num;
  //   }
  //   return result;
  // };

  // const calculatedValue = useMemo(() => heavyCalculation(count2), [count2]);

  // return (
  //   <>
  //     <p>Counter 1: {count1}</p>
  //     <button onClick={() => setCount1(count1 + 1)}>+</button>
  //     <button onClick={() => setCount1(count1 - 1)}>-</button>
  //     <p>Counter 2: {calculatedValue}</p>
  //     <button onClick={() => setCount2(count2 + 1)}>+</button>
  //     <button onClick={() => setCount2(count2 - 1)}>-</button>
  //   </>
  // );

  //React.memo
  // const [count, setCount] = useState(0);
  // const [active, setActive] = useState(true);

  // return (
  //   <>
  //     <h2>Parent</h2>
  //     <button onClick={() => setCount(count + 1)}>Increase</button>
  //     <button onClick={() => setActive((a) => !a)}>Change Name</button>
  //     <p>Count: {count}</p>
  //     <Child active={active} />
  //   </>
  // );

  //useCallback
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(true);

  const handleClick = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <>
      <h2>Parent</h2>
      <button onClick={() => setActive((a) => !a)}>Toggle Active</button>
      <p>Count: {count}</p>
      <Child active={active} onClick={handleClick} />
    </>
  );
}

export default App;
