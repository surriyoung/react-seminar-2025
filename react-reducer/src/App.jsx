import "./App.css";
import React, { useReducer } from "react";
import { userReducer, initialState } from "./reducers/userReducer";

function App() {
  /**
   * useState대신 useReducer을 사용하는 이유
   * 관리해 할 상태 로직이 복잡할 때
   * 같은 로직이 여러 컴포넌트에서 사용될 때
   * -> 분리된 문서에서 독립적으로 작성하여 코드의 효율성과 가독성을 높일 수 있음
   */

  /*
    useReducer 함수에 넣을 
    초기값 객체(initialState)와 로직 함수(userReducer)를 userReducer.js 파일에 작성함
    그 결과로 두 요소가 담긴 배열이 반환되어 상수들에 배열 디스트럭쳐링으로 할당됨

    state: 현재 상태값들을 가진 객체/initialState에서 작성한 name, year, warning이 키로 사용되고 있음/각 input의 value와 화면 출력(p 태그) 등에 사용됨
    dispatch: 'state'를 수정하는 함수/사용자 입력에 반응하는 이벤트 핸들러에서 사용되고 있음/이 함수를 사용하여 'state'객체의 값들을 바꾸고 웹페이지를 리렌더링함
    userReducer: 상태를 업데이트하는 로직을 담고 있는 함수
    initialState: 상태의 초기값
  */
  //const [state, setState] = useState(0); 와 비슷한 구조
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <div>
      {/* 이름 입력 필드 */}
      <input
        type="text"
        placeholder="Enter name"
        value={state.name}
        onChange={(e) =>
          //dispatch 함수의 인자로 객체가 들어간다.
          // userReducer 함수의 두 번째 매개변수(action)으로 사용됨
          // 이 객체는 반드시 'type' 속성을 가져야 하고,
          // 그 외에 전달할 데이터를 'payload' 속성에 담음
          dispatch({
            type: "SET_NAME",
            // type: 'dispath' 함수가 어떤 액션을 취하는 것인지 구별하기 위해 사용/ switch (action.type)에 사용되어 'type'의 속성값에 따라 케이스로 구분된 액션 중 하나가 동작함
            payload: e.target.value,
            // state의 수정된 속성값으로 담길 값들은 'payload' 속성에 담겨 전달됨
          })
        }
      />
      {/*
       ** 사용자가 입력한 텍스트를 payload로 받아서 SET_NAME 액션을 dispatch함
       ** useReducer 내부에서 이 액션을 처리해 state.name을 업데이트함
       */}
      {/* 출생 연도 입력 필드 */}
      <input
        type="number"
        placeholder="Enter birth year"
        value={state.year}
        onChange={(e) =>
          dispatch({
            type: "SET_YEAR",
            payload: e.target.value,
          })
        }
      />
      {/*
       ** SET_YEAR 액션을 통해 state.year을 업데이트함
       ** 보통 reducer 내부에서 해당 연도의 유효성을 판단해 warning 메시지를 업데이트 할 수 있음
       */}
      {/* 경고 메시지 출력 */}
      {state.warning && <p style={{ color: "red" }}>{state.warning}</p>}
      {/* 상태에 warning이 존재할 경우 경고 메시지 화면에 표시 */}
      {/* 상태 출력 */}
      <p>Name: {state.name}</p>
      <p>Year: {state.year}</p>
    </div>
  );
}

export default App;
