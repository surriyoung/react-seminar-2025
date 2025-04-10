const handleEvent = (name, e) => {
  console.log(name, e);
  console.log(name, e.clientX, e.clientY);
  console.log(name, e.shiftKey);
};

const Button = ({ name }) => (
  <button
    // 클릭 이벤트가 발생하면 handleEvent 함수 호출
    // e는 이벤트 객체, name은 버튼 이름
    onClick={(e) => handleEvent(name, e)}
  >
    {name}
  </button>
);

export default Button;
