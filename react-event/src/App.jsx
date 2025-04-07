import "./App.css";
import Button from "./Button";

function App() {
  function handleClick() {
    console.log("Event 1");
  }

  return (
    <>
      {/* 
      <h4>이벤트 핸들링</h4>
      <button onClick={handleClick}>Button 1</button>
      <button
        onClick={() => {
          console.log("Event 2");
        }}
      >
        Button 2
      </button> */}

      {/* <h4>이벤트 객체</h4>
      <Button name={"Home"} />
      <Button name={"Store"} />
      <Button name={"Contact"} /> */}

      <h4>키보드 관련 이벤트</h4>
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
      />
    </>
  );
}

export default App;
