import { BasicExpressions, ObjectArrayExpressions } from "./JsxExpression";

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
