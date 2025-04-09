import "./App.css";
import React, { useReducer } from "react";
import { userReducer, initialState } from "./reducers/userReducer";

function App() {
  const [state, dispatch] = useReducer(userReducer, initialState);
  // state: 현재 상태값 (name, year, warning 등 포함)
  // dispatch: 상태를 업데이트하는 액션을 발생시키는 함수
  // userReducer: 상태를 업데이트하는 로직을 담고 있는 함수
  // initialState: 상태의 초기값

  return (
    <div>
      {/* 이름 입력 필드 */}
      <input
        type="text"
        placeholder="Enter name"
        value={state.name}
        onChange={(e) =>
          dispatch({
            type: "SET_NAME",
            payload: e.target.value,
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
