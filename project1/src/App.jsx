import Child from "./Child";
import { ArrowFunctionComp, ClassComp, FunctionComp } from "./Components";
import { BasicExpressions, ObjectArrayExpressions } from "./JsxExpression";
import PropsAndStylePractice from "./PropsAndStylePractice";

// 태그를 꼭 닫아야 하는 이유
// const element1 = <h3>Hello, World</h3>;
// const element2 = (
//   <ul>
//     <li>A</li>
//     <li>B</li>
//     <li>C</li>
//   </ul>
// );

// console.log(element1);
// console.log(element2);

function Hello() {
  return <h1>HEllO</h1>;
}

function App() {
  return (
    <>
      <h1>Hello</h1>

      {/* <h3>컴포넌트</h3>
      <Hello /> */}

      {/* <h3>컴포넌트 파일 분리</h3>
      <Child /> */}

      {/* <h3>컴포넌트 작성법</h3>
      <ClassComp />
      <FunctionComp />
      <ArrowFunctionComp /> */}

      {/* <h3>JSX 문법</h3>
      <BasicExpressions />
      <ObjectArrayExpressions /> */}

      {/* <h3>JSX 속성과 스타일링</h3>
      <PropsAndStylePractice /> */}
    </>
  );
}

export default App;
