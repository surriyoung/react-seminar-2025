import { useState, useEffect } from "react";

const FuncComp = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("FuncComp ::: 1. Mounted");
    return () => {
      console.log("FuncComp ::: 3. Unmounted");
      //useEffect 내부에서 clean-up 함수를 return 하도록 설계
      //컴포넌트가 언마운트되기 직전에 자동으로 호출됨
    };
  }, []);
  // 1️⃣빈 배열을 의존성으로 넘긴 경우
  // ✅실행 타이밍
  // 이 useEffect는 컴포넌트가 처음 마운트될 때 딱 1번 실행됨.
  // 두 번째 인자인 []은 "이 effect는 한 번만 실행되고 다시는 실행되지 않아도 된다"는 뜻.
  // 리액트는 렌더링 이후에 이 effect를 실행함.
  // ✅언마운트 시
  // return으로 넘긴 함수는 컴포넌트가 언마운트될 때 자동 실행됨.
  // 리소스 정리(clean-up) 목적.

  useEffect(() => {
    console.log("FuncComp ::: 1. Mounted / 2. Updated");
  }, [count]);
  // 2️⃣특정 값(count)에 의존하는 경우
  // ✅실행 타이밍
  // 마운트 직후 (처음 렌더링 직후)
  // 의존성 배열에 있는 count 값이 변경될 때마다

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  console.log("FuncComp ::: -- Rendering --");

  return (
    <div>
      <h2>Function Component</h2>
      <h3>Count: {count}</h3>
      <button onClick={handleIncrement}>Increase</button>
    </div>
  );
};

export default FuncComp;
