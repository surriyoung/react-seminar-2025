import { createStore } from "redux";
import rootReducer from "../reducer";

// 리듀서란? 우리가 사용할 명령들, 함수들을 묶어놓은 것
const store = createStore(rootReducer);
export default store;
