import { useDispatch } from "react-redux";
import { OPEN_MODAL } from "../reducer/modal";

export default function OpenModalButton() {
  // dispatch: 액션을 리듀서에게 전달하는 함수 (마법 지팡이 역할)
  const dispatch = useDispatch(); // 📮Dispatch 사용준비

  const openModal = () => {
    dispatch({ type: OPEN_MODAL }); // ⚡Action을 Dispatch, 📮Dispatch실행
  };
  return <button onClick={openModal}>모달 열기</button>;
}
