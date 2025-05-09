//🧠Store 생성
import { createStore } from "redux"; // createStore: 실제 Redux 저장소 생성 함수
import rootReducer from "../reducer"; // rootReducer: 우리가 정의한 여러 리듀서를 하나로 합친 것

// Redux의 전역 상태 저장소 생성
const store = createStore(rootReducer);

export default store;
