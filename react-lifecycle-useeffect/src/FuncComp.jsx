import { useState, useEffect } from "react";

const FuncComp = () => {
  const [count, setCount] = useState(0);
  // ✅ useEffect는 함수형 컴포넌트에서 생명주기(lifecycle)를 다룰 수 있도록 도와주는 Hook임
  // ✅ 컴포넌트가 렌더링될 때마다 특정 작업을 수행할 수 있도록 도와주는 Hook임
  // ✅ 기본 구조: useEffect(실행할 함수, 의존성 배열)
  useEffect(() => {
    console.log("FuncComp ::: 1. Mounted");
    return () => {
      console.log("FuncComp ::: 3. Unmounted");
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
  // 💡 clean-up 함수: 컴포넌트가 언마운트되거나 useEffect가 다시 실행되기 전에 호출됨

  useEffect(() => {
    console.log("FuncComp ::: 1. Mounted / 2. Updated");
  }, [count]);
  // 2️⃣특정 값(count)에 의존하는 경우
  // ✅실행 타이밍
  // 마운트 직후 (처음 렌더링 직후)
  // 의존성 배열에 있는 count 값이 변경될 때마다
  // 💡 이 useEffect는 count 값이 변경될 때만 실행됨

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
    // ✅prevCount는 현재 상태값(count)의 이전 값
    // count는 상태값이고, prevCount는 그 현재 값(count) 을 인자로 전달받아,
    // 그 값을 기반으로 새로운 값을 계산한 다음 업데이트하는 방식
    // 💡 항상 최신 상태 기준으로 계산됨
  };

  console.log("FuncComp ::: -- Rendering --");
  // ✅ 이 로그는 JSX를 리턴하기 직전에 실행됨
  // 💡 화면이 실제로 브라우저에 렌더링된 이후에 useEffect 안의 코드가 실행됨
  // 즉, useEffect는 "화면이 먼저 그려지고 나서" 실행되는 후처리 로직이라고 이해하면 됨

  return (
    <div>
      <h2>Function Component</h2>
      <h3>Count: {count}</h3>
      <button onClick={handleIncrement}>Increase</button>
    </div>
  );
};

export default FuncComp;
