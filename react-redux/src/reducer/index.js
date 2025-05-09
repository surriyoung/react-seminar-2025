import { combineReducers } from "redux"; // 여러 리듀서를 하나의 큰 리듀서로 합쳐주는 함수
import modalReducer from "./modal";

// 🛠️Reducer 등록
// rootReducer: 앱 전체에서 사용할 상태 모음
const rootReducer = combineReducers({
  modal: modalReducer, // modal이라는 이름으로 접근 가능
});

export default rootReducer;
