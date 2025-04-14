import { useDispatch } from "react-redux";
import { OPEN_MODAL } from "../reducer/modal";

export default function OpenModalButton() {
  // 마법을 쓰려면 지팡이가 필요한데 dispatch가 지팡이임
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch({ type: OPEN_MODAL });
  };
  return <button onClick={openModal}>모달 열기</button>;
}
