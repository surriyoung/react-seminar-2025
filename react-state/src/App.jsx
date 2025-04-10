import "./App.css";
import { useState } from "react";
import { Example1, Example2 } from "./Examples";

function App() {
  // ✅ 왜 useState를 써야 할까?
  // 직접 let으로 값을 관리하면 값은 바뀌지만 화면에는 반영되지 않음
  // React는 상태(state)가 바뀔 때만 화면을 새로 그리기 때문에,
  // 화면(UI) 업데이트가 자동으로 되려면 useState를 써야 함
  // let count = 0;
  // const SetCount = (num) => {
  //   count = num;
  //   console.log(count);
  // };
  // ✅useState를 사용해서 상태(count)와 상태를 바꾸는 함수(setCount)를 선언
  const [count, setCount] = useState(0);
  // ✅콘솔에서 useState의 반환값을 확인해보기
  // 출력 결과: [0, ƒ] → 첫 번째는 현재 값, 두 번째는 값을 바꾸는 함수
  console.log("useState ::: ", useState(0));
  return (
    <>
      <h2>Count: {count}</h2>
      {/*
        setCount를 사용해 상태 값을 1 증가시킴
        - 클릭할 때마다 count 값이 바뀌고, 화면에 자동으로 반영됨 (리렌더링)
      */}
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  );
}

export default App;
