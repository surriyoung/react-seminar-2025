import "./App.css";
import { useState } from "react";
import { Example1, Example2 } from "./Examples";

function App() {
  // 예제1
  // setState를 사용하지 않는 경우
  // let count = 0;
  // const SetCount = (num) => {
  //   count = num;
  //   console.log(count);
  // };
  // const [count, setCount] = useState(0);
  // console.log(useState(0));
  // return (
  //   <>
  //     <h2>Count: {count}</h2>
  //     <button onClick={() => setCount(count + 1)}>+</button>
  //     <button onClick={() => setCount(count - 1)}>-</button>
  //   </>
  // );
  // 예제2
  // const [isPinned, setPinned] = useState(false);
  // const togglePinned = () => {
  //   setPinned(!isPinned);
  // };
  // return (
  //   <>
  //     <button onClick={togglePinned}>{isPinned && "📌"} Pinn This!</button>
  //   </>
  // );
  // 예제3(예제1+예제2)
  // return (
  //   <>
  //     <Example1 />
  //   </>
  // );
  // 예제4
  return (
    <>
      <Example2 />
    </>
  );
}

export default App;
