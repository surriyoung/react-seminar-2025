import { BasicExpressions, ObjectArrayExpressions } from "./JsxExpression";

// 태그를 꼭 닫아야 하는 이유
const element1 = <h3>Hello, World</h3>;
const element2 = (
  <ul>
    <li>A</li>
    <li>B</li>
    <li>C</li>
  </ul>
);

console.log(element1);
console.log(element2);

const language = "JavaScript";

function JsxPractice() {
  return (
    <>
      {/* 태그를 꼭 닫아야 한다 */}
      <h1>JSX</h1>
      <br />

      {/* JSX 표현식 */}
      {language}
      <BasicExpressions />
      <ObjectArrayExpressions />
    </>
  );
}

export default JsxPractice;
