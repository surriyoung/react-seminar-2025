import "./App.css";
import Button from "./Button";

function App() {
  // 함수 선언 방식으로 이벤트 핸들러 정의
  function handleClick() {
    console.log("Event 1");
  }

  return (
    <>
      {/* <h4>이벤트 핸들링</h4>
      <button
        onClick={handleClick}
        // onClick — HTML에서는 'onclick'이지만,React에서는 camelCase로 'onClick' 사용함
        // 중괄호 안에 함수 이름을 전달
        // 함수의 호출문이 아니라 함수를 전달하는 이유 : 바로 실행시키지 않고, '이벤트 발생 시 실행할 함수'를 전달하기 때문
      >
        Button 1
      </button>
      <button
        onClick={() => {
          console.log("Event 2");
        }}
        // 직접 함수를 작성해서 전달하는 방식 (익명 함수)
      >
        Button 2
      </button> */}

      <h4>이벤트 객체</h4>
      <Button name={"Home"} />
      <Button name={"Store"} />
      <Button name={"Contact"} />

      {/* <h4>키보드 관련 이벤트</h4>
      <input
        onFocus={() => console.log("Focus")}
        onBlur={() => console.log("Blur")}
        onChange={(e) => console.log(e.target.value)}
        onKeyDown={(e) => {
          console.log(e.key, "DOWN");
          if (e.key === "Enter" && e.shiftKey) {
            console.log("Shift + Enter DOWN");
          }
        }}
        onKeyUp={(e) => {
          console.log(e.key, "UP");
        }}
      /> */}
    </>
  );
}

export default App;
