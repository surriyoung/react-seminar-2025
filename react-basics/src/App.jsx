import Child from "./Child";
import { ArrowFunctionComp, ClassComp, FunctionComp } from "./Components";
import JsxPractice from "./JsxPractice";
import { BasicExpressions, ObjectArrayExpressions } from "./JsxExpression";
import PropsAndStylePractice from "./PropsAndStylePractice";

function Hello() {
  // return <h1>HEllO</h1>;
  return (
    <div>
      <h1>Hello</h1>
      <h2>Hi</h2>
    </div>
  );
}

function App() {
  return (
    <>
      {/* <h3>컴포넌트</h3>
      <Hello /> */}

      {/* <h3>컴포넌트 파일 분리</h3>
      <Child /> */}

      {/* <h3>컴포넌트 작성법</h3>
      <ClassComp />
      <FunctionComp />
      <ArrowFunctionComp /> */}

      <h3>JSX 문법</h3>
      <JsxPractice />

      {/* <h3>JSX 속성과 스타일링</h3>
      <PropsAndStylePractice /> */}
    </>
  );
}

export default App;
