// 액션 타입을 선언해주는 것이 좋음
export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const OPEN_MODAL = "OPEN_MODAL";

// initialState : 리덕스는 앱 전체에서 공용으로 사용하는 상태를 관리하는 하나의 큰 객체. 이 객체의 초기값이 initialState
const initialState = {
  isShow: false,
};

/**
 * 루트 리듀서
 * @param {*} state : 현재 상태
 * @param {*} action : 액션 객체(함수를 호출하는 주문)
 * @returns
 */
const modalReducer = (state = initialState, action) => {
  // rootReducer 안에서는 action.type이라는 걸 선언한다.
  // action.type(액션객체) -- 주문을 외친다("TOGGLE_MODAL"!)
  switch (action.type) {
    case TOGGLE_MODAL:
      // "TOGGLE_MODAL"에 대한 명령을 return 안에 넣어줌
      return { ...state, isShow: !state.isShow };
    case CLOSE_MODAL:
      return { ...state, isShow: false };
    case OPEN_MODAL:
      return { ...state, isShow: true };
    default:
      return state;
  }
};
export default modalReducer;
