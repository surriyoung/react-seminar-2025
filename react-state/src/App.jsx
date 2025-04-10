import "./App.css";
import { useState } from "react";

function App() {
  // ✅ 왜 useState를 써야 할까?
  // - 직접 let으로 값을 관리하면 값은 바뀌지만 화면에는 반영되지 않음
  // - React는 상태(state)가 바뀔 때만 화면을 새로 그리기 때문에,
  // - 값이 바뀌었을 때 화면(UI) 업데이트가 자동으로 되게 하려면 useState를 써야 함

  // ❌ 이렇게 하면 화면에 값이 반영되지 않음
  // let count = 0;
  // const SetCount = (num) => {
  //   count = num;
  //   console.log(count);
  // };

  // ✅useState를 사용해서 상태(count)와 상태를 바꾸는 함수(setCount)를 선언
  // - count: 현재 상태값 (초기값은 0)
  // - setCount: count 값을 변경할 때 사용하는 함수
  const [count, setCount] = useState(0);

  // 💡 참고: 콘솔에서 useState의 반환값을 확인해보기
  // 출력 결과: [0, ƒ] → 0은 현재 상태값, ƒ는 setCount 함수(값을 바꾸는 함수)
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
