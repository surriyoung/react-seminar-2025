// 초기값 지정
export const initialState = {
  name: "",
  year: "",
  warning: "",
};

// userReducer 함수는 state(현재 상태)와 action(상태 변경 요청)을 인자로 받아 새로운 상태 객체를 반환하는 함수
// 상태를 직접 수정하지 않고 항상 새로운 객체를 반환해야 함 (불변성 유지)
export function userReducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      // 각 액션은 하나의 객체를 반환함
      return {
        ...state, //각 객체는 현재의 상태값들이 담긴 state 객체의 값들을 스프레드 연산자로 가져온 다음
        name: action.payload.trim().toLowerCase(), //수정된 속성들의 값들을 덮어씌움
      };
    case "SET_YEAR":
      const age = new Date().getFullYear() - action.payload;
      if (age < 18) {
        return {
          ...state,
          //year 속성은 수정하지 않음->입력사항이 반영되지 않음
          warning: "Must be at least 18 yrs old!",
        };
      }
      return {
        ...state,
        year: action.payload,
        warning: "",
      };
    default:
      throw new Error("Unknown action type");
  }
}
