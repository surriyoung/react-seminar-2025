import { useDispatch, useSelector } from "react-redux";
import { CLOSE_MODAL } from "../../reducer/modal";
import { ModalWrapper } from "./Modal.style";

export default function Modal() {
  const isShow = useSelector((state) => state.modal.isShow);
  const dispatch = useDispatch(); // 📮Dispatch 준비: dispatch 함수로 액션 전송 가능

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL }); // 📮Dispatch 실행
  };

  if (!isShow) return null;

  return (
    <ModalWrapper>
      <div className="container">
        <div className="header">
          <h1>제목</h1>
          <button onClick={closeModal}>닫기</button>
        </div>
        <p>내용</p>
      </div>
    </ModalWrapper>
  );
}
